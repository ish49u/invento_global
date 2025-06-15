import type { Metadata } from "next";
import { Exo_2, Lato } from "next/font/google";
import "./globals.css";
import ClientLayout from "./(components)/ClientLayout"; // Adjust path as needed

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
        <meta name="google-adsense-account" content="ca-pub-8089707704088165" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8089707704088165"
          crossOrigin="anonymous"
        ></script>
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
