"use client";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PhoneIcon, X } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import GoogleTranslate from "./translate/page";
import CallUsDropdown from "./callus/page";

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

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);

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
            { pageLanguage: "en" },
            "google_translate_element"
          );
        }
      };
    };

    if (typeof window !== "undefined" && !window.googleTranslateElementInit) {
      addGoogleTranslateScript();
    }
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#FAF9F6] shadow-lg">
      <div className="flex lg:justify-between items-center px-4 py-2 lg:px-6">
        {/* Hamburger Icon */}
        <div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black lg:p-1 p-0 lg:pr-0 pr-4 border-none bg-[#FAF9F6]"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 lg:w-7 lg:h-7" />
            ) : (
              <RxHamburgerMenu className="w-5 h-5 lg:w-6 lg:h-6" />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2 ml-0 lg:ml-60 lg:mr-0 mr-[90px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={80}
              className="cursor-pointer lg:w-[85px] lg:h-full w-[50px] h-[50px]"
            />
          </Link>
        </div>

        {/* Call Us Button + Translate */}
        <div className="flex items-center justify-end space-x-2 lg:space-x-4">
          <GoogleTranslate />
          <div className="relative">
            <button
              onClick={() => setIsCallDropdownOpen(!isCallDropdownOpen)}
              className="bg-[#FAF9F6] font-lato border-none lg:text-lg text-sm font-semibold text-text p-2 rounded-lg"
            >
              Call Us
            </button>

            <CallUsDropdown
              isOpen={isCallDropdownOpen}
              onClose={() => setIsCallDropdownOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-5/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-full bg-white p-6 z-50">
          <div className="space-y-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-black bg-white border-none"
            >
              &times;
            </button>
            <ul className="text-black list-none p-0">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Company Overview", href: "/founder" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex justify-between items-center py-2 px-6 md:px-12 text-lg no-underline focus:outline-none text-black hover:text-hoverprimary"
                  >
                    <span className="lg:text-xl text-sm">{item.name}</span>
                    <FiChevronRight className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200 text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Custom CSS for the Google Translate Dropdown */}
      <style jsx>{`
        #google_translate_element select {
          font-size: 0.875rem !important;
          padding: 0.25rem !important;
          height: auto !important;
          max-width: 140px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
