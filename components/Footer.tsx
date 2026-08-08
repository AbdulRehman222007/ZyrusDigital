import Link from "next/link";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-oat-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-24 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-3xl mb-4">ZYRUS</div>
            <p className="text-sm text-sand-beige leading-relaxed max-w-[220px]">
              Creative minds. Strategic impact.
            </p>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-sand-beige mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>Karachi, Pakistan</li>
              <li>
                <a href="mailto:hello@zyrusdigital.com" data-cursor-hover className="hover:text-sand-beige transition-colors">
                  hello@zyrusdigital.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-sand-beige mb-4">Pages</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" data-cursor-hover className="hover:text-sand-beige transition-colors">Home</Link></li>
              <li><Link href="/work" data-cursor-hover className="hover:text-sand-beige transition-colors">Work / Portfolio</Link></li>
              <li><Link href="/about" data-cursor-hover className="hover:text-sand-beige transition-colors">About</Link></li>
              <li><Link href="/contact" data-cursor-hover className="hover:text-sand-beige transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-sand-beige mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} data-cursor-hover className="hover:text-sand-beige transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          data-cursor-hover
          className="group flex items-center justify-between border-t border-oat-cream/15 pt-8 pb-8"
        >
          <span className="font-display text-4xl md:text-6xl group-hover:text-sand-beige transition-colors">
            Let&apos;s build something
          </span>
          <span className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-oat-cream/30 group-hover:bg-oat-cream group-hover:text-espresso transition-colors shrink-0">
            →
          </span>
        </Link>

        <div className="flex flex-col sm:flex-row justify-between gap-2 pt-6 text-xs text-sand-beige/70">
          <span>All rights reserved {new Date().getFullYear()} © Zyrus Agency</span>
          <div className="flex gap-6">
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
