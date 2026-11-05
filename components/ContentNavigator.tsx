"use client";

import React from "react";
import { Language } from "@/data/portfolio-data";

interface ContentNavigatorProps {
  lang: Language;
  isDark?: boolean;
}

export const ContentNavigator: React.FC<ContentNavigatorProps> = ({ lang, isDark = true }) => {
  const directoryItems = [
    {
      id: "about",
      label: {
        id: "Tentang Saya",
        en: "About Me",
      },
    },
    {
      id: "about",
      label: {
        id: "Latar Belakang Pendidikan",
        en: "Educational Background",
      },
    },
    {
      id: "experience",
      label: {
        id: "Pengalaman Kerja",
        en: "Work Experience",
      },
    },
    {
      id: "skills",
      label: {
        id: "Keterampilan dan Keahlian",
        en: "Skills & Expertise",
      },
    },
    {
      id: "projects",
      label: {
        id: "Proyek Pilihan",
        en: "Featured Projects",
      },
    },
    {
      id: "other-projects",
      label: {
        id: "Proyek Eksperimen & Lainnya",
        en: "Other & Experimental Projects",
      },
    },
    {
      id: "contact",
      label: {
        id: "Hubungi Saya",
        en: "Contact & Inquiries",
      },
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textColor = isDark ? "#FFFFFF" : "#000000";
  const subColor = isDark ? "#A1A1AA" : "#18181B";
  const borderColor = isDark ? "#27272A" : "#D4D4D8";

  return (
    <section id="content-dir" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Frameless / Borderless Layout */}
      <div className="relative w-full">
        
        {/* Soft Ambient Spotlight */}
        <div
          className="absolute -top-16 -left-12 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, #FFFFFF 0%, rgba(255, 255, 255, 0) 70%)"
              : "radial-gradient(circle, #000000 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        {/* Top Header Row — Hitam Pekat di Light Mode */}
        <div
          className="relative z-10 flex items-center justify-between pb-8 sm:pb-12 text-sm sm:text-base font-bold tracking-wide border-b mb-10"
          style={{ borderColor }}
        >
          <span style={{ color: textColor }} className="font-bold tracking-wider">
            Daniel Sinurat
          </span>
          <span style={{ color: subColor }} className="font-mono text-xs sm:text-sm font-bold">
            @danielsinurat
          </span>
        </div>

        {/* Main Content Layout: Big CONTENT on left, Navigation items on right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Massive CONTENT Typography — Hitam Pekat di Light Mode */}
          <div className="lg:col-span-5 flex flex-col justify-center select-none">
            <h2
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tight leading-[0.88]"
              style={{
                fontFamily: "'Impact', 'Haettenschweiler', 'Arial Black', sans-serif",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: textColor,
              }}
            >
              CONTENT
            </h2>
            <p
              className="mt-4 text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold font-mono"
              style={{ color: subColor }}
            >
              {lang === "id" ? "Daftar Isi Portofolio" : "Portfolio Table of Contents"}
            </p>
          </div>

          {/* Right Column: Clean List — Hitam Pekat di Light Mode */}
          <div className="lg:col-span-7 flex flex-col">
            {directoryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(item.id)}
                className="group flex items-center py-4 border-b transition-all duration-200 text-left cursor-pointer w-full"
                style={{ borderColor }}
              >
                {/* Thick Bold Arrow Icon — Hitam Pekat di Light Mode */}
                <span
                  className="mr-4 text-xl font-black group-hover:translate-x-2 transition-transform duration-200"
                  style={{ color: textColor }}
                >
                  &#10148;
                </span>

                {/* Section Title — Hitam Pekat & Jelas di Light Mode */}
                <span
                  className="text-base sm:text-lg md:text-xl font-bold tracking-wide transition-colors duration-200 flex-grow"
                  style={{ color: textColor }}
                >
                  {item.label[lang]}
                </span>

                {/* Subtle indicator tag */}
                <span
                  className="opacity-0 group-hover:opacity-100 font-mono text-xs font-bold transition-opacity duration-200"
                  style={{ color: subColor }}
                >
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
