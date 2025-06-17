import FounderMessage from "./FounderMessage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invento Global Founder – Akhil Aggarwal | Merchant Exporters",
  description:
    "Meet the visionary behind Invento Global. Discover our founder’s mission, journey, and commitment to quality in exports.",
  alternates: {
    canonical: "https://inventoglobal.com/founder",
  },
  openGraph: {
    title: "Founder – Invento Global | Merchant Exporters",
    description:
      "Meet the visionary behind Invento Global. Discover our founder’s mission, journey, and commitment to quality in exports.",
    url: "https://inventoglobal.com/founder",
    siteName: "Invento Global",
    type: "website",
  },
};

export default function FounderPage() {
  return <FounderMessage />;
}
