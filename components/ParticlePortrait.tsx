"use client";

import React, { useEffect, useRef } from "react";

export interface ParticlePortraitProps {
  /** Path gambar sumber, contoh: "/images/daniel.png" */
  src?: string;
  /** Jarak antar titik partikel dalam piksel (default: 5) */
  gap?: number;
  /** Radius area dorong kursor dalam piksel (default: 100) */
  radius?: number;
  /** Kekuatan gaya dorong/repel saat kursor mendekat (default: 18) */
  strength?: number;
  /** Warna titik partikel saat Dark Mode (default: "#f5e6c8") */
  dotColor?: string;
  /** Warna titik partikel saat Light Mode (default: "#111111") */
  lightDotColor?: string;
  /** Mode tema: true = Dark Mode, false = Light Mode */
  isDark?: boolean;
  /** Ambang batas kecerahan minimum 0-255 untuk gambar non-transparan (default: 18) */
  threshold?: number;
  /** Class tambahan untuk wrapper */
  className?: string;
}

interface Particle {
  ox: number; // Posisi X asli
  oy: number; // Posisi Y asli
  x: number;  // Posisi X saat ini
  y: number;  // Posisi Y saat ini
  vx: number; // Kecepatan X
  vy: number; // Kecepatan Y
  size: number; // Radius titik
  alpha: number; // Opacity titik (0 - 1)
}

export const ParticlePortrait: React.FC<ParticlePortraitProps> = ({
  src = "/images/daniel.png",
  gap = 5,
  radius = 100,
  strength = 18,
  dotColor = "#f5e6c8",
  lightDotColor = "#111111",
  isDark = true,
  threshold = 18,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isUnmounted = false;
    let particles: Particle[] = [];
    let canvasSize = 0;

    // Posisi kursor / sentuhan dalam koordinat CSS piksel
    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const img = new window.Image();
    img.crossOrigin = "anonymous";

    // Bangun ulang grid partikel dari gambar di canvas tersembunyi
    const buildParticles = () => {
      if (isUnmounted || !img.complete || img.naturalWidth === 0) return;

      const rect = container.getBoundingClientRect();
      const size = Math.max(1, Math.floor(rect.width));
      canvasSize = size;

      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = Math.floor(size * dpr);
      canvas.height = Math.floor(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Canvas tersembunyi untuk membaca piksel gambar
      const offscreen = document.createElement("canvas");
      offscreen.width = size;
      offscreen.height = size;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      // Hitung crop proporsional (fokus wajah hingga tubuh bagian atas)
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let drawWidth = size;
      let drawHeight = size;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > 1) {
        drawHeight = size;
        drawWidth = size * imgRatio;
        offsetX = -(drawWidth - size) / 2;
      } else {
        drawWidth = size * 0.92;
        drawHeight = drawWidth / imgRatio;
        offsetX = (size - drawWidth) / 2;
        offsetY = size * 0.02; // Beri sedikit ruang di atas kepala
      }

      offCtx.clearRect(0, 0, size, size);
      offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      const imageData = offCtx.getImageData(0, 0, size, size).data;
      const nextParticles: Particle[] = [];
      const step = Math.max(3, gap);
      const maxRadius = step * 0.48;

      for (let y = Math.floor(step / 2); y < size; y += step) {
        for (let x = Math.floor(step / 2); x < size; x += step) {
          const idx = (y * size + x) * 4;
          const r = imageData[idx];
          const g = imageData[idx + 1];
          const b = imageData[idx + 2];
          const a = imageData[idx + 3];

          // Abaikan area background transparan di luar siluet foto
          if (a < 45) continue;

          // Hitung kecerahan (luminance) piksel (0 - 255)
          const rawLum = 0.299 * r + 0.587 * g + 0.114 * b;

          // Tingkatkan kontras wajah (kurva kontras agar mata, alis, senyum & wajah tegas)
          const normalized = Math.min(1, Math.max(0, (rawLum - 12) / 185));
          const contrastLum = Math.pow(normalized, 0.85);

          if (isDark) {
            // DARK MODE: Titik terang (#f5e6c8) di atas background gelap
            // Piksel sangat gelap di bawah threshold dibuang atau diberi titik tipis untuk siluet
            if (rawLum < threshold) continue;

            const dotScale = 0.22 + 0.78 * contrastLum;
            const dotAlpha = (0.2 + 0.8 * contrastLum) * (a / 255);

            nextParticles.push({
              ox: x,
              oy: y,
              x,
              y,
              vx: 0,
              vy: 0,
              size: maxRadius * dotScale,
              alpha: dotAlpha,
            });
          } else {
            // LIGHT MODE: Titik hitam (#111111) di atas background putih
            // Area gelap (rambut, mata, alis, baju) -> titik hitam lebih besar/tebal
            // Area terang (wajah/kulit) -> titik hitam lebih kecil sehingga wajah terlihat jelas!
            const inkIntensity = 1 - contrastLum * 0.72;
            const dotScale = 0.22 + 0.76 * inkIntensity;
            const dotAlpha = (0.25 + 0.75 * inkIntensity) * (a / 255);

            nextParticles.push({
              ox: x,
              oy: y,
              x,
              y,
              vx: 0,
              vy: 0,
              size: maxRadius * dotScale,
              alpha: dotAlpha,
            });
          }
        }
      }

      particles = nextParticles;
    };

    // Loop animasi utama (Spring + Repel Physics)
    const activeColor = isDark ? dotColor : lightDotColor;

    const render = () => {
      if (isUnmounted) return;

      ctx.clearRect(0, 0, canvasSize, canvasSize);

      ctx.fillStyle = activeColor;
      const radiusSq = radius * radius;
      const springStiffness = 0.085;
      const damping = 0.82;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < radiusSq && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            // Gaya dorong makin kuat saat makin dekat ke kursor
            const force = Math.pow(1 - dist / radius, 2);
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * (strength * 0.35);
            p.vy += Math.sin(angle) * force * (strength * 0.35);
          }
        }

        // Gaya pegas kembali ke posisi asli (spring/easing)
        p.vx += (p.ox - p.x) * springStiffness;
        p.vy += (p.oy - p.y) * springStiffness;

        // Redaman kecepatan (damping)
        p.vx *= damping;
        p.vy *= damping;

        p.x += p.vx;
        p.y += p.vy;

        // Gambar titik partikel
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    img.onload = () => {
      buildParticles();
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    img.src = src;

    // Event handler Mouse & Touch
    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchcancel", handleTouchEnd);

    // Responsif mengikuti perubahan ukuran container
    const resizeObserver = new ResizeObserver(() => {
      buildParticles();
    });
    resizeObserver.observe(container);

    return () => {
      isUnmounted = true;
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [src, gap, radius, strength, dotColor, lightDotColor, isDark, threshold]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square bg-transparent rounded-2xl overflow-hidden select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-crosshair touch-none"
      />
    </div>
  );
};

export default ParticlePortrait;
