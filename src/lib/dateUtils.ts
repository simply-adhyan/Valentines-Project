export interface DayConfig {
  day: number;
  title: string;
  date: string;
  description: string;
  color: string;
  bgGradient: string;
  visualType?: 'glow' | 'pulse' | 'sway' | 'shimmer' | 'ripple' | 'none';
  hiddenText?: string;
}

export const VALENTINE_DAYS: DayConfig[] = [
  {
    day: 1,
    title: "Rose Day",
    date: "Feb 7",
    description: "A day of promises and beautiful beginnings",
    color: "text-red-600",
    bgGradient: "from-red-500 to-pink-500",
    visualType: "glow",
    hiddenText: "Every rose has its own story, and today, you get to write yours.",
  },
  {
    day: 2,
    title: "Propose Day",
    date: "Feb 8",
    description: "A day to express your deepest feelings",
    color: "text-purple-600",
    bgGradient: "from-purple-500 to-pink-500",
    visualType: "pulse",
    hiddenText: "The words 'I love you' change everything. Are you ready?",
  },
  {
    day: 3,
    title: "Chocolate Day",
    date: "Feb 9",
    description: "Sweetness shared is happiness doubled",
    color: "text-amber-600",
    bgGradient: "from-amber-600 to-orange-500",
    visualType: "shimmer",
    hiddenText: "Life is like chocolate—meant to be savored, not rushed.",
  },
  {
    day: 4,
    title: "Teddy Day",
    date: "Feb 10",
    description: "Comfort and cuddles all around",
    color: "text-pink-600",
    bgGradient: "from-pink-400 to-rose-500",
    visualType: "sway",
    hiddenText: "Sometimes the best gift is simply being there.",
  },
  {
    day: 5,
    title: "Promise Day",
    date: "Feb 11",
    description: "Promises that last forever",
    color: "text-blue-600",
    bgGradient: "from-blue-500 to-indigo-500",
    visualType: "ripple",
    hiddenText: "A promise kept is worth more than a thousand words spoken.",
  },
  {
    day: 6,
    title: "Kiss Day",
    date: "Feb 12",
    description: "A moment of pure affection",
    color: "text-rose-600",
    bgGradient: "from-rose-500 to-red-500",
    visualType: "glow",
    hiddenText: "In a kiss, two hearts whisper secrets only they can hear.",
  },
  {
    day: 7,
    title: "Valentine's Day",
    date: "Feb 14",
    description: "The day of love and celebration",
    color: "text-red-700",
    bgGradient: "from-red-600 via-pink-600 to-red-600",
    visualType: "pulse",
    hiddenText: "Love is not found, it is built—one moment, one choice, one day at a time.",
  },
];

// Testing configuration
const TESTING_MODE = false; // Set to false for production
const MOCK_CURRENT_DAY = 1; // Only used when TESTING_MODE = true

export const getDayFromDate = (): number => {
  if (TESTING_MODE) return MOCK_CURRENT_DAY;
  
  const today = new Date();
  const month = today.getMonth() + 1; // 0-indexed, so +1
  const date = today.getDate();

  // Valentine week: Feb 7-14
  if (month === 2) {
    if (date >= 7 && date <= 14) {
      return date - 6; // Feb 7 = day 1, Feb 14 = day 7
    }
    if (date > 14) return 7; // After Valentine's week, show day 7
  }
  
  return 0; // Before Valentine week
};

export const isUnlocked = (dayNumber: number): boolean => {
  const currentDay = getDayFromDate();
  return dayNumber <= currentDay && currentDay > 0;
};

export const getUnlockDate = (dayNumber: number): Date => {
  const year = new Date().getFullYear();
  return new Date(year, 1, dayNumber + 6); // Month is 0-indexed: 1 = Feb
};

export const getDaysUntilUnlock = (dayNumber: number): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const unlockDate = getUnlockDate(dayNumber);
  unlockDate.setHours(0, 0, 0, 0);
  
  const diffTime = unlockDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays);
};

export const getProgressPercentage = (): number => {
  const currentDay = getDayFromDate();
  if (currentDay <= 0) return 0;
  return Math.min((currentDay / 7) * 100, 100);
};

export const getCurrentDay = (): DayConfig | null => {
  const dayNumber = getDayFromDate();
  return VALENTINE_DAYS.find(day => day.day === dayNumber) || null;
};
