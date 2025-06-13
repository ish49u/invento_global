import type { Metadata } from "next";
import { Exo_2, Lato } from "next/font/google"; // Change to Exo 2 and Lato imports
import "./globals.css";
import Navbar from "./(components)/navbar/page";
import Footer from "./(components)/footer/page";

// Define the font with variables and weights
const exo2 = Exo_2({
  variable: "--font-exo", // Custom variable for Exo 2 font
  weight: ["400", "600"], // Add the weights you want to use (normal and bold)
  subsets: ["latin"], // Subset for Latin characters
});

const lato = Lato({
  variable: "--font-lato", // Custom variable for Lato font
  weight: ["300", "400", "700"], // Add weights for Lato
  subsets: ["latin"], // Subset for Latin characters
});

export const metadata: Metadata = {
  title:
    "Invento Global | Merchant Exporters & Suppliers – Hardware, Tools, Handicrafts",
  description:
    "Merchant Exporters, Mfrs and Suppliers of Fasteners, Screws, Door & Window Hardware Products, Hand Tools, Copper Handicrafts, Handcrafted Bags and more – Trusted Globally.",
  keywords: [
    "Invento Global",
    "Hardware Exporter",
    "Fasteners Supplier",
    "Hand Tools India",
    "Copper Handicrafts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://inventoglobal.com/logo.png"
          sizes="any"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Invento Global",
              url: "https://inventoglobal.com",
              description:
                "Merchant Exporters, Manufacturers and Suppliers of Hardware, Hand Tools, Fasteners, Screws, Copper Handicrafts and more.",
              logo: "https://inventoglobal.com/logo.png", // replace with actual logo URL
              sameAs: [
                "https://www.linkedin.com/company/invento-global",
                "https://www.facebook.com/inventoglobal",
              ],
            }),
          }}
        />
      </head>
      <body className={`${exo2.variable} ${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
