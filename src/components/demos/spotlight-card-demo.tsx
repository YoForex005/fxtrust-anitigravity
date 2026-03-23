"use client";

import { GlowCard } from "@/components/ui/spotlight-card";

export function SpotlightCardDemo() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10">
      <GlowCard />
      <GlowCard />
      <GlowCard />
    </div>
  );
}
