import type { Metadata } from "next";
import { Exo_2, Lato } from "next/font/google";
import "./globals.css";
import ClientLayout from "./(components)/ClientLayout"; // Adjust path as needed
import GoogleAnalytics from "./(components)/GoogleAnalytics"; // Adjust path
import GoogleAd from "./(components)/GoogleAd"; // ✅ Your reusable Ad component

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://inventoglobal.com/favicon.ico"
          sizes="any"
        />
        <link rel="canonical" href="https://inventoglobal.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Invento Global" />
        <meta
          name="keywords"
          content="Invento Global, hardware exporters, fastener suppliers, Indian manufacturers, brass fittings, copper handicrafts"
        />

        {/* Google AdSense script - loaded once globally */}
        <meta name="google-adsense-account" content="ca-pub-8089707704088165" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8089707704088165"
          crossOrigin="anonymous"
        ></script>

        {/* Schema.org JSON-LD */}
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
        <GoogleAnalytics />
        <ClientLayout>
          {children}

          {/* Bottom ad only using component */}
          <div style={{ padding: "20px 0", textAlign: "center" }}>
            <GoogleAd />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
