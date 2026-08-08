export default function TickerHeading() {
  const phrase = "We build brands that outlast the trend";

  return (
    <section className="border-y border-espresso/10 py-10 overflow-hidden">
      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-flex items-center animate-ticker">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-espresso">
                {phrase}
              </span>
              <span className="mx-8 md:mx-10 text-sand-beige text-[clamp(2rem,5vw,3.5rem)]">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
