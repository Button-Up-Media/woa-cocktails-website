import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import MobileBarPage from "./mobile-bar-page";

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
  title: "Mobile Bar",
  description:
    "WOA's flagship mobile bar experience: a cinematic service page for luxury events, weddings, brand activations and Soho House-style hospitality moments.",
};

export default function Page() {
  return (
    <div className={`${outfit.variable} ${mono.variable}`}>
      <MobileBarPage />
    </div>
  );
}
