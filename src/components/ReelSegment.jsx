import React, { useEffect, useRef } from "react";
import ReelCard from "./ReelCard";

export default function ReelSegment({ title, reels, onCardClick }) {
  const scrollRef = useRef();

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const interval = setInterval(() => {
      scrollAmount += 1;
      if (scrollAmount > maxScroll) scrollAmount = 0;
      scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 50); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">{title}</h2>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {reels.map((r) => (
          <ReelCard key={r.id} reel={r} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
