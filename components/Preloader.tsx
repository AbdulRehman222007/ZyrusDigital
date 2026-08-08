"use client";

import { useEffect, useRef, useState } from "react";

const GREETINGS = [
  "Hello", "Bonjour", "Hola", "Hallo", "Ciao", "Olá", "Hej", "Merhaba",
  "سلام", "مرحبا", "नमस्ते", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "こんにちは", "안녕하세요", "你好",
];

export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [greeting, setGreeting] = useState(GREETINGS[0]);
  const [fade, setFade] = useState(false);
  const [hide, setHide] = useState(false);
  const [display, setDisplay] = useState(true);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    // Skip preloader after first visit in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("zyrus_loaded")) {
      setDisplay(false);
      document.documentElement.classList.add("preloader-done");
      onDone?.();
      return;
    }
    if (typeof window !== "undefined") {
      sessionStorage.setItem("zyrus_loaded", "true");
    }

    document.body.style.overflow = "hidden";
    let index = 0;

    const interval = setInterval(() => {
      if (index >= GREETINGS.length - 1) {
        clearInterval(interval);
        return;
      }
      setFade(true);
      setTimeout(() => {
        index++;
        setGreeting(GREETINGS[index]);
        setFade(false);
      }, 120);
    }, 220);

    const swipeTimer = setTimeout(() => {
      clearInterval(interval);
      setHide(true);
      document.documentElement.classList.add("preloader-done");
      onDone?.();
    }, 2000);

    const removeTimer = setTimeout(() => {
      setDisplay(false);
      document.body.style.overflow = "auto";
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(swipeTimer);
      clearTimeout(removeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!display) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-deep transition-transform duration-[1150ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
      style={{ transform: hide ? "translateY(-100%)" : "translateY(0%)" }}
    >
      <div
        className="font-display text-oat-cream text-[clamp(2.5rem,7vw,5rem)] font-normal tracking-wide transition-all duration-200 ease-out"
        style={{
          opacity: fade ? 0 : 1,
          transform: fade ? "translateY(10px)" : "translateY(0)",
        }}
      >
        {greeting}
      </div>
    </div>
  );
}
