"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const OFFSET_CLASSES = [
  "translate-x-0 translate-y-0",
  "translate-x-4 translate-y-2",
  "-translate-x-4 -translate-y-2",
  "translate-x-6 -translate-y-3",
  "-translate-x-6 translate-y-3",
  "translate-x-8 translate-y-1",
  "-translate-x-8 -translate-y-1",
  "translate-x-3 translate-y-6",
  "-translate-x-3 -translate-y-6",
  "translate-x-5 translate-y-5",
  "-translate-x-5 -translate-y-5",
];

const NO_MESSAGES = [
  "Nah, that aint working.",
  "Nice try, but nope.",
  "Denied. Try again.",
  "Nope, this button is shy.",
  "Not today.",
  "This is a no-fly zone.",
  "Sorry, cannot click this.",
  "Not happening.",
  "You really want to click no?",
  "The no says no.",
  "System rejects that.",
  "Nope, keep trying.",
];

export default function LandingPage() {
  const [offsetClass, setOffsetClass] = useState("translate-x-0 translate-y-0");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const moveAway = useCallback(() => {
    const nextIndex = Math.floor(Math.random() * OFFSET_CLASSES.length);
    const nextClass = OFFSET_CLASSES[nextIndex];
    setOffsetClass((prev) => (prev === nextClass ? OFFSET_CLASSES[(nextIndex + 1) % OFFSET_CLASSES.length] : nextClass));
  }, []);

  const showNoPopup = useCallback(() => {
    const nextIndex = Math.floor(Math.random() * NO_MESSAGES.length);
    const nextMessage = NO_MESSAGES[nextIndex];

    setPopupMessage((prev) => (prev === nextMessage ? NO_MESSAGES[(nextIndex + 1) % NO_MESSAGES.length] : nextMessage));
    setShowPopup(true);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-12 overflow-hidden
    bg-gradient-to-br from-slate-950 via-slate-900 to-black text-pink-100">

      <div className="w-full max-w-xl text-center space-y-14">

        {/* QUESTION */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-dancing
        drop-shadow-[0_4px_20px_rgba(255,120,180,0.25)]">
          Will you be my Valentine this year?
        </h1>

        {/* BUTTONS */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8">

          {/* YES BUTTON */}
          <Link
            href="/quiz"
            className="min-w-[150px] px-10 py-4 rounded-full
            bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
            text-white font-bold text-xl font-caveat
            shadow-[0_8px_30px_rgba(255,80,140,0.45)]
            transition-all duration-200 ease-out
            hover:scale-110 hover:shadow-[0_10px_40px_rgba(255,90,150,0.65)]
            active:scale-95"
          >
            YES
          </Link>

          {/* NO BUTTON */}
          <button
            type="button"
            onMouseEnter={moveAway}
            onTouchStart={(e) => {
              e.preventDefault();
              moveAway();
            }}
            onFocus={moveAway}
            onClick={showNoPopup}
            className={`min-w-[150px] px-10 py-4 rounded-full
            border border-pink-400/40
            bg-white/5 backdrop-blur-sm
            text-pink-200 font-bold text-xl font-caveat
            transition-transform duration-200 ease-out
            hover:bg-white/10 hover:border-pink-300
            will-change-transform ${offsetClass}`}
            aria-label="No"
          >
            NO
          </button>

        </div>
      </div>

      {showPopup && (
        <div className="no-popup animate-fade-in-up" role="status" aria-live="polite">
          {popupMessage}
        </div>
      )}
    </main>
  );
}
