import React from "react";

interface HeroPosterTypographyProps {
  leftSubtitle?: string;
  rightSubtitle?: string;
  className?: string;
}

export const HeroPosterTypography: React.FC<HeroPosterTypographyProps> = ({
  leftSubtitle = "WEB DEVELOPER",
  rightSubtitle = "FULLSTACK & IOT",
  className = "",
}) => {
  return (
    <div className={`w-full flex items-center justify-between select-none ${className}`}>
      {/* Left Word: PORT + Subtitle */}
      <div className="flex flex-col items-start flex-1 max-w-[42%] sm:max-w-[40%]">
        <svg
          viewBox="0 0 340 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
        >
          {/* P */}
          <path
            d="M10 230 V10 H75 C102 10 120 28 120 58 C120 88 102 106 75 106 H40 V230 Z M40 40 V76 H72 C85 76 92 68 92 58 C92 48 85 40 72 40 Z"
            fill="#E5ECE3"
          />

          {/* O */}
          <path
            d="M135 70 C135 25 152 10 178 10 C204 10 221 25 221 70 V170 C221 215 204 230 178 230 C152 230 135 215 135 170 Z M163 172 C163 198 168 204 178 204 C188 204 193 198 193 172 V68 C193 42 188 36 178 36 C168 36 163 42 163 68 Z"
            fill="#E5ECE3"
          />

          {/* Connecting top bar from R to T */}
          <rect x="235" y="10" width="105" height="26" fill="#E5ECE3" />

          {/* R */}
          <path
            d="M235 230 V10 H285 C305 10 318 24 318 48 C318 68 306 82 288 84 L322 230 H292 L262 92 H262 V230 Z M262 34 V70 H282 C292 70 297 64 297 52 C297 40 292 34 282 34 Z"
            fill="#E5ECE3"
          />

          {/* T */}
          <path
            d="M312 10 H340 V230 H314 V34 Z"
            fill="#E5ECE3"
          />
        </svg>

        <span className="mt-2 text-[8px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-[0.35em] sm:tracking-[0.45em] text-[#E5ECE3] uppercase pl-1 opacity-95">
          {leftSubtitle}
        </span>
      </div>

      {/* Right Word: FOLIO + Subtitle */}
      <div className="flex flex-col items-end flex-1 max-w-[42%] sm:max-w-[40%] text-right">
        <svg
          viewBox="0 0 420 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
        >
          {/* F */}
          <path
            d="M10 230 V10 H120 V36 H38 V90 H95 V116 H38 V230 Z"
            fill="#E5ECE3"
          />

          {/* O */}
          <path
            d="M130 70 C130 25 147 10 173 10 C199 10 216 25 216 70 V170 C216 215 199 230 173 230 C147 230 130 215 130 170 Z M158 172 C158 198 163 204 173 204 C183 204 188 198 188 172 V68 C188 42 183 36 173 36 C163 36 158 42 158 68 Z"
            fill="#E5ECE3"
          />

          {/* L */}
          <path
            d="M230 230 V10 H258 V204 H305 V230 Z"
            fill="#E5ECE3"
          />

          {/* I */}
          <path
            d="M320 230 V10 H348 V230 Z"
            fill="#E5ECE3"
          />

          {/* O */}
          <path
            d="M362 70 C362 25 379 10 405 10 C420 10 420 25 420 70 V170 C420 215 420 230 405 230 C379 230 362 215 362 170 Z M390 172 C390 198 395 204 405 204 C412 204 414 198 414 172 V68 C414 42 412 36 405 36 C395 36 390 42 390 68 Z"
            fill="#E5ECE3"
          />
        </svg>

        <span className="mt-2 text-[8px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-[0.25em] sm:tracking-[0.4em] text-[#E5ECE3] uppercase pr-1 opacity-95">
          {rightSubtitle}
        </span>
      </div>
    </div>
  );
};
