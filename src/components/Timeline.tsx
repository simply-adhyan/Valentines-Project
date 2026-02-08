"use client";

import Link from "next/link";
import { VALENTINE_DAYS, isUnlocked, getDaysUntilUnlock, getProgressPercentage } from "../lib/dateUtils";

interface TimelineProps {
  currentDay: number;
}

export default function Timeline({ currentDay }: TimelineProps) {
  const progressPercentage = getProgressPercentage();

  return (
    <div className="w-full py-5 sm:py-6 px-3 sm:px-6 bg-white/70 backdrop-blur-md shadow-sm overflow-x-auto scrollbar-hide">
      <div className="max-w-6xl mx-auto min-w-[640px]">
        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 rounded-full transition-all duration-1000 ease-out -translate-y-1/2"
            style={{ width: `${progressPercentage}%` }}
          />

          {/* Timeline Days */}
          <div className="relative flex justify-between items-center">
            {VALENTINE_DAYS.map((dayConfig) => {
              const unlocked = isUnlocked(dayConfig.day);
              const daysLeft = getDaysUntilUnlock(dayConfig.day);
              const isActive = currentDay === dayConfig.day;

              return (
                <Link
                  key={dayConfig.day}
                  href={unlocked ? `/?day=${dayConfig.day}` : "#"}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    unlocked ? "cursor-pointer" : "cursor-not-allowed"
                  } ${isActive ? "scale-105 z-10" : "hover:scale-105"}`}
                  onClick={(e) => !unlocked && e.preventDefault()}
                >
                  {/* Day Circle */}
                  <div
                    className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 border-4 ${
                      unlocked
                        ? `text-white border-white shadow-md bg-gradient-to-r ${dayConfig.bgGradient} ${isActive ? "ring-4 ring-pink-300 shadow-lg animate-pulse-slow" : ""}`
                        : "bg-gray-300 text-gray-500 border-gray-200"
                    }`}
                  >
                    {unlocked ? dayConfig.day : "🔒"}
                  </div>

                  {/* Day Info */}
                  <div className="mt-2 text-center max-w-[70px] sm:max-w-[80px]">
                    <p
                      className={`text-[10px] sm:text-xs font-bold transition-colors ${
                        unlocked ? dayConfig.color : "text-gray-400"
                      }`}
                    >
                      {dayConfig.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                      {dayConfig.date}
                    </p>
                    {!unlocked && daysLeft > 0 && (
                      <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 bg-gray-100 rounded px-1.5 py-0.5">
                        {daysLeft}d
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
