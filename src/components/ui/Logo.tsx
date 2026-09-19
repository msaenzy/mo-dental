import React from 'react';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ theme = 'light', className = '' }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-[#F7F5F1]' : 'text-[#1F2421]';
  const iconStroke = isDark ? '#F7F5F1' : '#2B4650';
  const subtextColor = isDark ? 'text-[#F7F5F1]/70' : 'text-[#1F2421]/70';

  return (
    <a
      href="#inicio"
      id="brand-logo-link"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="MO Dental — Consultorio Odontológico"
    >
      {/* Subtle minimalist medical / tooth icon with consistent stroke width */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-md transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconStroke}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
          aria-hidden="true"
        >
          {/* Subtle anatomical crown and root tooth outline */}
          <path d="M12 2.5C9 2.5 6 4.5 5.5 8c-.5 3.5 1 7.5 2.5 12 .5 1.5 1.5 1.5 3 1.5 1 0 1.5-.8 1-2.5-.5-1.7-.2-4 0-4s.5 2.3 0 4c-.5 1.7 0 2.5 1 2.5 1.5 0 2.5 0 3-1.5 1.5-4.5 3-8.5 2.5-12C18 4.5 15 2.5 12 2.5Z" />
          {/* Subtle gentle gloss / contour line */}
          <path d="M8.5 7.5c1-1 2.5-1.5 3.5-1.5" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-editorial text-xl sm:text-2xl font-semibold tracking-tight ${textColor}`}
        >
          MO Dental
        </span>
        <span className={`text-[10px] sm:text-xs font-normal tracking-wide uppercase ${subtextColor}`}>
          Consultorio Odontológico
        </span>
      </div>
    </a>
  );
};
