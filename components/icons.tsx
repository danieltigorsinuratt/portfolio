import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const Icons = {
  // ── 3D Brand Tech Icons ──
  laravel: ({ className = "w-5 h-5", size }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  laravelBrand: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="laravel3dTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A6B" />
          <stop offset="100%" stopColor="#FF2D20" />
        </linearGradient>
        <linearGradient id="laravel3dLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF2D20" />
          <stop offset="100%" stopColor="#B81409" />
        </linearGradient>
        <linearGradient id="laravel3dRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E01E12" />
          <stop offset="100%" stopColor="#7F0B04" />
        </linearGradient>
        <filter id="shadowLaravel3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#FF2D20" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#shadowLaravel3d)">
        {/* Left Tall 3D Cube */}
        <polygon points="18,8 30,15 18,22 6,15" fill="url(#laravel3dTop)" />
        <polygon points="6,15 18,22 18,46 6,39" fill="url(#laravel3dLeft)" />
        <polygon points="18,22 30,15 30,39 18,46" fill="url(#laravel3dRight)" />
        {/* Bottom Center Connecting 3D Cube */}
        <polygon points="30,32 42,39 30,46 18,39" fill="url(#laravel3dTop)" />
        <polygon points="18,39 30,46 30,56 18,49" fill="url(#laravel3dLeft)" />
        <polygon points="30,46 42,39 42,49 30,56" fill="url(#laravel3dRight)" />
        {/* Right Floating 3D Cube */}
        <polygon points="46,16 58,23 46,30 34,23" fill="url(#laravel3dTop)" />
        <polygon points="34,23 46,30 46,44 34,37" fill="url(#laravel3dLeft)" />
        <polygon points="46,30 58,23 58,37 46,44" fill="url(#laravel3dRight)" />
      </g>
    </svg>
  ),

  php: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 80 64" fill="none" className={className}>
      <defs>
        <radialGradient id="php3dGrad" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#B4B8E8" />
          <stop offset="45%" stopColor="#777BB4" />
          <stop offset="100%" stopColor="#3E4272" />
        </radialGradient>
        <linearGradient id="php3dExtrude" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#434778" />
          <stop offset="100%" stopColor="#232544" />
        </linearGradient>
        <filter id="shadowPhp3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#777BB4" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowPhp3d)">
        {/* 3D Extruded Bottom Rim */}
        <ellipse cx="40" cy="36" rx="35" ry="20" fill="url(#php3dExtrude)" />
        {/* 3D Glossy Top Body */}
        <ellipse cx="40" cy="30" rx="35" ry="20" fill="url(#php3dGrad)" stroke="#C7CAF2" strokeWidth="1.2" />
        {/* Top Specular Highlight */}
        <ellipse cx="32" cy="20" rx="18" ry="6" fill="white" fillOpacity="0.22" />
        {/* 3D Embossed Text */}
        <text
          x="40"
          y="37"
          textAnchor="middle"
          fill="#1A1C35"
          fontWeight="900"
          fontStyle="italic"
          fontSize="21"
          fontFamily="sans-serif"
        >
          php
        </text>
        <text
          x="40"
          y="35.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontWeight="900"
          fontStyle="italic"
          fontSize="21"
          fontFamily="sans-serif"
        >
          php
        </text>
      </g>
    </svg>
  ),

  laravelReverb: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="reverb3dFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF758F" />
          <stop offset="50%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
        <linearGradient id="reverb3dBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9F1239" />
          <stop offset="100%" stopColor="#4C0519" />
        </linearGradient>
        <filter id="shadowReverb3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#F43F5E" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowReverb3d)">
        <rect x="8" y="14" width="48" height="42" rx="13" fill="url(#reverb3dBase)" />
        <rect x="8" y="8" width="48" height="42" rx="13" fill="url(#reverb3dFace)" stroke="#FDA4AF" strokeWidth="1.2" />
        <rect x="14" y="12" width="36" height="10" rx="5" fill="white" fillOpacity="0.2" />
        <path
          d="M15 30h6l4-10 7 20 5-14 4 4h8"
          stroke="#881337"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 28.5h6l4-10 7 20 5-14 4 4h8"
          stroke="#FFFFFF"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),

  nextjs: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <radialGradient id="next3dSphere" cx="32%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#52525B" />
          <stop offset="45%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="next3dSlash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#E4E4E7" />
          <stop offset="100%" stopColor="#71717A" />
        </linearGradient>
        <filter id="shadowNext3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="7" stdDeviation="4" floodColor="#000000" floodOpacity="0.65" />
        </filter>
      </defs>
      <g filter="url(#shadowNext3d)">
        {/* 3D Extruded Base */}
        <circle cx="32" cy="36" r="24" fill="#09090B" stroke="#27272A" strokeWidth="1.5" />
        {/* 3D Glossy Sphere */}
        <circle cx="32" cy="30" r="24" fill="url(#next3dSphere)" stroke="#71717A" strokeWidth="1.2" />
        {/* Specular Highlight */}
        <ellipse cx="25" cy="18" rx="11" ry="5" fill="white" fillOpacity="0.16" />
        {/* 3D N Monogram */}
        <path
          d="M22 41V19h4.5l18.5 24.5a24 24 0 0 1-3.8 2.8L26.2 26.2V41H22z"
          fill="url(#next3dSlash)"
        />
        <rect x="38.5" y="19" width="4.2" height="15" rx="1" fill="#FFFFFF" />
      </g>
    </svg>
  ),

  react: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <radialGradient id="react3dCore" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E0F9FF" />
          <stop offset="50%" stopColor="#61DAFB" />
          <stop offset="100%" stopColor="#0284C7" />
        </radialGradient>
        <linearGradient id="react3dRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A5F3FC" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <filter id="shadowReact3d" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#38BDF8" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowReact3d)">
        {/* Shadow Rings for 3D Depth */}
        <g transform="translate(32, 34)" stroke="#0369A1" strokeWidth="3.2" opacity="0.55">
          <ellipse rx="24" ry="9.5" />
          <ellipse rx="24" ry="9.5" transform="rotate(60)" />
          <ellipse rx="24" ry="9.5" transform="rotate(120)" />
        </g>
        {/* Main Glossy 3D Rings */}
        <g transform="translate(32, 31)" stroke="url(#react3dRing)" strokeWidth="3.2">
          <ellipse rx="24" ry="9.5" />
          <ellipse rx="24" ry="9.5" transform="rotate(60)" />
          <ellipse rx="24" ry="9.5" transform="rotate(120)" />
        </g>
        {/* 3D Nucleus Sphere */}
        <circle cx="32" cy="31" r="6" fill="url(#react3dCore)" />
        <circle cx="30" cy="29" r="1.8" fill="#FFFFFF" fillOpacity="0.8" />
      </g>
    </svg>
  ),

  vite: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="vite3dShield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="55%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite3dBolt" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFF7B2" />
          <stop offset="45%" stopColor="#FFDD35" />
          <stop offset="100%" stopColor="#FFA800" />
        </linearGradient>
        <filter id="shadowVite3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#9333EA" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowVite3d)">
        {/* 3D Shield Depth */}
        <path
          d="M56 17L34.2 55.5c-1 1.7-3.4 1.7-4.4 0L8 17c-1-1.8.5-3.9 2.5-3.5l21.5 3.9 21.5-3.9c2-.4 3.5 1.7 2.5 3.5z"
          fill="#4C1D95"
        />
        {/* 3D Shield Front */}
        <path
          d="M56 13L34.2 51.5c-1 1.7-3.4 1.7-4.4 0L8 13c-1-1.8.5-3.9 2.5-3.5l21.5 3.9 21.5-3.9c2-.4 3.5 1.7 2.5 3.5z"
          fill="url(#vite3dShield)"
        />
        {/* 3D Lightning Bolt Depth */}
        <path
          d="M42 8L24 11.8l-1.2 19.5 5.2-1.2-1.5 7.5 1.5-1 14-27.5-4.5 1 1.5-4.1z"
          fill="#B45309"
          transform="translate(0, 2.5)"
        />
        {/* 3D Lightning Bolt Front */}
        <path
          d="M42 8L24 11.8l-1.2 19.5 5.2-1.2-1.5 7.5 1.5-1 14-27.5-4.5 1 1.5-4.1z"
          fill="url(#vite3dBolt)"
        />
      </g>
    </svg>
  ),

  mysql: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="mysql3dTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#00758F" />
        </linearGradient>
        <linearGradient id="mysql3dBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#00758F" />
          <stop offset="100%" stopColor="#004B5C" />
        </linearGradient>
        <linearGradient id="mysql3dGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F29111" />
        </linearGradient>
        <filter id="shadowMysql3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#00758F" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowMysql3d)">
        {/* Bottom 3D Cylinder Tier */}
        <path d="M12 38v10c0 5 9 9 20 9s20-4 20-9V38H12z" fill="url(#mysql3dBody)" />
        <ellipse cx="32" cy="38" rx="20" ry="8" fill="url(#mysql3dTop)" />
        {/* Middle 3D Golden Ring Tier */}
        <path d="M12 26v10c0 5 9 9 20 9s20-4 20-9V26H12z" fill="url(#mysql3dGold)" />
        <ellipse cx="32" cy="26" rx="20" ry="8" fill="#FBBF24" />
        {/* Top 3D Cylinder Tier */}
        <path d="M12 14v10c0 5 9 9 20 9s20-4 20-9V14H12z" fill="url(#mysql3dBody)" />
        <ellipse cx="32" cy="14" rx="20" ry="8" fill="url(#mysql3dTop)" stroke="#7DD3FC" strokeWidth="1" />
        <ellipse cx="26" cy="12" rx="9" ry="3" fill="white" fillOpacity="0.28" />
      </g>
    </svg>
  ),

  postgresql: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <radialGradient id="pg3dShield" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="55%" stopColor="#336791" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </radialGradient>
        <filter id="shadowPg3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#336791" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#shadowPg3d)">
        {/* 3D Extruded Shield Base */}
        <path d="M12 16c0-5 9-8 20-8s20 3 20 8v22c0 11-9 18-20 21-11-3-20-10-20-21V16z" fill="#172B46" transform="translate(0, 4)" />
        {/* 3D Glossy Shield Front */}
        <path d="M12 16c0-5 9-8 20-8s20 3 20 8v22c0 11-9 18-20 21-11-3-20-10-20-21V16z" fill="url(#pg3dShield)" stroke="#93C5FD" strokeWidth="1.2" />
        {/* 3D Elephant / Trunk Emblem */}
        <path
          d="M22 24c0-5 4.5-9 10-9s10 4 10 9v10c0 5.5-3.5 9-8 9-2.5 0-4-1.5-4-4v-6"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="27" cy="25" r="2" fill="#FFFFFF" />
        <circle cx="37" cy="25" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  ),

  supabase: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="supa3dFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="50%" stopColor="#3ECF8E" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="supa3dBack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <filter id="shadowSupa3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#3ECF8E" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowSupa3d)">
        {/* 3D Depth Bolt */}
        <path
          d="M35.5 55.5c-1.5 1.9-4.5.8-4.5-1.6V35h19c2.2 0 3.5 2.5 2 4.2l-16.5 16.3z"
          fill="#064E3B"
          transform="translate(0, 3)"
        />
        <path
          d="M35.5 55.5c-1.5 1.9-4.5.8-4.5-1.6V35h19c2.2 0 3.5 2.5 2 4.2l-16.5 16.3z"
          fill="url(#supa3dBack)"
        />
        <path
          d="M28.5 8.5c1.5-1.9 4.5-.8 4.5 1.6V29H14c-2.2 0-3.5-2.5-2-4.2L28.5 8.5z"
          fill="#047857"
          transform="translate(0, 3)"
        />
        <path
          d="M28.5 8.5c1.5-1.9 4.5-.8 4.5 1.6V29H14c-2.2 0-3.5-2.5-2-4.2L28.5 8.5z"
          fill="url(#supa3dFront)"
        />
      </g>
    </svg>
  ),

  esp32: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="esp3dChip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="esp3dPins" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <filter id="shadowEsp3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#E53935" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowEsp3d)">
        {/* Metallic Gold 3D Pins Left & Right */}
        <rect x="6" y="16" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="6" y="26" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="6" y="36" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="6" y="46" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="50" y="16" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="50" y="26" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="50" y="36" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        <rect x="50" y="46" width="8" height="4" rx="1.5" fill="url(#esp3dPins)" />
        {/* 3D PCB Base Depth */}
        <rect x="13" y="13" width="38" height="44" rx="6" fill="#7F1D1D" />
        {/* 3D PCB Top Body */}
        <rect x="13" y="8" width="38" height="44" rx="6" fill="url(#esp3dChip)" stroke="#FCA5A5" strokeWidth="1.2" />
        {/* Inner Silver RF Shield Box */}
        <rect x="19" y="16" width="26" height="22" rx="3" fill="#27272A" stroke="#A1A1AA" strokeWidth="1.5" />
        <text x="32" y="30" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="7.5" fontFamily="monospace">
          ESP32
        </text>
        <circle cx="41" cy="45" r="2.2" fill="#FDE047" />
      </g>
    </svg>
  ),

  ubuntu: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <radialGradient id="ubuntu3dSphere" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#FF8A5B" />
          <stop offset="50%" stopColor="#E95420" />
          <stop offset="100%" stopColor="#9A2B06" />
        </radialGradient>
        <filter id="shadowUbuntu3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#E95420" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowUbuntu3d)">
        {/* 3D Base Extrusion */}
        <circle cx="32" cy="35" r="24" fill="#7C2D12" />
        {/* 3D Glossy Sphere */}
        <circle cx="32" cy="30" r="24" fill="url(#ubuntu3dSphere)" stroke="#FDBA74" strokeWidth="1.2" />
        <ellipse cx="24" cy="18" rx="11" ry="5" fill="white" fillOpacity="0.22" />
        {/* Circle of Friends */}
        <circle cx="32" cy="30" r="10.5" stroke="#FFFFFF" strokeWidth="3.8" />
        <circle cx="17.5" cy="30" r="3.8" fill="#FFFFFF" stroke="#E95420" strokeWidth="1.2" />
        <circle cx="39.2" cy="17.5" r="3.8" fill="#FFFFFF" stroke="#E95420" strokeWidth="1.2" />
        <circle cx="39.2" cy="42.5" r="3.8" fill="#FFFFFF" stroke="#E95420" strokeWidth="1.2" />
      </g>
    </svg>
  ),

  apache: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="apache3dFeather" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="45%" stopColor="#D22128" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>
        <filter id="shadowApache3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#D22128" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowApache3d)">
        {/* 3D Feather Shadow Layer */}
        <path
          d="M49 9C36 13 22 27 14 45l-4 10 5-3c14-7 28-21 34-43z"
          fill="#4C1D95"
          transform="translate(0, 3.5)"
        />
        {/* 3D Feather Main Body */}
        <path
          d="M49 9C36 13 22 27 14 45l-4 10 5-3c14-7 28-21 34-43z"
          fill="url(#apache3dFeather)"
          stroke="#FCA5A5"
          strokeWidth="1"
        />
        <path
          d="M49 9C42 23 30 38 14 51"
          stroke="#FEF08A"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path d="M35 23l9 1.5M28 32l9 1.5M21 41l8 1.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  ),

  nginx: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="nginx3dHex" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#009639" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <filter id="shadowNginx3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#009639" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowNginx3d)">
        {/* 3D Extruded Bottom Hexagon */}
        <polygon points="32,10 54,22 54,47 32,59 10,47 10,22" fill="#064E3B" />
        {/* 3D Top Glossy Hexagon */}
        <polygon
          points="32,5 54,17 54,42 32,54 10,42 10,17"
          fill="url(#nginx3dHex)"
          stroke="#6EE7B7"
          strokeWidth="1.2"
        />
        {/* 3D Embossed N */}
        <path
          d="M23 40V20l18 20V20"
          stroke="#064E3B"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(0, 2)"
        />
        <path
          d="M23 40V20l18 20V20"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),

  pm2: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="pm23dBox" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#4C1D95" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>
        <filter id="shadowPm23d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#7C3AED" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowPm23d)">
        <rect x="6" y="16" width="52" height="40" rx="12" fill="#1E1B4B" />
        <rect x="6" y="10" width="52" height="40" rx="12" fill="url(#pm23dBox)" stroke="#C4B5FD" strokeWidth="1.2" />
        <rect x="12" y="14" width="40" height="10" rx="5" fill="white" fillOpacity="0.16" />
        <text
          x="32"
          y="37"
          textAnchor="middle"
          fill="#38BDF8"
          fontWeight="900"
          fontSize="18"
          fontFamily="monospace"
        >
          PM2
        </text>
      </g>
    </svg>
  ),

  bind9: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <radialGradient id="bind3dGlobe" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </radialGradient>
        <filter id="shadowBind3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowBind3d)">
        <circle cx="32" cy="35" r="23" fill="#082F49" />
        <circle cx="32" cy="30" r="23" fill="url(#bind3dGlobe)" stroke="#BAE6FD" strokeWidth="1.2" />
        <ellipse cx="32" cy="30" rx="10" ry="22" stroke="#E0F2FE" strokeWidth="2.2" />
        <path d="M10 23h44M10 37h44" stroke="#E0F2FE" strokeWidth="2.2" />
        <rect x="18" y="24" width="28" height="12" rx="4" fill="#0C4A6E" stroke="#7DD3FC" strokeWidth="1" />
        <text x="32" y="33" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="9" fontFamily="monospace">
          DNS
        </text>
      </g>
    </svg>
  ),

  cloudflare: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="cf3dCloud" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="45%" stopColor="#F38020" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
        <filter id="shadowCf3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#F38020" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#shadowCf3d)">
        {/* 3D Cloud Extrusion Base */}
        <path
          d="M47 49H18c-6.5 0-11.5-5-11.5-11.2 0-5.4 3.8-10 9-11C17.4 19.2 24 13.5 32.5 13.5c8.8 0 16 6.2 17.5 14.6 4.5.8 8 4.8 8 9.7 0 6.2-4.8 11.2-11 11.2z"
          fill="#7C2D12"
          transform="translate(0, 4)"
        />
        {/* 3D Glossy Cloud Front */}
        <path
          d="M47 49H18c-6.5 0-11.5-5-11.5-11.2 0-5.4 3.8-10 9-11C17.4 19.2 24 13.5 32.5 13.5c8.8 0 16 6.2 17.5 14.6 4.5.8 8 4.8 8 9.7 0 6.2-4.8 11.2-11 11.2z"
          fill="url(#cf3dCloud)"
          stroke="#FED7AA"
          strokeWidth="1.2"
        />
        <ellipse cx="29" cy="22" rx="10" ry="4" fill="white" fillOpacity="0.24" />
        {/* 3D Tunnel Arrow */}
        <path
          d="M23 36h18m0 0l-5-5m5 5l-5 5"
          stroke="#FFFFFF"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),

  vercel: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <defs>
        <linearGradient id="vercel3dLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D4D4D8" />
        </linearGradient>
        <linearGradient id="vercel3dRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A1A1AA" />
          <stop offset="100%" stopColor="#52525B" />
        </linearGradient>
        <filter id="shadowVercel3d" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="7" stdDeviation="4" floodColor="#000000" floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#shadowVercel3d)">
        {/* 3D Pyramid Base Extrusion */}
        <polygon points="32,12 58,54 6,54" fill="#27272A" />
        {/* 3D Pyramid Lit Left Facet */}
        <polygon points="32,8 32,50 6,50" fill="url(#vercel3dLeft)" />
        {/* 3D Pyramid Shaded Right Facet */}
        <polygon points="32,8 58,50 32,50" fill="url(#vercel3dRight)" />
      </g>
    </svg>
  ),

  n8n: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="12" r="3" stroke="#EA4B71" strokeWidth="2" />
      <circle cx="18" cy="7" r="3" stroke="#EA4B71" strokeWidth="2" />
      <circle cx="18" cy="17" r="3" stroke="#EA4B71" strokeWidth="2" />
      <path d="M9 12h6M15 9l-3 3M15 15l-3-3" stroke="#EA4B71" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  typescript: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        d="M5.5 11h6M8.5 11v8.5M14.2 17.5c.8.7 1.9 1.1 3.1 1.1 1.5 0 2.3-.7 2.3-1.7 0-2.1-4.8-1.4-4.8-4.2 0-1.5 1.3-2.6 3.3-2.6 1.3 0 2.4.4 3.1.9l-.8 1.4c-.6-.4-1.3-.7-2.2-.7-1.1 0-1.7.5-1.7 1.2 0 2 4.8 1.3 4.8 4.2 0 1.7-1.4 2.9-3.7 2.9-1.6 0-2.9-.5-3.8-1.3l.4-1.2z"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tailwind: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  ),
  html: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M6 28L4 3h24l-2 25-10 3-10-3z" fill="#E44D26" />
      <path d="M16 28.5l8-2.2 1.7-21.3H16v23.5z" fill="#F16529" />
      <path d="M16 13h-4.2l-.3-3.2H16V6.7H8.2l.8 9.4H16V13zm0 8.2l-3.6-1-.2-2.5H9l.4 5 6.6 1.8v-3.3z" fill="#EBEBEB" />
      <path d="M16 13v3.1h3.9l-.4 4.1-3.5 1v3.3l6.6-1.8.9-9.7H16zm0-6.3v3.1h7.5l.3-3.1H16z" fill="#FFFFFF" />
    </svg>
  ),
  css: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M6 28L4 3h24l-2 25-10 3-10-3z" fill="#1572B6" />
      <path d="M16 28.5l8-2.2 1.7-21.3H16v23.5z" fill="#33A9DC" />
      <path d="M16 13H9l.3 3.1H16V13zm0-6.3H8.2l.3 3.1H16V6.7zm0 14.5l-3.6-1-.2-2.5H9l.4 5 6.6 1.8v-3.3z" fill="#EBEBEB" />
      <path d="M16 13v3.1h3.9l-.4 4.1-3.5 1v3.3l6.6-1.8.9-9.7.6-6.3H16v3.1h4.2l-.3 3.2H16z" fill="#FFFFFF" />
    </svg>
  ),
  javascript: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        d="M11.2 17c0 2-1.1 2.9-2.8 2.9-1.5 0-2.4-.8-2.8-1.7l1.5-.9c.3.5.6 1 1.3 1 .6 0 1.1-.3 1.1-1.3v-5.8h1.7V17zm6.1 2.9c-1.8 0-3-.9-3.6-2l1.5-.9c.4.7 1 1.2 2 1.2.9 0 1.4-.4 1.4-1 0-.7-.6-1-1.5-1.4l-.5-.2c-1.5-.6-2.5-1.4-2.5-3.1 0-1.5 1.2-2.7 3-2.7 1.3 0 2.2.5 2.9 1.6l-1.5 1c-.3-.6-.7-.9-1.4-.9-.6 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3l.5.2c1.8.8 2.8 1.6 2.8 3.3 0 1.9-1.5 2.7-3.4 2.7z"
        fill="#000000"
      />
    </svg>
  ),
  arduino: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="8" cy="12" r="5" stroke="#00979D" strokeWidth="2" />
      <circle cx="16" cy="12" r="5" stroke="#00979D" strokeWidth="2" />
      <path d="M6 12h4M8 10v4M14 12h4" stroke="#00979D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // UI Icons
  github: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  linkedin: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  whatsapp: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  ),
  external: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  code: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  download: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  sun: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  moon: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  menu: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  mail: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  location: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  check: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  copy: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  send: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  star: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  chevronRight: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  arrowRight: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  filter: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  laptop: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="1" y1="20" x2="23" y2="20" />
    </svg>
  ),
  smartphone: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  cpu: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  ),
  server: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  layout: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  workflow: ({ className = "w-5 h-5" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6" />
      <polyline points="15 12 18 15 15 18" />
    </svg>
  ),
  sparkles: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  plus: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  edit: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  trash: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  admin: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0-2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  degree: ({ className = "w-4 h-4" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};
