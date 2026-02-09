"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Timeline from "../../components/Timeline";
import DayCard from "../../components/DayCard";
import { VALENTINE_DAYS, getDayFromDate } from "../../lib/dateUtils";

function PageContent() {
  const searchParams = useSearchParams();
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const dayParam = searchParams.get("day");

    if (dayParam) {
      const dayNum = parseInt(dayParam, 10);
      if (dayNum >= 1 && dayNum <= 7) {
        setCurrentDay(dayNum);
      } else {
        setCurrentDay(getDayFromDate() || 1);
      }
    } else {
      const today = getDayFromDate();
      setCurrentDay(today > 0 ? today : 1);
    }
  }, [searchParams]);

  const activeDayCard = useMemo(() => {
    return VALENTINE_DAYS.find((day) => day.day === currentDay);
  }, [currentDay]);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
        <div className="text-6xl animate-bounce">💕</div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen">
      <div className="pb-4">
        <Timeline currentDay={currentDay} />
      </div>
      <div className="relative">
        {activeDayCard && (
          <DayCard
            key={activeDayCard.day}
            day={activeDayCard}
          />
        )}
      </div>
    </main>
  );
}

export default function DaysPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
          <div className="text-6xl animate-bounce">💕</div>
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
