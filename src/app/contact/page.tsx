import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import ContactPage from "./contact-page";

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
  title: "Contact",
  description:
    "Book a discovery call with WOA Cocktails for luxury hospitality, mobile bar services, staffing, cocktails and curated activations.",
};

export default function Page() {
  return (
    <div className={`${outfit.variable} ${mono.variable}`}>
      <ContactPage />
    </div>
  );
}
