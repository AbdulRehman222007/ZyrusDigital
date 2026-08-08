import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Zyrus Agency",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-20">
        <Reveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] max-w-3xl mb-8">
            A small agency, built to move like one.
          </h1>
          <p className="text-lg md:text-xl text-caramel-brown max-w-2xl leading-relaxed">
            Zyrus is based in Karachi, working with clients across Pakistan and the GCC.
            We keep teams small on purpose — fewer handoffs, faster turnarounds, and one
            point of contact who actually knows your project.
          </p>
        </Reveal>
      </div>

      <div className="bg-espresso text-oat-cream py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-10">
          <Reveal>
            <h3 className="text-xs uppercase tracking-widest text-sand-beige mb-3">Approach</h3>
            <p className="text-lg leading-relaxed">
              Clear scope, honest timelines, and work that&apos;s judged by whether it
              performs — not just how it looks in a pitch deck.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-xs uppercase tracking-widest text-sand-beige mb-3">Structure</h3>
            <p className="text-lg leading-relaxed">
              One team across web, social, video, and design — so nothing gets lost
              between departments that don&apos;t talk to each other.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="text-xs uppercase tracking-widest text-sand-beige mb-3">Standards</h3>
            <p className="text-lg leading-relaxed">
              If it wouldn&apos;t make our own portfolio, it doesn&apos;t go out under
              your name either.
            </p>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
