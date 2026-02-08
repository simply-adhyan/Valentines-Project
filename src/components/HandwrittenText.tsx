"use client";

interface HandwrittenTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HandwrittenText({ text, className = "", style }: HandwrittenTextProps) {
  const lines = text.split("\n").filter((line) => line.trim().length > 0);

  return (
    <>
      {lines.map((line, index) => (
        <p
          key={index}
          className={`${className} animate-fade-in-up opacity-0`}
          style={{
            fontFamily: "'Caveat', cursive",
            ...style,
            animationDelay: `${index * 250}ms`,
          }}
        >
          {line}
        </p>
      ))}
    </>
  );
}
