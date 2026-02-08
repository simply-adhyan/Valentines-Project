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
    description: "I still find it strange how we met.",
    color: "text-red-600",
    bgGradient: "from-red-500 to-pink-500",
    visualType: "glow",
    hiddenText:
      "A game. A few laughs. Little characters running around. And somehow, that’s where you became my Moon.",
  },
  {
    day: 2,
    title: "Propose Day",
    date: "Feb 8",
    description: "We were friends first. That mattered to me.",
    color: "text-purple-600",
    bgGradient: "from-purple-500 to-pink-500",
    visualType: "pulse",
    hiddenText:
      "I didn’t want to lose you — not even as a friend. That’s why I called you my Infinity. And on the 21st of November, I chose you.",
  },
  {
    day: 3,
    title: "Chocolate Day",
    date: "Feb 9",
    description: "You make everything feel lighter without trying.",
    color: "text-amber-600",
    bgGradient: "from-amber-600 to-orange-500",
    visualType: "shimmer",
    hiddenText:
      "Conversations last longer with you. Even silence feels comfortable. Nothing feels forced — it just feels right.",
  },
  {
    day: 4,
    title: "Teddy Day",
    date: "Feb 10",
    description: "It’s always the small things with you.",
    color: "text-pink-600",
    bgGradient: "from-pink-400 to-rose-500",
    visualType: "sway",
    hiddenText:
      "When you kiss me randomly. When you fall asleep on vc with me there. Those moments stay with me more than you know.",
  },
  {
    day: 5,
    title: "Promise Day",
    date: "Feb 11",
    description: "I won’t promise perfection.",
    color: "text-blue-600",
    bgGradient: "from-blue-500 to-indigo-500",
    visualType: "ripple",
    hiddenText:
      "But I promise honesty. Patience. And that I won’t disappear when things get hard. I don’t want to be temporary in your life.",
  },
  {
    day: 6,
    title: "Kiss Day",
    date: "Feb 12",
    description: "Some moments don’t need words.",
    color: "text-rose-600",
    bgGradient: "from-rose-500 to-red-500",
    visualType: "glow",
    hiddenText:
      "Just closeness. Just that quiet feeling where everything else fades. You already know what I mean.",
  },
  {
    day: 7,
    title: "Valentine’s Day",
    date: "Feb 14",
    description: "This is me choosing you.",
    color: "text-red-700",
    bgGradient: "from-red-600 via-pink-600 to-red-600",
    visualType: "pulse",
    hiddenText:
      "You’re still my Moon. Still my Infinity. And no matter how things change, I don’t want a life where you’re not part of it.",
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
