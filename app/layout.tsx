import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Loaded via <link> in <head> below rather than next/font/google, since
// next/font requires build-time network access to fonts.googleapis.com
// which isn't available in every build environment (e.g. sandboxed CI).
// Swap to next/font/google locally if you prefer build-time self-hosting.

export const metadata: Metadata = {
  title: "Zyrus Agency — Creative minds. Strategic impact.",
  description:
    "Zyrus is a digital agency building web experiences, brand content, and visual identity. Web development, social media, video, and design — under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-oat-cream text-espresso">
        <Preloader />
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
