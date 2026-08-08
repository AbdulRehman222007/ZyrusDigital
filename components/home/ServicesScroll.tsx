"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesScroll() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-espresso text-oat-cream"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            data-cursor-hover
            className="absolute inset-0 flex flex-col justify-center transition-opacity duration-700"
            style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 w-full">
              <h3 className="text-xs uppercase tracking-widest text-sand-beige mb-4">
                {String(i + 1).padStart(2, "0")} — {s.name}
              </h3>
              <div className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] max-w-4xl">
                {s.ticker}
              </div>
            </div>
          </Link>
        ))}

        {/* progress nav */}
        <div className="absolute bottom-10 left-0 right-0 max-w-[1400px] mx-auto px-6 md:px-8 flex gap-2">
          {services.map((s, i) => (
            <div key={s.slug} className="h-[2px] flex-1 bg-oat-cream/20 overflow-hidden">
              <div
                className="h-full bg-sand-beige transition-all duration-500"
                style={{ width: active >= i ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* scroll-driver markers: one screen-height slot per service, tracked by IntersectionObserver */}
      <div className="absolute inset-0 pointer-events-none">
        {services.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="absolute left-0 right-0"
            style={{ top: `${i * 100}vh`, height: "100vh" }}
          />
        ))}
      </div>
    </section>
  );
}
