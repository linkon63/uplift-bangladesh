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

    const handleCanvasResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    handleCanvasResize();
    window.addEventListener("resize", handleCanvasResize);

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 600),
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      canvasRafId = requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      if (canvasRafId) cancelAnimationFrame(canvasRafId);
      window.removeEventListener("resize", handleCanvasResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="space" className="space-canvas" />;
}
