import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import ClassesPage from "./classes-page";

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
  title: "Mixology Private Classes",
  description:
    "WOA's private mixology classes for birthdays, team-building, offsites and intimate gatherings across New York and Miami.",
};

export default function Page() {
  return (
    <div className={`${outfit.variable} ${mono.variable}`}>
      <ClassesPage />
    </div>
  );
}
