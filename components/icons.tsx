import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const Icons = {
  // Brand Tech Icons
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
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22.5 8.2L18 5.6l-4.5 2.6v5.2l-4.5 2.6V5.6L4.5 3 0 5.6v10.4l9 5.2 9-5.2v-2.6l4.5-2.6V8.2z"
        stroke="#FF2D20"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M0 5.6l4.5 2.6L9 5.6M4.5 8.2v10.4M13.5 8.2L18 10.8l4.5-2.6M18 10.8V16M9 16l4.5-2.6 4.5 2.6M9 21.2V16"
        stroke="#FF2D20"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  laravelReverb: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF2D20" fillOpacity="0.14" stroke="#FF2D20" strokeWidth="1.5" />
      <path
        d="M6 12h2l1.5-4 3 8 2-6 1.5 2H18"
        stroke="#FF2D20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  react: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 180 180" fill="none" className={className}>
      <circle cx="90" cy="90" r="88" fill="#000000" stroke="#3F3F46" strokeWidth="4" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="#FFFFFF"
      />
      <path d="M115 54H127V126H115V54Z" fill="#FFFFFF" />
    </svg>
  ),
  vite: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M29.8 6.2L16.8 29.4c-.4.7-1.4.7-1.8 0L2.2 6.2c-.4-.8.2-1.7 1.1-1.5l12.7 2.3c.2 0 .4 0 .5 0l12.2-2.3c.9-.2 1.5.7 1.1 1.5z"
        fill="#646CFF"
      />
      <path
        d="M22.2 3.1L12.8 5c-.3.1-.5.3-.5.6l-.6 10.2c0 .4.3.7.7.6l2.6-.6c.4-.1.8.3.7.7l-.8 3.8c-.1.5.4.9.8.6l.5-.3 7.2-14.2c.2-.5-.2-1-.7-.9l-2.3.5c-.4.1-.8-.3-.7-.7l.5-2.2z"
        fill="#FFD62E"
      />
    </svg>
  ),
  php: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 120 64" fill="none" className={className}>
      <ellipse cx="60" cy="32" rx="56" ry="28" fill="#777BB4" stroke="#9CA3DB" strokeWidth="2" />
      <text
        x="60"
        y="40"
        textAnchor="middle"
        fill="#111827"
        fontWeight="900"
        fontStyle="italic"
        fontSize="30"
        fontFamily="sans-serif"
      >
        php
      </text>
    </svg>
  ),
  mysql: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M19.5 18.5c-1.8-.4-3.2-1.5-4.1-3.1-.6-1.1-.9-2.2-1-3.4-.6.2-1.3.2-1.9 0-.8-.3-1.4-.9-1.9-1.6-.7-1-1.3-2.2-2.2-3-.8-.7-1.9-1.2-3-1.1-.5 0-1 .2-1.3.6-.3.4-.2 1 .1 1.4.5.7 1.3 1.1 2 1.6.9.7 1.7 1.6 2.1 2.7.3.8.4 1.7.3 2.5-.2 1.1-.8 2.1-1.6 2.9.9-.2 1.8-.6 2.5-1.2.6.9 1.5 1.6 2.5 2 1.7.7 3.7.7 5.5-.3z"
        stroke="#00758F"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="8.5" r="0.8" fill="#F29111" />
    </svg>
  ),
  postgresql: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="6" rx="8" ry="3.2" fill="#336791" fillOpacity="0.25" stroke="#336791" strokeWidth="1.8" />
      <path d="M4 6v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6" stroke="#336791" strokeWidth="1.8" />
      <path d="M4 12v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6" stroke="#5B9BD5" strokeWidth="1.8" />
    </svg>
  ),
  supabase: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.5 21.6c-.6.8-1.8.3-1.8-.7V13h7.8c.9 0 1.4 1 .8 1.7l-6.8 6.9z"
        fill="#249361"
      />
      <path
        d="M10.5 2.4c.6-.8 1.8-.3 1.8.7V11H4.5c-.9 0-1.4-1-.8-1.7l6.8-6.9z"
        fill="#3ECF8E"
      />
    </svg>
  ),
  esp32: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="#E53935" strokeWidth="1.8" />
      <path d="M9 8h6M9 12h6M9 16h3" stroke="#E53935" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 7h3M2 12h3M2 17h3M19 7h3M19 12h3M19 17h3" stroke="#E53935" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1" fill="#E53935" />
    </svg>
  ),
  ubuntu: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#E95420" />
      <circle cx="12" cy="12" r="4.5" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="6.2" cy="12" r="1.6" fill="#FFFFFF" />
      <circle cx="14.9" cy="7" r="1.6" fill="#FFFFFF" />
      <circle cx="14.9" cy="17" r="1.6" fill="#FFFFFF" />
    </svg>
  ),
  apache: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M18.5 3.5c-4 1.5-8.5 6-11.5 12.5L5 20.5l2-1.5c5.5-2.5 10.5-7.5 11.5-15.5z"
        fill="#D22128"
      />
      <path
        d="M18.5 3.5c-2 4.5-6 9.5-11.5 15.5"
        stroke="#F57C00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M13 9.5l3.5.5M10.5 13l3.5.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  nginx: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <polygon
        points="12,2 20.66,7 20.66,17 12,22 3.34,17 3.34,7"
        fill="#009639"
      />
      <path
        d="M8.5 16V8l7 8V8"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pm2: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#2B037A" stroke="#7C3AED" strokeWidth="1.5" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="#38BDF8"
        fontWeight="900"
        fontSize="8.5"
        fontFamily="monospace"
      >
        PM2
      </text>
    </svg>
  ),
  bind9: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="#0284C7" strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M3.5 9h17M3.5 15h17" stroke="#0284C7" strokeWidth="1.5" />
    </svg>
  ),
  cloudflare: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17.5 18H6.8c-2.3 0-4.3-1.8-4.3-4.1 0-2 1.4-3.7 3.4-4 .7-2.8 3.2-4.9 6.3-4.9 3.2 0 5.9 2.3 6.4 5.4 1.7.3 2.9 1.8 2.9 3.6 0 2.2-1.8 4-4 4z"
        fill="#F38020"
      />
      <path d="M9 14h6m0 0l-2-2m2 2l-2 2" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  vercel: ({ className = "w-6 h-6" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12,3 22,20 2,20" />
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
