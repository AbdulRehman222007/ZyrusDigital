import Reveal from "@/components/Reveal";

export default function Intro() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 md:py-32">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl mb-6">This is Zyrus</h2>
        <p className="text-lg md:text-2xl leading-relaxed max-w-4xl text-caramel-brown">
          Karachi-built, detail-driven, and direct. We&apos;re a digital agency working
          across web development, social media management, video editing, and graphic
          design for brands that want their online presence to actually convert, not
          just look good. Clear scope, clean execution, no filler. This is Zyrus Agency.
        </p>
      </Reveal>
    </section>
  );
}
