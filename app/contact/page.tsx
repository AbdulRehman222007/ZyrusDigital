import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact — Zyrus Agency",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16">
        <Reveal>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-8">
            Let&apos;s build something.
          </h1>
          <p className="text-lg text-caramel-brown leading-relaxed mb-10 max-w-md">
            Tell us what you&apos;re working on — we usually reply within a day.
          </p>

          <div className="space-y-4 text-lg">
            <div>
              <p className="text-xs uppercase tracking-widest text-caramel-brown mb-1">Email</p>
              <a href="mailto:hello@zyrusdigital.com" data-cursor-hover className="hover:text-caramel-brown transition-colors">
                hello@zyrusdigital.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-caramel-brown mb-1">Based in</p>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-caramel-brown mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-espresso transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-caramel-brown mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-espresso transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-caramel-brown mb-2">
                What do you need?
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-espresso transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="liquid-glass text-base text-espresso px-10 py-4 rounded-full transition-transform hover:scale-[1.03]"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </main>
  );
}
