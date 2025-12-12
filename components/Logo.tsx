import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Outer Sun/Circle */}
          <circle cx="50" cy="50" r="45" fill="#f97316" className="opacity-20" />
          <circle cx="50" cy="50" r="40" fill="white" />
          
          {/* Hands symbolizing care */}
          <path d="M20 65 Q50 90 80 65" stroke="#15803d" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M30 60 Q50 80 70 60" fill="#15803d" className="opacity-20" />

          {/* Flame/Leaf symbolizing Life/Chetna */}
          <path d="M50 20 Q65 40 50 65 Q35 40 50 20" fill="#c2410c" />
          <path d="M50 25 Q58 40 50 55 Q42 40 50 25" fill="#f97316" />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-tight text-jcf-blue tracking-tight">
            Jeevan Chetna
          </span>
          <span className="text-sm font-medium text-jcf-green uppercase tracking-wider">
            Foundation
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;