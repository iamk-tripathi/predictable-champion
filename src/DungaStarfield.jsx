import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const STAR_COUNT = 900;
const DEPTH_TRAVEL = 3.2;
const FOCAL = 0.32;

function ss(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export const DungaStarfield = forwardRef(function DungaStarfield(_, ref) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const nebulaeRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rand = (() => {
      let s = 1337;
      return () => {
        s = (s * 1664525 + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    })();

    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: rand() * 2 - 1,
      y: rand() * 2 - 1,
      z: rand() * 0.999 + 0.001,
      b: 0.35 + rand() * 0.65,
      tw: 0.6 + rand() * 1.8,
      seed: rand() * Math.PI * 2,
    }));

    nebulaeRef.current = [
      { x: 0.22, y: 0.3, r: 0.55, color: "56, 78, 140", drift: 0.6 },
      { x: 0.8, y: 0.68, r: 0.62, color: "120, 60, 130", drift: 1.1 },
      { x: 0.55, y: 0.18, r: 0.4, color: "140, 96, 70", drift: 0.85 },
    ];

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useImperativeHandle(ref, () => ({
    render(progress, timeMs) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w, h, dpr } = sizeRef.current;
      const W = w * dpr;
      const H = h * dpr;
      const cx = W / 2;
      const cy = H / 2;
      const t = timeMs * 0.001;

      ctx.fillStyle = "#100e0e";
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = "screen";
      for (const n of nebulaeRef.current) {
        const px =
          (n.x + Math.sin(t * 0.05 * n.drift) * 0.02 + progress * 0.04 * n.drift) * W;
        const py =
          (n.y - progress * 0.12 * n.drift + Math.cos(t * 0.04 * n.drift) * 0.02) * H;
        const radius = n.r * Math.min(W, H);
        const g = ctx.createRadialGradient(px, py, 0, px, py, radius);
        g.addColorStop(0, `rgba(${n.color}, 0.12)`);
        g.addColorStop(0.5, `rgba(${n.color}, 0.05)`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }
      ctx.globalCompositeOperation = "source-over";

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        let z = s.z - progress * DEPTH_TRAVEL;
        z = ((z % 1) + 1) % 1;
        if (z < 0.001) z = 0.001;

        const k = FOCAL / z;
        const px = cx + s.x * k * W;
        const py = cy + s.y * k * H;
        if (px < -20 || px > W + 20 || py < -20 || py > H + 20) continue;

        const depthFade = ss(0.0, 0.12, z) * ss(1.0, 0.72, z);
        const twinkle = 0.7 + 0.3 * Math.sin(t * s.tw + s.seed);
        const alpha = depthFade * s.b * twinkle;
        if (alpha <= 0.01) continue;

        const size = Math.max(0.4, (1 - z) * 2.6 * dpr);
        ctx.globalAlpha = Math.min(1, alpha);
        ctx.fillStyle = "#f6f4f1";
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    },
  }));

  return <canvas ref={canvasRef} className="df-canvas" aria-hidden="true" />;
});
