"use client";

import { useEffect, useRef, useCallback } from "react";
import { GlobeProps, BadgeHit } from "./globe.types";
import { sphToCart, rotatePoint, projectPt, roundRect } from '../../app/commons/utils/math.utils'
import { useGlobeInteraction } from "./hooks/useGlobeInteraction";
import { GlobeTooltip } from "./GlobeTooltip";

const CANVAS_HEIGHT = 580;
const defaultSkills: any[] = [];

export default function GlobeSkills({
  skills = defaultSkills,
  imgSrc = "/images/127378-cute-anime-boy-free-download-png-hd_800x800.webp",
  canvasWidth = 520,
  photoWidth = 240,
  photoHeight = 320,
  photoBottomOffset = -25,
  orbitRatio = 0.4,
  fov = 500,
  orbitCenterYAdjust = -50,
  autoSpinSpeed = 0.003,
  showGrid = true,
  className = "",
}: GlobeProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLImageElement | null>(null);

  const badgeHits = useRef<BadgeHit[]>([]);
  const hovered   = useRef(-1);

  const { rotX, rotY } = useGlobeInteraction({
    canvasRef,
    tooltipRef,
    badgeHits,
    hovered,
    skills,
    autoSpinSpeed,
  });

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgSrc;
    img.onload = () => { imgRef.current = img; };
  }, [imgSrc]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvasWidth;
    const ch = CANVAS_HEIGHT;

    const cx   = cw / 2;
    const cy   = ch / 2 + orbitCenterYAdjust;
    const rx   = rotX.current;
    const ry   = rotY.current;
    const R    = Math.min(cw, ch) * orbitRatio;
    const imgX = (cw - photoWidth) / 2;
    const imgY = ch - photoHeight - photoBottomOffset;

    ctx.clearRect(0, 0, cw, ch);

    if (showGrid) {
      ctx.strokeStyle = "#aaaacc";
      ctx.lineWidth   = 0.8;
      ctx.globalAlpha = 0.06;

      for (let lat = -80; lat <= 80; lat += 40) {
        ctx.beginPath();
        for (let lon = 0; lon <= 360; lon += 5) {
          const p = projectPt(rotatePoint(sphToCart(lat, lon, R), rx, ry), cx, cy, fov, R);
          lon === 0 ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      }
      for (let lon = 0; lon < 360; lon += 45) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const p = projectPt(rotatePoint(sphToCart(lat, lon, R), rx, ry), cx, cy, fov, R);
          lat === -90 ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    let items = skills.map((s, i) => {
      const raw  = sphToCart(s.lat, s.lon + ry * (180 / Math.PI) * 10, R);
      const rot  = rotatePoint(raw, rx, ry);
      const proj = projectPt(rot, cx, cy, fov, R);
      return { s, i, ...proj };
    });

    const FORCE_FRONT_SCALE = 0.85;
    items = items.map((item) => {
      if (item.scale > FORCE_FRONT_SCALE && item.z < 0) {
        return { ...item, z: -item.z };
      }
      return item;
    });

    badgeHits.current = [];

    const drawBadge = (item: any, opacity: number, isBehind: boolean) => {
      const { s, i, px, py, scale } = item;
      const depth      = Math.max(0.25, Math.min(1, (scale - 0.35) / 0.65));
      const baseAlpha  = 0.35 + depth * 0.65;
      const finalAlpha = baseAlpha * opacity;
      const sz         = 0.65 + depth * 0.85;
      const isHov      = hovered.current === i;
      const bsz        = sz * (isHov ? 1.18 : 1);
      const fSize      = Math.max(13, Math.round(15 * bsz));

      ctx.font = `500 ${fSize}px 'Segoe UI', system-ui, sans-serif`;
      const tw = ctx.measureText(s.name).width;
      const bw = tw + 20 * bsz;
      const bh = 26 * bsz;
      const bx = px - bw / 2;
      const by = py - bh / 2;

      if (opacity === 1 || isBehind) {
        badgeHits.current.push({ i, bx, by, bw, bh });
      }

      ctx.globalAlpha = finalAlpha;
      ctx.fillStyle   = s.bg;
      roundRect(ctx, bx, by, bw, bh, bh / 2);
      ctx.fill();

      const borderAlpha = isHov ? "ff" : depth > 0.6 ? "bb" : "55";
      ctx.strokeStyle   = s.color + borderAlpha;
      ctx.lineWidth     = isHov ? 1.5 : 1;
      roundRect(ctx, bx, by, bw, bh, bh / 2);
      ctx.stroke();

      if (isHov) {
        ctx.globalAlpha = finalAlpha * 0.25;
        ctx.fillStyle   = s.color;
        roundRect(ctx, bx, by, bw, bh, bh / 2);
        ctx.fill();
      }

      ctx.globalAlpha  = finalAlpha;
      ctx.fillStyle    = isHov ? "#fff" : s.color;
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(s.name, px, py + 0.5);
      ctx.globalAlpha  = 1;
    };

    const TRANSITION_Z = 25;
    const frontItems: { item: any; opacity: number }[] = [];

    items.forEach((item) => {
      const absZ = Math.abs(item.z);
      if (absZ < TRANSITION_Z) {
        const behindOpacity = Math.max(0, 1 - (item.z + TRANSITION_Z) / (2 * TRANSITION_Z));
        const frontOpacity  = Math.max(0, 1 - (-item.z + TRANSITION_Z) / (2 * TRANSITION_Z));
        if (behindOpacity > 0.02) drawBadge(item, behindOpacity, true);
        if (frontOpacity  > 0.02) frontItems.push({ item, opacity: frontOpacity });
      } else {
        if (item.z < 0) drawBadge(item, 1, true);
        else frontItems.push({ item, opacity: 1 });
      }
    });

    if (imgRef.current) {
      ctx.drawImage(imgRef.current, imgX, imgY, photoWidth, photoHeight);
    } else {
      ctx.fillStyle    = "#ccc";
      ctx.fillRect(imgX, imgY, photoWidth, photoHeight);
      ctx.fillStyle    = "#666";
      ctx.font         = "14px sans-serif";
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Foto", imgX + photoWidth / 2, imgY + photoHeight / 2);
    }

    frontItems.forEach(({ item, opacity }) => drawBadge(item, opacity, false));
  }, [canvasWidth, photoWidth, photoHeight, photoBottomOffset, orbitCenterYAdjust, showGrid, skills, fov, orbitRatio]);

  useEffect(() => {
    let frameId: number;
    const loop = () => {
      draw();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [draw]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`block ${className}`}
        width={canvasWidth}
        height={CANVAS_HEIGHT}
      />
      <GlobeTooltip tooltipRef={tooltipRef} />
    </>
  );
}