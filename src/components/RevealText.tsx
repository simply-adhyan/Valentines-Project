"use client";

import { useState } from "react";
import HandwrittenText from "./HandwrittenText";

interface RevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function RevealText({ text, className = "", style }: RevealTextProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="relative w-full max-w-full px-2">
      {!isRevealed ? (
        <button
          onClick={handleReveal}
          className="group relative px-8 sm:px-12 py-6 sm:py-7 bg-white bg-opacity-40 backdrop-blur-sm rounded-3xl border-2 border-dashed border-pink-300 hover:border-pink-400 transition-all duration-300 hover:bg-opacity-50 hover:scale-[1.02] touch-manipulation active:scale-95 w-full sm:w-auto shadow-sm hover:shadow-md"
          aria-label="Tap to reveal hidden message"
        >
          <span 
            className="text-xl sm:text-2xl text-gray-700 group-hover:text-gray-800 transition-colors font-indie flex items-center justify-center gap-3"
          >
            <span className="text-2xl">✨</span>
            <span>Tap to reveal a secret message</span>
            <span className="text-2xl">✨</span>
          </span>
        </button>
      ) : (
        <div className="animate-fade-in-up opacity-0 bg-white bg-opacity-50 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-pink-200 shadow-xl w-full">
          <HandwrittenText 
            text={text}
            className={`text-pink-700 font-medium ${className}`}
            style={style}
          />
        </div>
      )}
    </div>
  );
}
