import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import HomePage from "./home/home-page";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "WOA Cocktails | Luxury Hospitality & Beverage House",
  description:
    "WOA is a luxury hospitality and beverage house creating elevated mobile bar experiences, cocktail programs and curated activations across New York and Miami.",
  metadataBase: new URL("https://www.woacocktails.com"),
};

export default function Page() {
  return (
    <div className={`${outfit.variable} ${mono.variable}`}>
      <HomePage />
    </div>
  );
}
