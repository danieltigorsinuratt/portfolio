"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Language, personalInfo } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Frameless — Monochrome */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs sm:text-sm font-bold c-text-muted tracking-wider">
          01.
        </span>
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] c-text-main font-mono">
          {lang === "id" ? "TENTANG SAYA" : "ABOUT ME"}
        </h2>
        <div className="h-[1px] flex-grow c-bg-surface ml-2" style={{ backgroundColor: "var(--surface-border)" }} />
      </div>

      {/* Konten Utama: 2 Kolom */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        
        {/* Kolom Kiri: Foto */}
        <div className="w-full sm:w-[360px] lg:w-[400px] flex-shrink-0 flex flex-col items-center">
          <div className="relative w-full max-w-[340px] sm:max-w-none">
            {/* Ambient Glow */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, var(--text-main) 0%, transparent 80%)",
              }}
            />

            {/* Container Foto */}
            <div
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                position: "relative",
                border: "1px solid var(--surface-border)",
              }}
            >
              <Image
                src="/images/daniel.png"
                alt="Daniel Sinurat"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 400px"
                className="object-cover object-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>

            {/* Label Nama di Bawah Foto */}
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <h3 className="font-bold text-base c-text-main tracking-wide font-stencil">
                  DANIEL SINURAT
                </h3>
                <p className="text-xs c-text-muted font-mono font-semibold">
                  Web Developer &bull; IoT Specialist
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg c-text-muted transition-colors"
                  style={{}}
                  title="GitHub"
                >
                  <Icons.github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg c-text-muted transition-colors"
                  title="LinkedIn"
                >
                  <Icons.linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Teks */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* Headline */}
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

          {/* Paragraf Bio */}
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
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold c-text-main"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all hover:scale-105 c-btn-primary"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 c-btn-surface border"
            >
              <Icons.whatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer c-btn-surface border"
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
