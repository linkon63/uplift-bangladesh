"use client";

import React, { useEffect, useRef } from "react";

export default function SpaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let canvasRafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleCanvasResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    handleCanvasResize();
    window.addEventListener("resize", handleCanvasResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / (rect.width || 1) - 0.5;
      const y = (e.clientY - rect.top) / (rect.height || 1) - 0.5;
      targetMouseX = x * 25;
      targetMouseY = y * 25;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Multi-layer particle field
    const count = 120;
    const stars = Array.from({ length: count }, () => {
      const z = Math.random() * 3 + 0.5; // depth layer: 0.5 to 3.5
      return {
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 600),
        z,
        radius: (Math.random() * 1.2 + 0.4) * (z / 2),
        speed: (Math.random() * 0.35 + 0.1) * (z / 1.5),
        baseOpacity: Math.random() * 0.6 + 0.25,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;
    const drawStars = () => {
      time += 1;
      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        // Apply mouse parallax proportional to star depth
        const px = star.x + mouseX * star.z;
        const py = star.y + mouseY * star.z;

        const currentOpacity =
          star.baseOpacity + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.25;
        const clampedOpacity = Math.max(0.1, Math.min(1, currentOpacity));

        ctx.fillStyle = `rgba(255, 255, 255, ${clampedOpacity.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      canvasRafId = requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      if (canvasRafId) cancelAnimationFrame(canvasRafId);
      window.removeEventListener("resize", handleCanvasResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="space" className="space-canvas" />;
}
