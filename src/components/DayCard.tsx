import RevealText from "./RevealText";
import VisualAnchor from "./VisualAnchor";
import type { DayConfig } from "../lib/dateUtils";

interface DayCardProps {
  day: DayConfig;
}

export default function DayCard({ day }: DayCardProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-background text-foreground">
      <div className="relative max-w-4xl w-full text-center rounded-3xl bg-slate-900/70 backdrop-blur-md shadow-2xl p-10 sm:p-16 border border-white/10 overflow-hidden">
        <VisualAnchor type={day.visualType} gradient={day.bgGradient} />
        {/* TITLE */}
        <h1
          className="
            text-5xl sm:text-7xl md:text-8xl
            font-bold
            text-foreground
            mb-6
            font-dancing
            leading-tight
            relative
            drop-shadow-[0_8px_30px_rgba(255,120,200,0.25)]
          "
        >
          <span
            className={`absolute inset-0 bg-gradient-to-r ${day.bgGradient} opacity-40 blur-2xl -z-10`}
          />
          {day.title}
        </h1>

        {/* DATE */}
        <p className={`text-2xl sm:text-3xl ${day.color} font-medium mt-6 font-caveat tracking-wide`}>
          {day.date}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-8 text-xl sm:text-2xl text-slate-100 leading-relaxed italic">
          {day.description}
        </p>
        {day.hiddenText && (
          <div className="mt-10 flex justify-center">
            <RevealText text={day.hiddenText} />
          </div>
        )}
      </div>
    </section>
  );
}
