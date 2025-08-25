"use client";

import { cn } from "@/lib/utils";

export function FooterWave({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1440 21.21V120H0V21.21C240 38.07 480 54.93 720 54.93C960 54.93 1200 38.07 1440 21.21Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
}

export { FooterWave as WavyPattern };
