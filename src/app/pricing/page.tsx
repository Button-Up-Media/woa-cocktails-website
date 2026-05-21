import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import PricingPage from "./pricing-page";

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
  title: "Packages & Pricing",
  description:
    "WOA Cocktails pricing — starting points for mobile bar, staffing and mixology class services. Custom-quoted per event.",
};

export default function Page() {
  return (
    <div className={`${outfit.variable} ${mono.variable}`}>
      <PricingPage />
    </div>
  );
}
