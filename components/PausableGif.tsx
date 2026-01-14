"use client";

import { useState } from "react";
import Image from "next/image";

interface PausableGifProps {
  gifSrc: string;
  staticSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function PausableGif({
  gifSrc,
  staticSrc,
  alt,
  width,
  height,
  className = "",
}: PausableGifProps) {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      className={`rounded-lg overflow-hidden border border-gray-700 cursor-pointer ${className}`}
      onClick={togglePause}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          togglePause();
        }
      }}
      aria-label={isPaused ? "Click to play GIF" : "Click to pause GIF"}
    >
      <Image
        src={isPaused ? staticSrc : gifSrc}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        unoptimized
      />
    </div>
  );
}
