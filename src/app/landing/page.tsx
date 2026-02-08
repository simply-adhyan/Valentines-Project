"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

export default function LandingPage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const moveAway = useCallback(() => {
    const range = 80;
    const nextX = Math.round((Math.random() * 2 - 1) * range);
    const nextY = Math.round((Math.random() * 2 - 1) * range);
    setOffset({ x: nextX, y: nextY });
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
      <div className="w-full max-w-lg text-center space-y-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-tight px-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Will you be my Valentine this year?
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-4">
          <Link
            href="/"
            className="min-w-[140px] px-10 py-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xl shadow-lg transition-transform duration-300 ease-out hover:scale-105 active:scale-95 touch-manipulation"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            YES
          </Link>

          <button
            type="button"
            onMouseEnter={moveAway}
            onTouchStart={(e) => {
              e.preventDefault();
              moveAway();
            }}
            onFocus={moveAway}
            className="min-w-[140px] px-10 py-4 rounded-full border-2 border-gray-300 text-gray-600 font-bold text-xl transition-all duration-200 ease-out touch-manipulation will-change-transform"
            style={{
              fontFamily: "'Caveat', cursive",
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
            aria-label="No"
          >
            NO
          </button>
        </div>
      </div>
    </main>
  );
}
