import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service ? `${service.name} — Zyrus Agency` : "Zyrus Agency" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-caramel-brown mb-4">Service</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] max-w-4xl mb-8">
            {service.name}
          </h1>
          <p className="text-lg md:text-xl text-caramel-brown max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </Reveal>
      </section>

      <section className="bg-espresso text-oat-cream py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-10">What&apos;s included</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.offerings.map((o, i) => (
              <Reveal key={o} delay={i * 0.06}>
                <div className="border-t border-oat-cream/20 pt-4">
                  <span className="text-xs text-sand-beige">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-lg">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Ready to start?</h2>
          <Link
            href="/contact"
            data-cursor-hover
            className="liquid-glass inline-block text-base text-espresso px-10 py-4 rounded-full transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-espresso/10">
        {otherServices.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            data-cursor-hover
            className="group flex items-center justify-between max-w-[1400px] mx-auto px-6 md:px-8 py-8 border-b border-espresso/10 hover:bg-sand-beige/15 transition-colors"
          >
            <h3 className="font-display text-2xl md:text-3xl">{s.name}</h3>
            <span className="hidden md:inline-flex w-10 h-10 rounded-full border border-espresso/20 items-center justify-center group-hover:bg-espresso group-hover:text-oat-cream transition-colors">
              →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
