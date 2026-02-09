"use client";

import Link from "next/link";
import { VALENTINE_DAYS, isUnlocked, getDaysUntilUnlock, getProgressPercentage } from "../lib/dateUtils";

interface TimelineProps {
  currentDay: number;
}

export default function Timeline({ currentDay }: TimelineProps) {
  const progressPercentage = getProgressPercentage();
  const progressDay = Math.max(0, Math.min(7, Math.round(progressPercentage / (100 / 7))));
  const progressWidthClasses = [
    "w-0",
    "w-[14.285%]",
    "w-[28.571%]",
    "w-[42.857%]",
    "w-[57.142%]",
    "w-[71.428%]",
    "w-[85.714%]",
    "w-full",
  ];
  const progressWidthClass = progressWidthClasses[progressDay] || "w-0";

  return (
    <div className="w-full py-5 sm:py-6 px-3 sm:px-6 bg-slate-900/70 backdrop-blur-md shadow-sm overflow-x-auto scrollbar-hide">
      <div className="max-w-6xl mx-auto min-w-[640px]">
        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full -translate-y-1/2" />
          <div
            className={`absolute top-1/2 left-0 h-1.5 ${progressWidthClass} bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 rounded-full transition-all duration-1000 ease-out -translate-y-1/2`}
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
                  href={unlocked ? `/days?day=${dayConfig.day}` : "#"}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    unlocked ? "cursor-pointer" : "cursor-not-allowed"
                  } ${isActive ? "scale-105 z-10" : "hover:scale-105"}`}
                  onClick={(e) => !unlocked && e.preventDefault()}
                  aria-disabled={!unlocked}
                  aria-label={`${dayConfig.title} ${dayConfig.date} ${unlocked ? "unlocked" : "locked"}`}
                  title={unlocked ? `${dayConfig.title} (${dayConfig.date})` : `Locked until ${dayConfig.date}`}
                >
                  {/* Day Circle */}
                  <div
                    className={`relative w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 border-4 ${
                      unlocked
                        ? `border-white shadow-md bg-gradient-to-r ${dayConfig.bgGradient} ${
                            isActive
                              ? "text-white ring-4 ring-primary/60 ring-offset-2 shadow-lg animate-pulse-slow"
                              : "text-white"
                          }`
                        : "bg-slate-800 text-slate-200 border-slate-700"
                    }`}
                    role="img"
                    aria-label={unlocked ? `Day ${dayConfig.day}` : `Day ${dayConfig.day} locked`}
                  >
                    {unlocked ? (
                      dayConfig.day
                    ) : (
                      <>
                        <span>{dayConfig.day}</span>
                        <span
                          className="absolute -top-1 -right-1 bg-white rounded-full border border-gray-300 px-1 py-0.5 text-[10px] sm:text-xs shadow"
                          aria-hidden="true"
                          title="Locked"
                        >
                          🔒
                        </span>
                      </>
                    )}
                  </div>

                  {/* Day Info */}
                  <div className="mt-2 text-center max-w-[70px] sm:max-w-[80px]">
                    <p
                      className={`text-[10px] sm:text-xs font-bold transition-colors ${
                        unlocked ? dayConfig.color : "text-slate-300"
                      }`}
                    >
                      {dayConfig.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                      {dayConfig.date}
                    </p>
                    {!unlocked && daysLeft > 0 && (
                      <p className="text-[9px] sm:text-[10px] text-slate-300 mt-1 bg-slate-800 rounded px-1.5 py-0.5">
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
