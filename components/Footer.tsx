"use client";

import React from "react";
import { Language, personalInfo } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface FooterProps {
  lang: Language;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800 [data-theme='light']_&:border-zinc-200 bg-[#0A0A0A] [data-theme='light']_&:bg-zinc-100 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-white [data-theme='light']_&:bg-black flex items-center justify-center text-black [data-theme='light']_&:text-white font-black text-sm">
            DS
          </div>
          <div>
            <div className="font-bold text-sm text-white [data-theme='light']_&:text-black font-stencil tracking-wider">
              DANIEL SINURAT
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              Web Developer &bull; IoT &bull; D-III TI Universitas Brawijaya
            </p>
          </div>
        </div>

        {/* Center Links & CV */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white [data-theme='light']_&:hover:text-black transition-colors flex items-center gap-1.5"
          >
            <Icons.github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>&bull;</span>
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white [data-theme='light']_&:hover:text-black transition-colors flex items-center gap-1.5"
          >
            <Icons.linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>&bull;</span>
          <a
            href="/cv/CV_Daniel_Sinurat.pdf"
            download="CV_Daniel_Sinurat.pdf"
            className="text-zinc-200 [data-theme='light']_&:text-zinc-800 hover:text-white [data-theme='light']_&:hover:text-black font-semibold transition-colors flex items-center gap-1.5"
          >
            <Icons.download className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>
          <span>&bull;</span>
          <button
            onClick={onOpenAdmin}
            className="hover:text-white [data-theme='light']_&:hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Icons.admin className="w-3.5 h-3.5" />
            <span>CMS</span>
          </button>
        </div>

        {/* Right Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-zinc-500">
            &copy; 2026 Daniel Sinurat. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 hover:border-zinc-500 text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black transition-colors cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="18 15 12 9 6 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};
