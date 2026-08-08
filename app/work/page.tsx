import Image from "next/image";
import Reveal from "@/components/Reveal";
import { workItems } from "@/lib/data";

export const metadata = {
  title: "Work — Zyrus Agency",
};

export default function WorkPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-16">
        <Reveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] max-w-3xl">
            Work we&apos;ve shipped.
          </h1>
        </Reveal>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-6">
        {workItems.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.08}>
            <div
              id={item.slug}
              className="group rounded-2xl overflow-hidden border border-espresso/10 bg-sand-beige/20 hover:bg-sand-beige/35 transition-colors"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-caramel-brown/30 to-espresso/20 flex items-center justify-center">
                    <span className="font-display text-5xl text-espresso/40 group-hover:text-espresso/60 transition-colors">
                      {item.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl mb-1">{item.name}</h2>
                <p className="text-xs uppercase tracking-widest text-caramel-brown mb-4">
                  {item.category}
                </p>
                <p className="text-base text-espresso/70 leading-relaxed">{item.summary}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
