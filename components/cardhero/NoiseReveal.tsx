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
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!active || animationStarted.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const img = new window.Image();
    img.src = src;
    let animId: number;

    img.onload = () => {
      animationStarted.current = true;
      
      // Clear canvas with background color
      ctx.fillStyle = '#0b0b20';
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      // Calculate cover fit dimensions
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

      type Cell = { x: number; y: number; alpha: number; revealed: boolean };
      const cells: Cell[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({ x: c * cellSize, y: r * cellSize, alpha: 0, revealed: false });
        }
      }

      const shuffled = [...cells].sort(() => Math.random() - 0.5);
      let idx = 0;

      const tick = () => {
        // Speed up animation slightly
        const batch = Math.max(2, Math.floor(cells.length / 60));
        for (let i = 0; i < batch; i++) {
          if (idx < shuffled.length) { 
            shuffled[idx].revealed = true; 
            idx++; 
          }
        }

        let stillAnimating = false;
        cells.forEach(cell => {
          if (cell.revealed && cell.alpha < 1) {
            cell.alpha = Math.min(1, cell.alpha + 0.1); // Increased alpha speed
            
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

        if (idx < shuffled.length || stillAnimating) {
          animId = requestAnimationFrame(tick);
        } else {
          // Final pass to ensure perfect rendering
          ctx.globalAlpha = 1;
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
          setDone(true);
          onComplete?.();
        }
      };

      animId = requestAnimationFrame(tick);
    };

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [src, width, height, cellSize, onComplete, active]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        display: 'block', 
        width, 
        height,
        // Ensure the canvas doesn't disappear if it was doing that
        opacity: active ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  );
}
