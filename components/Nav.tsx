"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-30 flex items-center justify-between px-6 md:px-8 py-6 max-w-[1400px] mx-auto">
      <Link href="/" className="font-display text-2xl md:text-3xl tracking-wide text-espresso" data-cursor-hover>
        ZYRUS
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        <li>
          <Link href="/" data-cursor-hover className={`text-sm transition-opacity hover:opacity-100 ${pathname === "/" ? "opacity-100" : "opacity-70"}`}>
            Home
          </Link>
        </li>
        <li className="relative group">
          <button data-cursor-hover className={`flex items-center gap-1.5 text-sm transition-opacity hover:opacity-100 ${pathname.startsWith("/services") ? "opacity-100" : "opacity-70"}`}>
            Services
            <span className="inline-block w-1.5 h-1.5 border-r-[1.5px] border-b-[1.5px] border-current rotate-45 -mt-1 transition-transform group-hover:rotate-[225deg] group-hover:mt-1" />
          </button>
          <ul className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 translate-y-2 min-w-[240px] bg-oat-cream/90 backdrop-blur-md border border-espresso/10 rounded-2xl p-2 list-none opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 shadow-[0_12px_30px_rgba(51,36,31,0.12)]">
            <li><Link href="/services" data-cursor-hover className="block px-3.5 py-2.5 rounded-lg text-sm opacity-80 hover:opacity-100 hover:bg-espresso/5 whitespace-nowrap">All Services</Link></li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} data-cursor-hover className="block px-3.5 py-2.5 rounded-lg text-sm opacity-80 hover:opacity-100 hover:bg-espresso/5 whitespace-nowrap">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li><Link href="/work" data-cursor-hover className={`text-sm transition-opacity hover:opacity-100 ${pathname === "/work" ? "opacity-100" : "opacity-70"}`}>Work</Link></li>
        <li><Link href="/about" data-cursor-hover className={`text-sm transition-opacity hover:opacity-100 ${pathname === "/about" ? "opacity-100" : "opacity-70"}`}>About</Link></li>
        <li><Link href="/contact" data-cursor-hover className={`text-sm transition-opacity hover:opacity-100 ${pathname === "/contact" ? "opacity-100" : "opacity-70"}`}>Contact</Link></li>
      </ul>

      <Link href="/contact" data-cursor-hover className="liquid-glass text-sm text-espresso px-6 py-2.5 rounded-full transition-transform hover:scale-[1.03] hidden md:inline-block">
        Start a Project
      </Link>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-40"
      >
        <span className={`block h-[1.5px] bg-espresso transition-transform ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
        <span className={`block h-[1.5px] bg-espresso transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[1.5px] bg-espresso transition-transform ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
      </button>

      {open && (
        <div className="fixed inset-0 z-30 bg-oat-cream flex flex-col items-center justify-center gap-8 md:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="font-display text-3xl">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="font-display text-3xl">Services</Link>
          <Link href="/work" onClick={() => setOpen(false)} className="font-display text-3xl">Portfolio</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="font-display text-3xl">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="font-display text-3xl">Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="liquid-glass text-base text-espresso px-10 py-4 rounded-full mt-4 border-2 border-rust">
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
