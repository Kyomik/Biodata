"use client";

import { useEffect, useRef } from "react";
import { UseGlobeInteractionOptions } from "../globe.types";

export const useGlobeInteraction = ({
  canvasRef,
  tooltipRef,
  badgeHits,
  hovered,
  skills,
  autoSpinSpeed,
}: UseGlobeInteractionOptions) => {
  const rotX = useRef(0.3);
  const rotY = useRef(0);
  const velY = useRef(autoSpinSpeed);

  const autoSpinSpeedRef = useRef(autoSpinSpeed);
  useEffect(() => { autoSpinSpeedRef.current = autoSpinSpeed; }, [autoSpinSpeed]);

  const updateTooltip = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const tt = tooltipRef.current;
    if (!canvas || !tt) return;

    const rect = canvas.getBoundingClientRect();

    // Cek apakah mouse benar2 di atas canvas ini
    const isOver =
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom;

    if (!isOver) {
      hovered.current = -1;
      tt.style.opacity = "0";
      return;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (clientX - rect.left) * scaleX;
    const my = (clientY - rect.top) * scaleY;

    let hov = -1;
    let hoverRect: (typeof badgeHits.current)[0] | null = null;
    for (let k = badgeHits.current.length - 1; k >= 0; k--) {
      const b = badgeHits.current[k];
      if (mx >= b.bx && mx <= b.bx + b.bw && my >= b.by && my <= b.by + b.bh) {
        hov = b.i;
        hoverRect = b;
        break;
      }
    }
    hovered.current = hov;

    if (hov >= 0 && hoverRect) {
      const s = skills[hov];
      if (!s) { tt.style.opacity = "0"; return; }

      const cssScaleX = rect.width / canvas.width;
      const cssScaleY = rect.height / canvas.height;

      const left = rect.left + (hoverRect.bx + hoverRect.bw / 2) * cssScaleX;
      const top  = rect.top  + hoverRect.by * cssScaleY - 10;

      tt.style.left    = `${left}px`;
      tt.style.top     = `${top}px`;
      tt.style.opacity = "1";

      const nameEl  = tt.querySelector<HTMLElement>(".tt-name");
      const levelEl = tt.querySelector<HTMLElement>(".tt-level");
      const barEl   = tt.querySelector<HTMLElement>(".tt-bar");

      if (nameEl)  nameEl.textContent  = s.name;
      if (levelEl) levelEl.textContent = `${s.desc} · ${s.level}`;
      if (barEl) {
        barEl.style.width      = `${s.pct}%`;
        barEl.style.background = `linear-gradient(90deg, ${s.color}88, ${s.color})`;
      }
    } else {
      tt.style.opacity = "0";
    }
  };

  useEffect(() => {
    // Listen di window bukan canvas
    const onMouseMove = (e: MouseEvent) => updateTooltip(e.clientX, e.clientY);
    const onMouseLeave = () => {
      hovered.current = -1;
      if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove);
    canvasRef.current?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      canvasRef.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skills]);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      rotY.current += velY.current;
      velY.current = velY.current * 0.98 + autoSpinSpeedRef.current * 0.02;
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return { rotX, rotY, dragging: { current: false } };
};