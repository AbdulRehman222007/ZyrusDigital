import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services — Zyrus Agency",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-16">
        <Reveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] max-w-3xl">
            Everything your brand needs, under one roof.
          </h1>
        </Reveal>
      </div>

      <div className="border-t border-espresso/10">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <Link
              href={`/services/${s.slug}`}
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-[1400px] mx-auto px-6 md:px-8 py-10 border-b border-espresso/10 hover:bg-sand-beige/15 transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xs text-caramel-brown">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-3xl md:text-5xl">{s.name}</h2>
              </div>
              <p className="text-sm md:text-base text-caramel-brown max-w-sm">{s.tagline}</p>
              <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-espresso/20 group-hover:bg-espresso group-hover:text-oat-cream transition-colors shrink-0">
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
