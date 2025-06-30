import FounderMessage from "./FounderMessage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invento Founder – Akhil Aggarwal | Invento by Vee Kay Enterprises",
  description:
    "Meet Akhil Aggarwal, the visionary founder of Invento by Vee Kay Enterprises. Discover the journey behind premium Invento screws, fasteners, brass hardware, and copper products trusted worldwide.",
  alternates: {
    canonical: "https://inventoglobal.com/founder",
  },
  openGraph: {
    title: "Invento Founder – Akhil Aggarwal | Invento by Vee Kay Enterprises",
    description:
      "Meet Akhil Aggarwal, founder of Invento by Vee Kay Enterprises. Learn about our mission to deliver Invento screws, fasteners, and quality hardware globally.",
    url: "https://inventoglobal.com/founder",
    siteName: "Invento Global",
    type: "website",
    images: [
      {
        url: "https://www.inventoglobal.com/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Invento Founder – Akhil Aggarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invento Founder – Akhil Aggarwal | Invento by Vee Kay Enterprises",
    description:
      "Meet Akhil Aggarwal, the visionary founder of Invento by Vee Kay Enterprises. Learn about the journey behind Invento screws and quality hardware exports.",
    images: ["https://www.inventoglobal.com/cover.jpg"],
  },
  robots: "index, follow",
};

export default function FounderPage() {
  return <FounderMessage />;
}
