"use client";

interface TextLinesProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextLines({ text, className = "", style }: TextLinesProps) {
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  
  return (
    <>
      {lines.map((line, index) => (
        <p 
          key={index} 
          className={`${className} animate-fade-in-up opacity-0`}
          data-animation-index={index}
        >
          {line}
        </p>
      ))}
    </>
  );
}
