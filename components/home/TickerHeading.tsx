export default function TickerHeading() {
  const line = "We build brands that outlast the trend   ";

  return (
    <section className="border-y border-espresso/10 py-10 overflow-hidden">
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
