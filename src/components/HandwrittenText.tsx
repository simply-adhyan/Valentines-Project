"use client";

interface HandwrittenTextProps {
  text: string;
  className?: string;
}

export default function HandwrittenText({ text, className = "" }: HandwrittenTextProps) {
  const lines = text.split("\n").filter((line) => line.trim().length > 0);

  return (
    <div className="handwritten-lines">
      {lines.map((line, index) => (
        <p
          key={index}
          className={`${className} handwritten-line animate-fade-in-up opacity-0 font-caveat`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
