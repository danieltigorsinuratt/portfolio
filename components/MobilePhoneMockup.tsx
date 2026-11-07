"use client";

import React from "react";

interface MobilePhoneMockupProps {
  screenImage: string;
  frameImage?: string;
  alt?: string;
  statusBarBg?: string;
  bottomBarBg?: string;
  darkStatusIcons?: boolean;
  className?: string;
}

/**
 * Renders a realistic iPhone 15 Pro mockup using `layoutmobile.png` as the outer titanium frame,
 * with a clean iOS Status Bar (9:41, cellular signal, Wi-Fi, battery) and Dynamic Island
 * (including front camera lens) positioned ABOVE the app screenshot so the camera never covers
 * the app's header/logo.
 */
export const MobilePhoneMockup: React.FC<MobilePhoneMockupProps> = ({
  screenImage,
  frameImage = "/images/project/layoutmobile.png",
  alt = "Mobile preview",
  statusBarBg = "#FBF4EC",
  bottomBarBg = "#FCF6EF",
  darkStatusIcons = true,
  className = "w-64 sm:w-72",
}) => {
  const statusColor = darkStatusIcons ? "#1C1C1E" : "#FFFFFF";

  return (
    <div
      className={`relative select-none aspect-[1374/2704] ${className}`}
      style={{ WebkitUserSelect: "none" }}
    >
      {/* 1. Outer Titanium Phone Frame (layoutmobile.png) */}
      <img
        src={frameImage}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="w-full h-full object-contain pointer-events-none block"
      />

      {/* 2. Inner Active LCD Display (clipped exactly inside the inner black bezel of layoutmobile.png) */}
      <div
        className="absolute overflow-hidden flex flex-col z-10 shadow-inner"
        style={{
          left: "11.79%",
          top: "1.55%",
          width: "83.84%",
          height: "91.68%",
          borderRadius: "13.45% / 6.25%",
          backgroundColor: statusBarBg,
        }}
      >
        {/* Top iOS Status Bar + Dynamic Island (Front Camera never covers app content) */}
        <div
          className="w-full shrink-0 flex items-center justify-between px-[7.5%] pt-[1.5%] pb-[0.5%] relative z-20"
          style={{
            height: "6.4%",
            backgroundColor: statusBarBg,
            color: statusColor,
          }}
        >
          {/* Left: iOS Clock (9:41) */}
          <span className="font-sans font-bold tracking-tight text-[10px] sm:text-[11px] leading-none w-[24%] text-left pl-[2%]">
            9:41
          </span>

          {/* Center: Dynamic Island Pill with Front Camera Lens */}
          <div
            className="h-[64%] w-[32%] bg-black rounded-full flex items-center justify-between px-[6%] shadow-sm relative"
            style={{
              boxShadow: darkStatusIcons
                ? "inset 0 0 2px rgba(255,255,255,0.12)"
                : "0 0 0 1px rgba(255,255,255,0.16), inset 0 0 3px rgba(255,255,255,0.12)",
            }}
          >
            {/* Subtle IR sensor dot on left of Dynamic Island */}
            <div className="w-[14%] aspect-square rounded-full bg-[#11131a] opacity-80" />

            {/* Realistic Sapphire Front Camera Lens on right of Dynamic Island */}
            <div
              className="h-[58%] aspect-square rounded-full flex items-center justify-center relative"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #1e2b58 0%, #0d1326 60%, #05070f 100%)",
                boxShadow: "0 0 0 1px rgba(71, 85, 135, 0.45)",
              }}
            >
              {/* Tiny cyan/blue lens reflection */}
              <div className="w-[32%] h-[32%] rounded-full bg-[#4f75ff]/80 -translate-x-[15%] -translate-y-[15%] blur-[0.2px]" />
            </div>
          </div>

          {/* Right: Cellular Signal + Wi-Fi + Battery Icons */}
          <div className="w-[24%] flex items-center justify-end gap-[8%] pr-[1%]">
            {/* Cellular Signal Bars */}
            <svg
              viewBox="0 0 18 12"
              className="w-3 sm:w-3.5 h-2.5 fill-current shrink-0"
            >
              <rect x="0.5" y="7.5" width="2.6" height="4" rx="0.8" />
              <rect x="4.6" y="5.5" width="2.6" height="6" rx="0.8" />
              <rect x="8.7" y="3" width="2.6" height="8.5" rx="0.8" />
              <rect x="12.8" y="0.5" width="2.6" height="11" rx="0.8" />
            </svg>

            {/* Wi-Fi Icon */}
            <svg
              viewBox="0 0 16 12"
              className="w-3 sm:w-3.5 h-2.5 fill-current shrink-0"
            >
              <path d="M8 9.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm-3.2-2a4.6 4.6 0 0 1 6.4 0l1.2-1.2a6.3 6.3 0 0 0-8.8 0l1.2 1.2zm-2.6-2.6a8.3 8.3 0 0 1 11.6 0L15 3.4a10 10 0 0 0-14 0l1.2 1.2z" />
            </svg>

            {/* Battery Icon */}
            <svg
              viewBox="0 0 25 12"
              className="w-4 sm:w-4.5 h-2.5 fill-current shrink-0"
            >
              <rect
                x="0.75"
                y="1"
                width="20"
                height="10"
                rx="2.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                opacity="0.45"
              />
              <rect x="2.5" y="2.6" width="16.5" height="6.8" rx="1.4" />
              <path d="M22.2 4.2v3.6a1.6 1.6 0 0 0 0-3.6z" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Middle: App Screenshot Content (Starts cleanly below Dynamic Island) */}
        <div className="w-full flex-1 overflow-hidden relative z-10">
          <img
            src={screenImage}
            alt={alt}
            draggable={false}
            className="w-full h-full object-fill block"
          />
        </div>

        {/* Bottom: iOS Home Indicator Bar */}
        <div
          className="w-full shrink-0 flex items-center justify-center relative z-20"
          style={{
            height: "2.1%",
            backgroundColor: bottomBarBg,
          }}
        >
          <div
            className="w-[35%] h-[3.5px] rounded-full"
            style={{
              backgroundColor: darkStatusIcons
                ? "rgba(28, 28, 30, 0.75)"
                : "rgba(255, 255, 255, 0.8)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
