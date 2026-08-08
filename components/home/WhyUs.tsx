import Reveal from "@/components/Reveal";

export default function WhyUs() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-espresso/10">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl mb-6">Why Zyrus</h2>
        <p className="text-lg md:text-2xl leading-relaxed max-w-3xl text-caramel-brown">
          We work as a direct extension of your team, not a vendor at arm&apos;s length.
          One point of contact, clear timelines, and everything from the first wireframe
          to the final reel handled under one roof. No handoffs between five different
          freelancers. No run-of-the-mill output. Just work that holds up.
        </p>
      </Reveal>
    </section>
  );
}
