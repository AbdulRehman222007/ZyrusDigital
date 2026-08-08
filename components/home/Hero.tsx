import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-oat-cream/42 z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 max-w-[1400px] mx-auto">
        <h1
          className="reveal-gate font-display font-normal text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-1.5px] max-w-[1100px] text-espresso"
        >
          Creative <em className="not-italic text-caramel-brown">minds.</em>{" "}
          <em className="not-italic text-caramel-brown">Strategic impact.</em>
        </h1>

        <p
          className="reveal-gate text-caramel-brown text-base sm:text-lg max-w-xl mt-8 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          We&apos;re a digital agency building web experiences, brand content, and visual
          identity for businesses that want to stand out. Web development, social media,
          video, and design under one roof.
        </p>

        <Link
          href="/contact"
          data-cursor-hover
          className="reveal-gate liquid-glass text-base text-espresso px-14 py-5 rounded-full mt-12 inline-block transition-transform hover:scale-[1.03] border-2 border-rust hover:bg-rust hover:text-oat-cream"
          style={{ animationDelay: "0.4s" }}
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}
