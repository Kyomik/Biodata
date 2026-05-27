'use client';

import { useEffect, useRef, useState } from 'react';

interface NoiseRevealProps {
  src: string;
  width?: number;
  height?: number;
  cellSize?: number;
  className?: string;
  active?: boolean;
  onComplete?: () => void;
}

type Cell = { x: number; y: number; alpha: number; revealed: boolean };

export function NoiseReveal({
  src,
  width = 330,
  height = 330,
  cellSize = 14,
  className = '',
  active = true,
  onComplete,
}: NoiseRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  // Persist animation state across active/inactive states (Pause & Resume)
  const animIdRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgLoadedRef = useRef<boolean>(false);
  const cellsRef = useRef<Cell[]>([]);
  const shuffledRef = useRef<Cell[]>([]);
  const idxRef = useRef<number>(0);
  const cropCoordsRef = useRef<{ sx: number; sy: number; sw: number; sh: number } | null>(null);
  
  // Keep track of actual viewport intersection
  const activeRef = useRef<boolean>(active);

  // Sync active prop to ref to avoid stale closures in img.onload
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Initialize image and grid once on mount or when src/dimensions change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Reset state
    setDone(false);
    setHasStarted(false);
    imgLoadedRef.current = false;
    idxRef.current = 0;
    cellsRef.current = [];
    shuffledRef.current = [];
    cropCoordsRef.current = null;

    const img = new window.Image();
    img.src = src;
    imgRef.current = img;

    img.onload = () => {
      imgLoadedRef.current = true;
      
      // Initial background clear
      ctx.fillStyle = '#0b0b20';
      ctx.fillRect(0, 0, width, height);

      // Create cells grid
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      const cells: Cell[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({ x: c * cellSize, y: r * cellSize, alpha: 0, revealed: false });
        }
      }

      cellsRef.current = cells;
      shuffledRef.current = [...cells].sort(() => Math.random() - 0.5);

      // Calculate cover fit cropping dimensions
      const canvasRatio = width / height;
      const imgRatio = img.width / img.height;
      let sx, sy, sw, sh;

      if (imgRatio > canvasRatio) {
        sh = img.height;
        sw = img.height * canvasRatio;
        sx = (img.width - sw) / 2;
        sy = 0;
      } else {
        sw = img.width;
        sh = img.width / canvasRatio;
        sx = 0;
        sy = (img.height - sh) / 2;
      }

      cropCoordsRef.current = { sx, sy, sw, sh };

      // If active, trigger animation
      if (activeRef.current) {
        triggerAnimation();
      }
    };

    return () => {
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
      }
    };
  }, [src, width, height, cellSize]);

  // Handle parent active prop changes (Pause & Resume)
  useEffect(() => {
    if (active) {
      triggerAnimation();
    } else {
      // PAUSE: instantly cancel animation frame when active becomes false
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
        animIdRef.current = 0;
      }
    }
  }, [active, done]);

  const triggerAnimation = () => {
    // Only run if image is loaded, not already completed, and not currently looping
    if (!imgLoadedRef.current || done || animIdRef.current !== 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgRef.current!;
    const { sx, sy, sw, sh } = cropCoordsRef.current!;
    const cells = cellsRef.current;
    const shuffled = shuffledRef.current;

    setHasStarted(true);

    const tick = () => {
      // Speed up animation slightly
      const batch = Math.max(2, Math.floor(cells.length / 60));
      for (let i = 0; i < batch; i++) {
        if (idxRef.current < shuffled.length) { 
          shuffled[idxRef.current].revealed = true; 
          idxRef.current++; 
        }
      }

      let stillAnimating = false;
      cells.forEach(cell => {
        if (cell.revealed && cell.alpha < 1) {
          cell.alpha = Math.min(1, cell.alpha + 0.1);
          
          const cw = Math.min(cellSize, width - cell.x);
          const ch = Math.min(cellSize, height - cell.y);
          
          // Map cell coordinates to source image coordinates (Cover fit)
          const cellSx = sx + (cell.x * sw / width);
          const cellSy = sy + (cell.y * sh / height);
          const cellSw = cw * sw / width;
          const cellSh = ch * sh / height;

          ctx.globalAlpha = cell.alpha;
          ctx.drawImage(img, cellSx, cellSy, cellSw, cellSh, cell.x, cell.y, cw, ch);
          ctx.globalAlpha = 1;
          stillAnimating = true;
        }
      });

      if (idxRef.current < shuffled.length || stillAnimating) {
        animIdRef.current = requestAnimationFrame(tick);
      } else {
        // Final pass to ensure perfect rendering
        ctx.globalAlpha = 1;
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
        animIdRef.current = 0;
        setDone(true);
        onComplete?.();
      }
    };

    animIdRef.current = requestAnimationFrame(tick);
  };



  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        display: 'block', 
        width, 
        height,
        // Once animation has started, keep canvas visible regardless of active prop
        // This prevents the canvas from disappearing when scrolling away mid-animation
        opacity: (hasStarted || active) ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  );
}
