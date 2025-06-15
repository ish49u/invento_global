"use client";

import GoogleAd from "./GoogleAd";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="my-4">
        <GoogleAd />
      </div>

      {children}

      <div className="my-4">
        <GoogleAd />
      </div>
      <Footer />
    </>
  );
}
