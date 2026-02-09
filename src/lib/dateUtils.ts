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
    color: "text-pink-300",
    bgGradient: "from-pink-500/80 via-rose-500/70 to-pink-400/80",
    visualType: "glow",
    hiddenText:
      "A game. A few laughs. Little characters running around. And somehow, that’s where you became my Moon.",
  },
  {
    day: 2,
    title: "Propose Day",
    date: "Feb 8",
    description: "We were friends first. That mattered to me.",
    color: "text-pink-300",
    bgGradient: "from-fuchsia-500/80 via-pink-500/70 to-rose-400/80",
    visualType: "pulse",
    hiddenText:
      "I didn’t want to lose you — not even as a friend. That’s why I called you my Infinity. And on the 21st of November, I chose you.",
  },
  {
    day: 3,
    title: "Chocolate Day",
    date: "Feb 9",
    description: "You make everything feel lighter without trying.",
    color: "text-pink-300",
    bgGradient: "from-rose-600/80 via-pink-500/70 to-orange-400/80",
    visualType: "shimmer",
    hiddenText:
      "Conversations last longer with you. Even silence feels comfortable. Nothing feels forced — it just feels right.",
  },
  {
    day: 4,
    title: "Teddy Day",
    date: "Feb 10",
    description: "It’s always the small things with you.",
    color: "text-pink-300",
    bgGradient: "from-pink-400/80 via-rose-400/70 to-pink-300/80",
    visualType: "sway",
    hiddenText:
      "When you kiss me randomly. When you fall asleep on vc with me there. Those moments stay with me more than you know.",
  },
  {
    day: 5,
    title: "Promise Day",
    date: "Feb 11",
    description: "I won’t promise perfection.",
    color: "text-pink-300",
    bgGradient: "from-indigo-500/70 via-purple-500/70 to-pink-400/80",
    visualType: "ripple",
    hiddenText:
      "But I promise honesty. Patience. And that I won’t disappear when things get hard. I don’t want to be temporary in your life.",
  },
  {
    day: 6,
    title: "Kiss Day",
    date: "Feb 12",
    description: "Some moments don’t need words.",
    color: "text-pink-300",
    bgGradient: "from-rose-500/80 via-pink-500/80 to-red-400/80",
    visualType: "glow",
    hiddenText:
      "Just closeness. Just that quiet feeling where everything else fades. You already know what I mean.",
  },
  {
    day: 7,
    title: "Valentine’s Day",
    date: "Feb 14",
    description: "This is me choosing you.",
    color: "text-pink-300",
    bgGradient: "from-rose-600/90 via-pink-600/80 to-rose-500/90",
    visualType: "pulse",
    hiddenText:
      "You’re still my Moon. Still my Infinity. And no matter how things change, I don’t want a life where you’re not part of it.",
  },
];


// Testing configuration
const TESTING_MODE = false;
const MOCK_CURRENT_DAY = 7;

export const getDayFromDate = (): number => {
  if (TESTING_MODE) return MOCK_CURRENT_DAY;

  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  if (month === 2) {
    if (date >= 7 && date <= 13) return date - 6;
    if (date === 14) return 7;
    if (date > 14) return 7;
  }

  return 0;
};

export const isUnlocked = (dayNumber: number): boolean => {
  const currentDay = getDayFromDate();
  return dayNumber <= currentDay && currentDay > 0;
};

export const getUnlockDate = (dayNumber: number): Date => {
  const year = new Date().getFullYear();
  const actualDate = Math.min(14, dayNumber + 6);
  return new Date(year, 1, actualDate);
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
