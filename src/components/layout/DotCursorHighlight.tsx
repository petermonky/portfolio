"use client";

import { useEffect, useRef } from "react";

const DOT_SPACING = 22;
const DOT_RADIUS = 1.2;
const HIGHLIGHT_RADIUS = 220;
const BASE_ALPHA = 0.08;
const MAX_ALPHA = 0.24;
const DOT_COLOR = "15, 23, 42";

export default function DotCursorHighlight() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const drawDots = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      ctx.clearRect(0, 0, width, height);
      const highlight = pointerRef.current;

      for (let x = -DOT_SPACING; x <= width + DOT_SPACING; x += DOT_SPACING) {
        for (
          let y = -DOT_SPACING;
          y <= height + DOT_SPACING;
          y += DOT_SPACING
        ) {
          let alpha = BASE_ALPHA;
          if (highlight) {
            const dx = highlight.x - x;
            const dy = highlight.y - y;
            const dist = Math.hypot(dx, dy);
            if (dist < HIGHLIGHT_RADIUS) {
              const intensity = 1 - dist / HIGHLIGHT_RADIUS;
              alpha =
                BASE_ALPHA +
                (MAX_ALPHA - BASE_ALPHA) * Math.pow(intensity, 1.4);
            }
          }

          ctx.fillStyle = `rgba(${DOT_COLOR}, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const queueDraw = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        drawDots();
        frameRef.current = null;
      });
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      queueDraw();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      queueDraw();
    };

    const handlePointerLeave = () => {
      pointerRef.current = null;
      queueDraw();
    };

    resizeCanvas();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resizeCanvas);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dot-grid-canvas fixed"
      aria-hidden="true"
    />
  );
}
