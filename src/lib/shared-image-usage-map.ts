export type ImageUsageGroup = {
  label: string;
  description: string;
  assets: string[];
};

export const sharedImageUsageMap: ImageUsageGroup[] = [
  {
    label: "Brand",
    description: "Identity and platform assets used across the app shell.",
    assets: [
      "public/reference-assets/current-site/brand/brand-01-favicon.ico",
      "public/reference-assets/current-site/brand/brand-02-untitled-design-64.png",
    ],
  },
  {
    label: "Home",
    description: "Homepage images for the hero, story, and supporting sections.",
    assets: [
      "public/reference-assets/current-site/home/home-01-597a1705-1.jpg",
      "public/reference-assets/current-site/home/home-02-597a2158-1.jpg",
      "public/reference-assets/current-site/home/home-03-597a1755-2.jpg",
      "public/reference-assets/current-site/home/home-04-597a1974-1.jpg",
      "public/reference-assets/current-site/home/home-05-597a1832-3.jpg",
    ],
  },
  {
    label: "Services",
    description: "Service page imagery and shared event support shots.",
    assets: [
      "public/reference-assets/current-site/services/services-01-img_5855.jpeg",
      "public/reference-assets/current-site/services/services-03-597a2018-1-(1).jpg",
      "public/reference-assets/current-site/shared/shared-01-597a9396-1.jpg",
    ],
  },
  {
    label: "About and contact",
    description: "Founders, inquiry, and contact page imagery.",
    assets: [
      "public/reference-assets/current-site/about/about-01-597a1622-1.jpg",
      "public/reference-assets/current-site/about/about-02-597a2161-1.jpg",
      "public/reference-assets/current-site/about/about-03-597a1871-2.jpg",
      "public/reference-assets/current-site/contact/contact-01-597a1853-2.jpg",
    ],
  },
  {
    label: "Classes",
    description: "Mixology class imagery and supporting instructional visuals.",
    assets: [
      "public/reference-assets/current-site/classes/classes-01-img_5889.jpeg",
      "public/reference-assets/current-site/events/ink-cocktail-class/events-ink-cocktail-class-01-screen-shot-2024-03-16-at-11.53.53-am.png",
      "public/reference-assets/current-site/events/ink-cocktail-class/events-ink-cocktail-class-02-screen-shot-2024-03-16-at-11.54.07-am.png",
      "public/reference-assets/current-site/events/ink-cocktail-class/events-ink-cocktail-class-03-screen-shot-2024-03-16-at-11.54.17-am.png",
    ],
  },
  {
    label: "Events",
    description: "Gallery and event-story assets for future portfolio pages.",
    assets: [
      "public/reference-assets/current-site/events/index/events-index-01-597a9346-1.jpg",
      "public/reference-assets/current-site/events/index/events-index-02-597a1849-enhanced-nr-1.jpg",
      "public/reference-assets/current-site/events/index/events-index-03-img_5841.jpeg",
      "public/reference-assets/current-site/events/style-bender/events-style-bender-01-597a1849-enhanced-nr-1.jpg",
      "public/reference-assets/current-site/events/summer-party/events-summer-party-01-597a9340-1.jpg",
    ],
  },
  {
    label: "Missing original asset",
    description:
      "Live-site homepage image block that still needs a second extraction pass.",
    assets: [
      "Squarespace CDN: /content/v1/65f4ac853dd9573b28fc9a4f/28b424e8-013d-4601-95f4-4e01479477ee/Untitled+design+%2862%29.png",
    ],
  },
];
