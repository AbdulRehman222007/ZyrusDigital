export default function TickerHeading() {
  const words = ["premium", "considered", "built to last", "built to convert"];
  const line = "We build brands that outlast the trend — ";

  return (
    <section className="border-y border-espresso/10 py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-6 flex gap-6 text-xs uppercase tracking-widest text-caramel-brown">
        {words.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>

      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-flex animate-ticker">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-none pr-8 text-espresso"
            >
              {line.repeat(3)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
