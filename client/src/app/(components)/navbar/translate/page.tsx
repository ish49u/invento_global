"use client";
import { useEffect } from "react";

// Define the type for google.translate.TranslateElement constructor
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: number;
            multilanguagePage?: boolean;
          },
          elementId: string
        ) => HTMLElement | void;
      };
    };
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (
          window.google &&
          window.google.translate &&
          window.google.translate.TranslateElement
        ) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
            },
            "google_translate_element"
          );
        }
      };
    };

    if (typeof window !== "undefined" && !window.googleTranslateElementInit) {
      addGoogleTranslateScript();
    }

    // Hide the "Powered by Google Translate" text and customize dropdown
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-combo {
        width: 200px;
        border: 2px solid #333 !important;
        border-radius: 5px;
        padding: 4px;
        font-size: 12px;
        color: #000 !important;
        background-color: #fff !important;
      }

        .goog-te-gadget,
    .goog-te-gadget span,
    .VIpgJd-ZVi9od-l4eHX-hSRGPd,
    .VIpgJd-ZVi9od-l4eHX-hSRGPd a {
      font-size: 0px !important;
    }
  }

      .VIpgJd-ZVi9od-l4eHX-hSRGPd,
      .VIpgJd-ZVi9od-l4eHX-hSRGPd a {
        display: flex !important;
        flex-direction: row !important;
        font-size: 10px !important;
        margin-top: -19px !important;
        margin-left: 60px !important;
        color: #555 !important;
      }

      .VIpgJd-ZVi9od-l4eHX-hSRGPd img {
       display:none;
      }

           @media (max-width: 600px) {
        .goog-te-combo {
          width: 90px !important; /* Make the width 50% on mobile screens */
          font-size: 9px !important;
          margin-left: 40px;
          border: 2px solid #333 !important;
          color: #000 !important;
           background-color: #fff !important;
          padding:3px 0px 3px 0px; /* Adjust left margin for better positioning */
        }

        #google_translate_element {
        width:85px;
        }

.goog-te-combo option {
  font-size: 6px !important;
  padding: 2px 2px !important;
  line-height: 0.4 !important;
  height: 30px !important;
}

        .VIpgJd-ZVi9od-l4eHX-hSRGPd,
        .VIpgJd-ZVi9od-l4eHX-hSRGPd a {
           display: flex !important;
        flex-direction: row !important;
        font-size: 3px !important;
        margin-top: -19px !important;
        margin-left: 60px !important;
        color: #555 !important;
        }


  .goog-te-gadget,
    .goog-te-gadget span,
    .VIpgJd-ZVi9od-l4eHX-hSRGPd,
    .VIpgJd-ZVi9od-l4eHX-hSRGPd a {
      font-size: 0px !important;
    }
  }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="text-sm"
      style={{
        marginLeft: "10px",
        marginTop: "20px",
      }}
    ></div>
  );
};

export default GoogleTranslate;
