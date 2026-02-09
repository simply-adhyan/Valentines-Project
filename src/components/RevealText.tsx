"use client";

import { useState } from "react";
import HandwrittenText from "./HandwrittenText";

interface RevealTextProps {
  text: string;
  className?: string;
}

export default function RevealText({ text, className = "" }: RevealTextProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="relative w-full max-w-full px-2">
      {!isRevealed ? (
        <button
          type="button"
          onClick={handleReveal}
          className="group relative px-8 sm:px-12 py-6 sm:py-7 bg-slate-900/60 backdrop-blur-sm rounded-3xl border-2 border-dashed border-pink-400/60 hover:border-pink-400 transition-all duration-200 hover:bg-slate-900/70 hover:scale-[1.02] touch-manipulation active:scale-95 w-full sm:w-auto shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
          aria-label="Tap to reveal hidden message"
          aria-expanded="false"
          aria-controls="reveal-content"
        >
          <span 
            className="text-xl sm:text-2xl text-slate-100 group-hover:text-white transition-colors font-indie flex items-center justify-center gap-3"
          >
            <span className="text-2xl">✨</span>
            <span>Tap to reveal a secret message</span>
            <span className="text-2xl">✨</span>
          </span>
        </button>
      ) : (
        <div
          id="reveal-content"
          role="region"
          aria-label="Revealed message"
          className="animate-fade-in-up opacity-0 bg-slate-900/70 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl w-full"
        >
          <HandwrittenText 
            text={text}
            className={`text-pink-700 font-medium ${className}`}
          />
        </div>
      )}
    </div>
  );
}
