"use client";

import React, { useState } from "react";
import { Language, personalInfo } from "@/data/portfolio-data";
import { Icons } from "./icons";
import { ParticlePortrait, ParticlePortraitProps } from "./ParticlePortrait";

interface AboutProps {
  lang: Language;
  isDark?: boolean;
  portraitProps?: ParticlePortraitProps;
}

export const About: React.FC<AboutProps> = ({
  lang,
  isDark = true,
  portraitProps,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

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
            KOLOM KIRI: PARTICLE PORTRAIT CANVAS (HALFTONE INTERAKTIF)
        ════════════════════════════════════════════ */}
        <div className="w-full sm:w-[380px] lg:w-[420px] flex-shrink-0 flex flex-col items-center">
          <div className="relative w-full max-w-[380px] sm:max-w-none select-none">
            
            {/* ParticlePortrait Canvas 1:1 */}
            <ParticlePortrait
              src="/images/daniel.png"
              gap={5}
              radius={100}
              strength={18}
              dotColor="#f5e6c8"
              lightDotColor="#111111"
              isDark={isDark}
              {...portraitProps}
            />

            {/* Nama, Role & Social Icons di Bawah Foto */}
            <div className="mt-5 flex items-center justify-between px-1">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg c-text-main tracking-wider font-stencil uppercase">
                  DANIEL SINURAT
                </h3>
                <p className="text-xs c-text-muted font-mono font-semibold mt-0.5">
                  Web Developer &bull; IoT Specialist
                </p>
              </div>

              {/* Social Badges */}
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
              {[
                "Laravel",
                "PHP",
                "Laravel Reverb",
                "Next.js",
                "React",
                "Vite",
                "MySQL",
                "PostgreSQL",
                "Supabase",
                "ESP32",
                "Ubuntu Server",
                "Apache2",
                "Nginx",
                "PM2",
                "bind9",
                "Cloudflare Tunnel",
                "Vercel",
              ].map((tech) => (
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
