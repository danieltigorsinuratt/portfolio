"use client";

import React from "react";
import { Language, testimonials } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header — Monochrome */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-2">
          <span>&bull;</span>
          <span className="uppercase tracking-widest text-zinc-400">
            {lang === "id" ? "TESTIMONI & REKOMENDASI" : "CLIENT ENDORSEMENTS"}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil tracking-wider text-white [data-theme='light']_&:text-black">
          WHAT CLIENTS SAY
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600 mt-2 font-mono">
          {lang === "id"
            ? "Umpan balik langsung dari pimpinan studio, pemilik usaha, dan mentor akademik."
            : "Direct feedback from studio leaders, business owners, and academic supervisors."}
        </p>
      </div>

      {/* Testimonials Grid — Monochrome */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="slide-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating — Monochrome Silver/White */}
              <div className="flex items-center gap-1 text-white [data-theme='light']_&:text-black mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Icons.star key={i} className="w-4 h-4 fill-current text-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700 leading-relaxed italic mb-6">
                &ldquo;{item.quote[lang]}&rdquo;
              </p>
            </div>

            {/* Author Meta — Monochrome */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200">
              <div className="w-10 h-10 rounded-full bg-zinc-800 [data-theme='light']_&:bg-zinc-200 flex items-center justify-center text-white [data-theme='light']_&:text-black font-bold text-xs font-mono shadow-md">
                {item.avatar}
              </div>
              <div>
                <h4 className="font-bold text-sm text-white [data-theme='light']_&:text-black">
                  {item.name}
                </h4>
                <p className="text-[11px] text-zinc-400 [data-theme='light']_&:text-zinc-600 font-mono">
                  {item.role[lang]} &bull; <span className="text-zinc-500">{item.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
