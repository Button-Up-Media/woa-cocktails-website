import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import StaffingPage from "./staffing-page";

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
  title: "Staffing",
  description:
    "WOA places experienced bartenders, hosts, captains and event leads for luxury hospitality events in New York and Miami.",
};

export default function Page() {
  return (
    <div className={`${outfit.variable} ${mono.variable}`}>
      <StaffingPage />
    </div>
  );
}
