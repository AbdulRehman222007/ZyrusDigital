export type Service = {
  slug: string;
  name: string;
  tagline: string;
  ticker: string;
  description: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Fast, custom-built sites that convert",
    ticker: "Shopify Development | WordPress Development | Performance | SEO  ",
    description:
      "We build fast, conversion-focused websites on Shopify and WordPress, custom-coded rather than templated. From product pages to checkout flows, every build is tuned for speed, clarity, and results.",
    offerings: [
      "Shopify store builds & custom Liquid sections",
      "WordPress & WooCommerce development",
      "Site speed & conversion optimization",
      "Ongoing maintenance & support",
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    tagline: "Content and strategy that builds an audience",
    ticker: "Strategy | Content Calendars | Instagram | TikTok | Growth ",
    description:
      "We plan, create, and manage social content that builds real audiences not just impressions. Strategy, content calendars, and community management, tailored to how your brand actually talks.",
    offerings: [
      "Content strategy & monthly calendars",
      "Instagram, TikTok & LinkedIn management",
      "Community management & engagement",
      "Performance reporting",
    ],
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    tagline: "Reels, ads, and brand video that hold attention",
    ticker: "Reels | Brand Films | Product | Video ",
    description:
      "From short-form reels to brand films, we edit video that holds attention in the first two seconds and keeps it. Pacing, sound design, and motion built for how people actually watch.",
    offerings: [
      "Short-form reels & TikTok edits",
      "Brand & product video",
      "Motion graphics & titles",
      "Sound design & color grading",
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    tagline: "Visual identity that holds together everywhere",
    ticker: "BrandingIdentity | Social Assets",
    description:
      "Logos, identity systems, packaging, and social assets designed to hold together as one visual language, not a pile of one-off graphics.",
    offerings: [
      "Brand identity & logo design",
      "Packaging & print design",
      "Social media asset systems",
      "Presentation & pitch deck design",
    ],
  },
];

export type WorkItem = {
  slug: string;
  name: string;
  category: string;
  summary: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "championshoes",
    name: "ChampionShoes",
    category: "Web Development",
    summary:
      "Full Shopify build with custom order tracking, shipping automation, and payment integration.",
  },
  {
    slug: "zilzohaib-textile",
    name: "Zilzohaib Textile",
    category: "Web Development",
    summary:
      "Complete Shopify store build for a textile business, from proposal through launch.",
  },
  {
    slug: "swrv-attire",
    name: "SWRV Attire",
    category: "Web Development & Social Media",
    summary:
      "Brand identity, site built, and content system for a Karachi-based streetwear label.",
  },
];
