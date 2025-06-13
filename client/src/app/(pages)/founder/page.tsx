import FounderMessage from "./FounderMessage";
import type { Metadata } from "next";

// ✅ Add metadata for SEO
export const metadata: Metadata = {
  title: "Founder – Invento Global | Merchant Exporters",
  description:
    "Meet the visionary behind Invento Global. Discover our founder’s mission, journey, and commitment to quality in exports.",
  keywords: [
    "Founder Invento Global",
    "Akhil Aggarwal",
    "Merchant Exporters",
    "Hand Tools Export India",
    "Vee Kay Enterprises",
  ],
};

export default function FounderPage() {
  return <FounderMessage />;
}
