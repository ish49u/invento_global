"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function GoogleAd() {
  const adRef = useRef<HTMLDivElement>(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    const checkAndLoadAd = () => {
      const container = adRef.current;

      if (!container) return;

      const width = container.offsetWidth;

      if (width === 0) {
        // Retry after short delay if no width available yet
        setTimeout(checkAndLoadAd, 300);
        return;
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});

        // Detect if ad iframe appears after loading
        setTimeout(() => {
          const iframe = container.querySelector("iframe");
          if (iframe) {
            setIsAdLoaded(true);
          } else {
            setIsAdLoaded(false);
          }
        }, 1000);
      } catch (e) {
        console.error("AdSense error:", e);
        setIsAdLoaded(false);
      }
    };

    if (typeof window !== "undefined") {
      checkAndLoadAd();
    }
  }, []);

  return (
    <div
      ref={adRef}
      style={{ display: isAdLoaded ? "block" : "none", textAlign: "center" }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8089707704088165"
        data-ad-slot="4478207538"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
