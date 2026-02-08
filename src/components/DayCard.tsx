"use client";

import { DayConfig, isUnlocked, getDaysUntilUnlock } from "../lib/dateUtils";
import HandwrittenText from "./HandwrittenText";
import VisualAnchor from "./VisualAnchor";
import RevealText from "./RevealText";

interface DayCardProps {
  day: DayConfig;
  isActive: boolean;
}

const getDayContent = (dayNumber: number) => {
  const contents = {
    1: {
      message: "A single rose speaks volumes.\nToday, let's celebrate new beginnings and the beauty of love blooming.",
      quote: "Like a rose, love needs care to flourish.",
      actionText: "Send a Rose 🌹",
      extraEmoji: "🌹",
      footer: "With love and roses",
    },
    2: {
      message: "Some words change everything.\nToday is about courage, vulnerability, and opening your heart.",
      quote: "The greatest risk is never taking one at all.",
      actionText: "Express Your Heart 💜",
      extraEmoji: "💍",
      footer: "Speak from the heart",
    },
    3: {
      message: "Life is sweet when shared.\nJust like chocolate, love is meant to be savored and enjoyed.",
      quote: "Sweetness shared is happiness doubled.",
      actionText: "Share the Sweetness 🍫",
      extraEmoji: "🍫",
      footer: "Indulge in love",
    },
    4: {
      message: "Comfort comes in many forms.\nSometimes the best gift is simply being present.",
      quote: "A hug is worth a thousand words.",
      actionText: "Send Comfort 🧸",
      extraEmoji: "🧸",
      footer: "Cuddles and warmth",
    },
    5: {
      message: "Promises are the foundation of trust.\nToday, let's commit to what truly matters.",
      quote: "A promise kept is worth more than gold.",
      actionText: "Make a Promise 💙",
      extraEmoji: "🤝",
      footer: "Sealed with a promise",
    },
    6: {
      message: "A kiss speaks the language of the soul.\nToday is about connection and pure affection.",
      quote: "In a kiss, two hearts become one.",
      actionText: "Seal with Love 💋",
      extraEmoji: "💋",
      footer: "With all my affection",
    },
    7: {
      message: "Today we celebrate love in all its forms.\nEvery moment, every choice, every day—love is the journey.",
      quote: "Love is not found, it is built—one day at a time.",
      actionText: "Celebrate Love ❤️",
      extraEmoji: "❤️",
      footer: "Forever and always",
    },
  };

  return contents[dayNumber as keyof typeof contents] || contents[1];
};

const getAnimationClass = (dayNumber: number): string => {
  const animations = ["animate-bounce-slow", "animate-pulse-slow", "animate-sway"];
  return animations[(dayNumber - 1) % animations.length];
};

const getEmojiForDay = (dayNumber: number): string => {
  const emojis = ["🌹", "💜", "🍫", "🧸", "💙", "💋", "❤️"];
  return emojis[dayNumber - 1] || "💕";
};

export default function DayCard({ day, isActive }: DayCardProps) {
  const unlocked = isUnlocked(day.day);
  const daysLeft = getDaysUntilUnlock(day.day);
  const emoji = getEmojiForDay(day.day);

  if (!isActive) return null;

  if (!unlocked) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <VisualAnchor type={day.visualType} gradient={day.bgGradient} />
        <div className="w-full max-w-[600px] text-center relative z-10 animate-fade-in">
          <div className="text-7xl sm:text-8xl mb-12 animate-bounce">{emoji}</div>
          <div className="text-5xl sm:text-6xl mb-10">🔒</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-400 mb-10 font-dancing">
            {day.title}
          </h2>
          <HandwrittenText
            text={daysLeft > 0
              ? `Unlocks in ${daysLeft} day${daysLeft !== 1 ? "s" : ""}`
              : "Coming soon..."}
            className="text-lg sm:text-xl text-gray-500 mb-12"
          />
          <div className="bg-white bg-opacity-50 backdrop-blur rounded-2xl p-6 sm:p-10 inline-block max-w-full shadow-lg">
            <HandwrittenText
              text="Patience makes the heart grow fonder... 💕"
              className="text-base sm:text-lg text-gray-600 italic"
            />
          </div>
        </div>
      </div>
    );
  }

  const content = getDayContent(day.day);
  const animation = getAnimationClass(day.day);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 via-red-50 to-pink-50">
      <VisualAnchor type={day.visualType} gradient={day.bgGradient} />
      <div className="w-full max-w-[600px] relative z-10 animate-fade-in">
        <div className="space-y-12 sm:space-y-16">
          {/* Emoji */}
          <div className={`text-7xl sm:text-9xl text-center mb-12 sm:mb-16 ${animation}`}>
            {emoji}
          </div>

          {/* Title */}
          <div className="text-center animate-slide-in mb-12 sm:mb-16">
            <h1 
              className={`text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r ${day.bgGradient} bg-clip-text text-transparent mb-6 font-dancing leading-tight`}
            >
              {day.title}
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 font-medium mt-6 font-caveat">
              {day.date}
            </p>
          </div>

          {/* Description */}
          <div className="text-center mb-12 sm:mb-16">
            <HandwrittenText 
              text={`"${day.description}"`}
              className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic"
            />
          </div>

          {/* Main Message */}
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl p-8 sm:p-14 shadow-2xl hover:shadow-pink-200 transition-all duration-300 animate-slide-in mb-12 sm:mb-16">
            <div className="text-center mb-10">
              <HandwrittenText 
                text={content.message}
                className="text-xl sm:text-2xl text-gray-800 leading-relaxed mb-3"
              />
            </div>
            <div className="border-t border-pink-200 pt-10">
              <HandwrittenText 
                text={content.quote}
                className="text-center text-lg sm:text-xl text-pink-700 italic font-medium"
              />
            </div>
          </div>

          {/* Hidden Reveal Text */}
          {day.hiddenText && (
            <div className="flex justify-center mb-16 sm:mb-20">
              <RevealText 
                text={day.hiddenText}
                className="text-xl sm:text-2xl leading-relaxed text-center"
              />
            </div>
          )}

          {/* Interactive Elements */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slide-in mb-12 sm:mb-16">
            <button 
              className={`min-w-[180px] px-12 sm:px-14 py-6 bg-gradient-to-r ${day.bgGradient} text-white rounded-full font-bold text-xl sm:text-2xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation shadow-lg font-dancing`}
            >
              {content.actionText}
            </button>
            <div className="text-5xl sm:text-6xl animate-bounce">
              {content.extraEmoji}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 sm:pt-12 pb-8">
            <HandwrittenText 
              text={content.footer}
              className="text-sm sm:text-base text-gray-600 italic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
