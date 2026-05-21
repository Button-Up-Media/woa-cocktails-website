import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import AboutConstellation from "./about-constellation";
import styles from "./about.module.css";

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
  title: "About",
  description:
    "The WOA story — founders, markets, origin, and philosophy rendered as a floating constellation of moments.",
};

export default function AboutPage() {
  return (
    <main className={`${outfit.variable} ${mono.variable} ${styles.page}`}>
      <AboutConstellation />
    </main>
  );
}
