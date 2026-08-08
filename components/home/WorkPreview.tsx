import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { workItems } from "@/lib/data";

export default function WorkPreview() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 md:py-32">
      <Reveal>
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <h2 className="font-display text-3xl md:text-5xl max-w-lg">Selected work</h2>
          <Link
            href="/work"
            data-cursor-hover
            className="text-sm border-b border-espresso pb-1 hover:text-caramel-brown hover:border-caramel-brown transition-colors shrink-0"
          >
            View all →
          </Link>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {workItems.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.1}>
            <Link
              href={`/work#${item.slug}`}
              data-cursor-hover
              className="group block rounded-2xl overflow-hidden border border-espresso/10 bg-sand-beige/20 hover:bg-sand-beige/35 transition-colors"
            >
             <div className="aspect-[4/3] relative overflow-hidden bg-espresso/5">
  {item.image ? (
    <Image
      src={item.image}
      alt={item.name}
      fill
      className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
    />
  ) : (
                  <div className="w-full h-full bg-gradient-to-br from-caramel-brown/30 to-espresso/20 flex items-center justify-center">
                    <span className="font-display text-4xl text-espresso/40 group-hover:text-espresso/60 transition-colors">
                      {item.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-1">{item.name}</h3>
                <p className="text-xs uppercase tracking-widest text-caramel-brown mb-3">
                  {item.category}
                </p>
                <p className="text-sm text-espresso/70 leading-relaxed">{item.summary}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
