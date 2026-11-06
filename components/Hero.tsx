"use client";

import React from "react";
import Image from "next/image";
import { Language } from "@/data/portfolio-data";

interface HeroProps {
  lang: Language;
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark = true }) => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] max-h-[1080px] w-full overflow-hidden select-none transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#050505" : "#FFFFFF",
      }}
    >
      {/* ── STUDIO BACKDROP: ADAPTIF DARK & LIGHT ── */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300">
        {/* Radial spotlight studio */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 50% 42%, #2A2A2A 0%, #1A1A1A 35%, #101010 65%, #050505 100%)"
              : "radial-gradient(ellipse at 50% 42%, #FFFFFF 0%, #F8F8FA 35%, #EBEBEF 70%, #D8D8DE 100%)",
          }}
        />
        {/* Soft diagonal shadow */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(115deg, transparent 28%, rgba(0,0,0,0.25) 46%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.95) 100%)"
              : "linear-gradient(115deg, transparent 30%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        {/* Fine grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: isDark
              ? "radial-gradient(#fff 1px, transparent 1px)"
              : "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      {/* ── LAYER 1: PORTFOLIO — 3D Text Adaptif (Dark: Putih/Silver, Light: Hitam Pekat) ── */}
      <div
        className="absolute z-[1] pointer-events-none select-none"
        style={{ top: "9%", bottom: "13%", left: "15%", right: "15%" }}
      >
        <svg
          viewBox="0 0 1000 330"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradien Vertikal Dark Mode: Putih terang -> Perak halus -> Abu-abu gelap */}
            <linearGradient id="portfolioGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#F4F4F5" />
              <stop offset="58%" stopColor="#A1A1AA" />
              <stop offset="85%" stopColor="#52525B" />
              <stop offset="100%" stopColor="#27272A" />
            </linearGradient>

            {/* Gradien Vertikal Light Mode: Hitam pekat -> Dark Charcoal -> Deep Gray */}
            <linearGradient id="portfolioGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="30%" stopColor="#141414" />
              <stop offset="65%" stopColor="#262626" />
              <stop offset="85%" stopColor="#3F3F46" />
              <stop offset="100%" stopColor="#52525B" />
            </linearGradient>

            {/* Gradien Extrusion 3D */}
            <linearGradient id="extrudeGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="100%" stopColor="#09090B" />
            </linearGradient>

            <linearGradient id="extrudeGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3F3F46" />
              <stop offset="100%" stopColor="#18181B" />
            </linearGradient>

            {/* Filter Bayangan 3D */}
            <filter id="heroShadow3D" x="-15%" y="-15%" width="130%" height="150%">
              <feDropShadow
                dx="0"
                dy={isDark ? "26" : "18"}
                stdDeviation={isDark ? "16" : "12"}
                floodColor="#000000"
                floodOpacity={isDark ? "0.95" : "0.22"}
              />
              <feDropShadow
                dx="0"
                dy={isDark ? "10" : "6"}
                stdDeviation={isDark ? "6" : "4"}
                floodColor="#000000"
                floodOpacity={isDark ? "0.9" : "0.18"}
              />
            </filter>
          </defs>

          {/* 3D DEPTH LAYER 3: Dasar bayangan terbawah */}
          <text
            x="500"
            y="308"
            textAnchor="middle"
            dominantBaseline="auto"
            fill={isDark ? "url(#extrudeGradDark)" : "url(#extrudeGradLight)"}
            fontWeight="900"
            fontSize="310"
            letterSpacing="-2"
            filter="url(#heroShadow3D)"
            style={{
              fontFamily:
                "'Impact','Haettenschweiler','Arial Black',sans-serif",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </text>

          {/* 3D DEPTH LAYER 2: Ketebalan balok tengah */}
          <text
            x="500"
            y="304"
            textAnchor="middle"
            dominantBaseline="auto"
            fill={isDark ? "#18181B" : "#27272A"}
            fontWeight="900"
            fontSize="310"
            letterSpacing="-2"
            style={{
              fontFamily:
                "'Impact','Haettenschweiler','Arial Black',sans-serif",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </text>

          {/* 3D FACE LAYER 1: Muka depan (Dark: Perak/Putih, Light: Hitam Pekat) */}
          <text
            x="500"
            y="300"
            textAnchor="middle"
            dominantBaseline="auto"
            fill={isDark ? "url(#portfolioGradDark)" : "url(#portfolioGradLight)"}
            stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.6)"}
            strokeWidth="1.2"
            fontWeight="900"
            fontSize="310"
            letterSpacing="-2"
            style={{
              fontFamily:
                "'Impact','Haettenschweiler','Arial Black',sans-serif",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </text>
        </svg>
      </div>

      {/* ── LAYER 2: 3D Character — foreground center, feet at bottom ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(240px, 38vw, 500px)",
          height: "clamp(460px, 84vh, 900px)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "1.5rem",
            right: "1.5rem",
            height: "40%",
            borderRadius: "9999px",
            filter: "blur(48px)",
            background: isDark
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.06)",
          }}
        />
        {/* Avatar */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/images/daniel3D.png"
            alt="Daniel Sinurat 3D Avatar"
            fill
            priority
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 500px"
            className="object-contain object-bottom drop-shadow-[0_28px_50px_rgba(0,0,0,0.8)] hover:scale-[1.015] transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* ── LAYER 3: Sub-labels — DANIEL SINURAT & WEB DEVELOPER ── */}
      <div
        className="absolute z-20 w-full pointer-events-none select-none"
        style={{ bottom: "4%", left: 0, right: 0 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-end px-12 sm:px-20 md:px-28 lg:px-36">
          <span
            className={`text-[9px] sm:text-[11px] md:text-[13px] font-black tracking-[0.38em] sm:tracking-[0.5em] uppercase drop-shadow-sm ${
              isDark ? "text-white/90" : "text-black"
            }`}
          >
            DANIEL SINURAT
          </span>
          <span
            className={`text-[9px] sm:text-[11px] md:text-[13px] font-black tracking-[0.38em] sm:tracking-[0.5em] uppercase drop-shadow-sm ${
              isDark ? "text-white/90" : "text-black"
            }`}
          >
            WEB DEVELOPER
          </span>
        </div>
      </div>
    </section>
  );
};
