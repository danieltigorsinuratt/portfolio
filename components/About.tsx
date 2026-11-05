"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Language, personalInfo } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface AboutProps {
  lang: Language;
  isDark?: boolean;
}

export const About: React.FC<AboutProps> = ({ lang, isDark = true }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // ── Interactive 3D Tilt & Direct Cursor Reaction on Image ──
  const photoRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, spotX: 50, spotY: 50, isHovered: false });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Light spotlight percentage
    const spotX = (x / rect.width) * 100;
    const spotY = (y / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      spotX,
      spotY,
      isHovered: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      spotX: 50,
      spotY: 50,
      isHovered: false,
    });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Section Header ── */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs sm:text-sm font-bold c-text-muted tracking-wider">
          01.
        </span>
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] c-text-main font-mono">
          {lang === "id" ? "TENTANG SAYA" : "ABOUT ME"}
        </h2>
        <div
          className="h-[1px] flex-grow ml-2"
          style={{ backgroundColor: "var(--surface-border)" }}
        />
      </div>

      {/* ── Main Layout: 2 Columns ── */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        
        {/* ════════════════════════════════════════════
            KOLOM KIRI: FOTO REAL (TANPA GRID/BOX, EFEK INTERAKTIF LANGSUNG DI FOTO)
        ════════════════════════════════════════════ */}
        <div className="w-full sm:w-[380px] lg:w-[420px] flex-shrink-0 flex flex-col items-center">
          <div className="relative w-full max-w-[360px] sm:max-w-none select-none">
            
            {/* Foto Wrapper dengan Efek Interaktif 3D & Spotlight Langsung pada Gambar */}
            <div
              ref={photoRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[3/4] cursor-pointer"
              style={{
                perspective: "1000px",
              }}
            >
              {/* Inner 3D Container — Tanpa border kotak, tanpa grid */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden transition-transform duration-200 ease-out"
                style={{
                  transform: tilt.isHovered
                    ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.03, 1.03, 1.03)`
                    : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transition: tilt.isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Foto Real Daniel Sinurat */}
                <Image
                  src="/images/daniel.png"
                  alt="Daniel Sinurat"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 420px"
                  className="object-cover object-top filter grayscale contrast-110 hover:contrast-125 transition-all duration-500 ease-out"
                />

                {/* Efek Spotlight & Halftone Light Flare Langsung di Atas Gambar Mengikuti Cursor */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: tilt.isHovered ? 1 : 0,
                    background: isDark
                      ? `radial-gradient(circle 180px at ${tilt.spotX}% ${tilt.spotY}%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 80%)`
                      : `radial-gradient(circle 180px at ${tilt.spotX}% ${tilt.spotY}%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.04) 50%, transparent 80%)`,
                    mixBlendMode: isDark ? "screen" : "multiply",
                  }}
                />

                {/* Subtle Dynamic Halftone Screen Overlay — Aktif interaktif saat hover */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: tilt.isHovered ? 0.25 : 0.08,
                    backgroundImage: isDark
                      ? "radial-gradient(circle, #FFFFFF 1.2px, transparent 1.2px)"
                      : "radial-gradient(circle, #000000 1.2px, transparent 1.2px)",
                    backgroundSize: "6px 6px",
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
            </div>

            {/* Nama, Role & Social Icons di Bawah Foto (Tanpa Box/Grid) */}
            <div className="mt-5 flex items-center justify-between px-1">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg c-text-main tracking-wider font-stencil uppercase">
                  DANIEL SINURAT
                </h3>
                <p className="text-xs c-text-muted font-mono font-semibold mt-0.5">
                  Web Developer &bull; IoT Specialist
                </p>
              </div>

              {/* Social Badges Bersih Tanpa Polkadot Luar */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 c-btn-surface border"
                  title="GitHub"
                >
                  <Icons.github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 c-btn-surface border"
                  title="LinkedIn"
                >
                  <Icons.linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════════════
            KOLOM KANAN: TEKS BIOGRAFI & TECH STACK
        ════════════════════════════════════════════ */}
        <div className="flex-1 flex flex-col justify-center pt-2">
          
          {/* Headline Tegas & Modern */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight c-text-main leading-snug">
            {lang === "id" ? (
              <>
                Membangun Website Cepat, Scalable &amp;{" "}
                <span className="gradient-text-mono font-black">Solusi IoT Terintegrasi</span>
              </>
            ) : (
              <>
                Crafting High-Performance Websites &amp;{" "}
                <span className="gradient-text-mono font-black">Integrated IoT Systems</span>
              </>
            )}
          </h3>

          {/* Paragraf Bio Singkat & Padat */}
          <div className="mt-6 space-y-4 text-sm sm:text-base c-text-muted leading-relaxed font-normal">
            <p>
              {lang === "id" ? (
                <>
                  Halo! Saya <strong className="c-text-main font-bold">Daniel Sinurat</strong>, lulusan{" "}
                  <strong className="c-text-main font-bold">
                    D-III Teknologi Informasi, Universitas Brawijaya
                  </strong>
                  . Berpengalaman dalam merancang dan mengembangkan sistem web modern yang responsif, terukur, dan aman.
                </>
              ) : (
                <>
                  Hi! I&apos;m <strong className="c-text-main font-bold">Daniel Sinurat</strong>, graduate of{" "}
                  <strong className="c-text-main font-bold">
                    D-III Information Technology from Brawijaya University
                  </strong>
                  . Passionate about engineering high-performance web systems and seamless hardware automations.
                </>
              )}
            </p>
            <p>
              {lang === "id" ? (
                <>
                  Aktif mengembangkan proyek di{" "}
                  <strong className="c-text-main font-bold">Dignify Studio</strong> dan berbagai solusi client — menggabungkan kekuatan web development dengan otomasi workflow n8n serta mikrokontroler IoT (ESP32).
                </>
              ) : (
                <>
                  Actively developing projects at{" "}
                  <strong className="c-text-main font-bold">Dignify Studio</strong> and client solutions — merging full-stack web capabilities with n8n workflow automations and ESP32 IoT telemetry.
                </>
              )}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8">
            <span className="text-[11px] font-mono uppercase tracking-widest c-text-muted font-bold block mb-3">
              TECH STACK ANDALAN:
            </span>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "React", "Next.js", "PHP", "MySQL", "ESP32", "n8n", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold c-text-main transition-transform hover:scale-105"
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--surface-border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/cv/CV_Daniel_Sinurat.pdf"
              download="CV_Daniel_Sinurat.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all hover:scale-105 c-btn-primary"
            >
              <Icons.download className="w-4 h-4" />
              <span>{lang === "id" ? "Unduh CV (PDF)" : "Download CV (PDF)"}</span>
            </a>

            <a
              href={`https://wa.me/${personalInfo.contact.whatsapp}?text=${encodeURIComponent(
                "Halo Daniel Sinurat, saya melihat portfolio Anda dan ingin berdiskusi proyek."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 c-btn-surface border"
            >
              <Icons.whatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer c-btn-surface border"
            >
              <Icons.mail className="w-4 h-4" />
              <span>
                {copiedEmail
                  ? lang === "id"
                    ? "Email Tersalin!"
                    : "Email Copied!"
                  : personalInfo.contact.email}
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
