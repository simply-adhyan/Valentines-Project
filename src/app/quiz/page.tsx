"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface QuizOption {
  label: string;
  points: number;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "When we finally get time together, what feels most like us?",
    options: [
      { label: "Movie + call", points: 3 },
      { label: "Talking for hours about nothing", points: 3 },
      { label: "Just sitting quietly together", points: 2 },
    ],
  },
  {
    id: "q2",
    question: "When you stay up late with me, it’s usually because…",
    options: [
      { label: "You want my presence", points: 3 },
      { label: "You’re not ready to sleep yet", points: 2 },
      { label: "You don’t want the moment to end", points: 3 },
    ],
  },
  {
    id: "q3",
    question: "What makes a moment suddenly feel close between us?",
    options: [
      { label: "Random kisses", points: 3 },
      { label: "Comfortable silence", points: 2 },
      { label: "Playful teasing", points: 2 },
    ],
  },
  {
    id: "q4",
    question: "When something is bothering you, what helps the most?",
    options: [
      { label: "Talking it out with me", points: 3 },
      { label: "Just knowing I’m there", points: 3 },
      { label: "Being distracted for a while", points: 1 },
    ],
  },
  {
    id: "q5",
    question: "What matters more to you in us?",
    options: [
      { label: "Feeling understood", points: 3 },
      { label: "Laughing together", points: 2 },
      { label: "Not feeling alone", points: 3 },
    ],
  },
  {
    id: "q6",
    question: "If we had no plans at all, we would probably…",
    options: [
      { label: "End up talking anyway", points: 3 },
      { label: "Watch something together", points: 2 },
      { label: "Stay on call doing our own things", points: 3 },
    ],
  },
  {
    id: "q7",
    question: "What makes you feel safest with me?",
    options: [
      { label: "I don’t disappear", points: 3 },
      { label: "I listen properly", points: 3 },
      { label: "I stay patient", points: 2 },
    ],
  },
  {
    id: "q8",
    question: "Our conversations usually turn into…",
    options: [
      { label: "Late night talks", points: 3 },
      { label: "Playful banter", points: 2 },
      { label: "Unexpected honesty", points: 3 },
    ],
  },
  {
    id: "q9",
    question: "The best part of us is probably…",
    options: [
      { label: "We understand each other", points: 3 },
      { label: "Nothing feels forced", points: 3 },
      { label: "We can be quiet together", points: 2 },
    ],
  },
  {
    id: "q10",
    question: "If this quiz ends, what should happen next?",
    options: [
      { label: "Stay with me a little longer", points: 3 },
      { label: "Go to our Valentine pages", points: 2 },
      { label: "Restart just to annoy me", points: 1 },
    ],
  },
];


const AUTO_REDIRECT_MS = 2500;

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const redirectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentQuestion = QUESTIONS[currentIndex];

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  }, [answers]);

  const maxScore = useMemo(() => {
    return QUESTIONS.reduce((sum, q) => {
      const max = Math.max(...q.options.map((opt) => opt.points));
      return sum + max;
    }, 0);
  }, []);

  const handleOptionSelect = (points: number) => {
    const questionId = currentQuestion.id;
    const nextAnswers = { ...answers, [questionId]: points };
    setAnswers(nextAnswers);

    const isLast = currentIndex >= QUESTIONS.length - 1;
    if (isLast) {
      setIsComplete(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsComplete(false);
  };

  const handleContinue = () => {
    router.push("/days");
  };

  const resultLabel = useMemo(() => {
    const ratio = maxScore > 0 ? totalScore / maxScore : 0;
    if (ratio >= 0.8) return "Soulmate score";
    if (ratio >= 0.5) return "Sweet spot";
    return "Getting warmer";
  }, [maxScore, totalScore]);

  useEffect(() => {
    if (!isComplete) return;

    redirectTimerRef.current = setTimeout(() => {
      router.push("/days");
    }, AUTO_REDIRECT_MS);

    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, [isComplete, router]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-pink-100">
      <div className="w-full max-w-2xl rounded-3xl bg-slate-900/70 backdrop-blur-md border border-white/10 shadow-2xl px-6 sm:px-10 py-10 space-y-8">
        {!isComplete ? (
          <>
            <header className="space-y-2 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300/80">Valentine Quiz</p>
              <h1 className="text-3xl sm:text-4xl font-dancing">{currentQuestion.question}</h1>
              <p className="text-sm text-pink-200/70">
                Question {currentIndex + 1} of {QUESTIONS.length}
              </p>
            </header>

            <div className="grid gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleOptionSelect(option.points)}
                  className="w-full text-left px-5 py-4 rounded-2xl border border-pink-400/30 bg-white/5 hover:bg-white/10 hover:border-pink-300 transition-all duration-200 font-medium text-pink-50"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <header className="space-y-2 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-300/80">Your Result</p>
              <h1 className="text-3xl sm:text-4xl font-dancing">{resultLabel}</h1>
              <p className="text-pink-100/80">Score {totalScore} / {maxScore}</p>
            </header>

            <div className="rounded-2xl border border-pink-400/30 bg-white/5 px-6 py-5 text-center text-pink-100/90">
              Sending you to the days page in a moment...
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleContinue}
                className="flex-1 rounded-full px-6 py-3 bg-pink-500 text-white font-semibold shadow-[0_8px_24px_rgba(255,80,140,0.35)] hover:bg-pink-400 transition-colors"
              >
                Continue to Days
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="flex-1 rounded-full px-6 py-3 border border-pink-400/40 text-pink-100 font-semibold hover:bg-white/10 transition-colors"
              >
                Restart Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
