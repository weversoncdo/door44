import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const HeaderBrand: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-2 cursor-pointer select-none group transition-opacity hover:opacity-90 ${className}`}
    >
      {/* Red vertical accent bar as seen in the PDF logo */}
      <span className="w-[3px] h-7 bg-[#e11d24] rounded-xs group-hover:scale-y-110 transition-transform duration-200" />
      <div className="flex flex-col leading-none">
        <span className="font-bebas text-xl md:text-2xl font-bold tracking-wider text-white">
          DOOR44
        </span>
        <span className="font-bebas text-[11px] md:text-xs tracking-[0.28em] text-[#d4d4d8] font-semibold -mt-0.5">
          STUDIOS
        </span>
      </div>
    </div>
  );
};

export const Geometric44Emblem: React.FC<{ className?: string; opacity?: number }> = ({ 
  className = '', 
  opacity = 0.35 
}) => {
  return (
    <svg 
      viewBox="0 0 640 640" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      {/* Left 4 */}
      <polyline
        points="280,115 125,320 515,320"
        fill="none"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="280"
        y1="115"
        x2="280"
        y2="425"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinecap="round"
      />

      {/* Right 4 (Inverted & Interlocked) */}
      <polyline
        points="515,320 360,525"
        fill="none"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="360"
        y1="215"
        x2="360"
        y2="525"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinecap="round"
      />
    </svg>
  );
};
