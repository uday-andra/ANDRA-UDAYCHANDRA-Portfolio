import React, { useRef, useEffect } from "react";

/**
 * Simple decorative canvas with animated circles, purely visual.
 * No external libs used — lightweight and error-free.
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    let circles = [];
    const createCircles = (count = 10) => {
      circles = [];
      for (let i = 0; i < count; i++) {
        circles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 6 + Math.random() * 20,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
          alpha: 0.3 + Math.random() * 0.6,
        });
      }
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      createCircles(12);
    };

    createCircles(12);
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      circles.forEach((c) => {
        c.x += c.dx;
        c.y += c.dy;
        if (c.x < -50) c.x = width + 50;
        if (c.x > width + 50) c.x = -50;
        if (c.y < -50) c.y = height + 50;
        if (c.y > height + 50) c.y = -50;

        ctx.beginPath();
        ctx.fillStyle = `rgba(30, 144, 255, ${c.alpha})`; // dodgerblue-ish
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="hero-canvas-wrapper" style={{ width: "100%", height: "220px" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
