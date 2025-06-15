import type { Metadata } from "next";
import { Exo_2, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar/page";
import Footer from "./(components)/footer/page";
import { useEffect } from "react";

// Extend the window type
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// Fonts setup
const exo2 = Exo_2({
  variable: "--font-exo",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invento Global – Hardware & Fastener Exporters",
  description:
    "Merchant Exporters, Manufacturers and Suppliers of Hardware, Hand Tools, Fasteners, Screws, Copper Handicrafts and more.",
  openGraph: {
    title: "Invento Global",
    description:
      "Leading manufacturers and exporters of quality hardware products.",
    url: "https://inventoglobal.com",
    siteName: "Invento Global",
    images: [
      {
        url: "https://inventoglobal.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// GoogleAd component inside layout
function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8089707704088165"
      data-ad-slot="4478207538"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

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
          href="https://inventoglobal.com/favicon.ico"
          sizes="any"
        />

        {/* ✅ Google AdSense verification meta tag */}
        <meta name="google-adsense-account" content="ca-pub-8089707704088165" />
        {/* ✅ Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8089707704088165"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Schema JSON-LD */}
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
              logo: "https://inventoglobal.com/logo.png",
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

        {/* ✅ Ad below Navbar */}
        <div className="my-4">
          <GoogleAd />
        </div>

        {children}

        {/* ✅ Ad above Footer */}
        <div className="my-4">
          <GoogleAd />
        </div>

        <Footer />
      </body>
    </html>
  );
}
