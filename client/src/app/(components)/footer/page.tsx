import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F6] text-black py-2 lg:py-12 mt-5">
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 items-start">
          {/* About Section */}
          <div className="space-y-3 lg:space-y-4 col-span-1">
            <h3 className="text-sm lg:text-2xl font-semibold text-primary">
              About Us
            </h3>
            <p className="text-xs lg:text-base">
              We deliver innovative, reliable solutions tailored to your needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3 lg:space-y-4 text-left col-span-1">
            <h3 className="text-sm lg:text-2xl font-semibold text-primary">
              Quick Links
            </h3>
            <ul className="list-none space-y-2 !ml-0 !pl-0 text-xs lg:text-base">
              <li>
                <Link
                  href="/"
                  className="no-underline hover:text-hoverprimary text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="no-underline hover:text-hoverprimary text-black"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/founder"
                  className="no-underline hover:text-hoverprimary text-black"
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="no-underline hover:text-hoverprimary text-black"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="no-underline hover:text-hoverprimary text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-3 lg:space-y-4 col-span-1 mt-6 sm:mt-0">
            <h3 className="text-sm lg:text-2xl font-semibold text-primary">
              Contact Us
            </h3>
            <p className="text-xs">
              Vee Kay Enterprises E-183, New Focal Point Mehta Road Amritsar,
              Punjab – 143501
            </p>
            <p className="text-xs">Phone: +91 94174 30218,+91 62839 48363</p>
            <p className="text-xs">Email: export@inventoglobal.com</p>
          </div>

          {/* Social Media Section */}
          <div className="space-y-3 lg:space-y-4 col-span-1 mt-6 sm:mt-0">
            <h3 className="text-sm lg:text-2xl font-semibold text-primary">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-xs lg:text-xl">
              <Link
                href="https://www.facebook.com/share/16VcFZ8eLM/?mibextid=wwXIfr"
                className="text-primary hover:text-hoverprimary"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com/inventoglobal"
                className="text-primary hover:text-hoverprimary"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/in/inventoscrews?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="text-primary hover:text-hoverprimary"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://www.instagram.com/inventoglobal?igsh=eTd6b2U0bzltam0%3D&utm_source=qr"
                className="text-primary hover:text-hoverprimary"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.youtube.com/@inventoglobal"
                className="text-primary hover:text-hoverprimary"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-5 lg:mt-12 border-t border-[#FF6F61] pt-4 text-center text-xs lg:text-sm">
          <p>&copy; 2025 Vee Kay Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
