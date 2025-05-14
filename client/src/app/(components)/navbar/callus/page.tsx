// components/CallUsDropdown.tsx
"use client";
import { PhoneIcon } from "lucide-react";

interface CallUsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallUsDropdown: React.FC<CallUsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-5/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-full bg-white p-6 shadow-lg z-50">
      <div className="space-y-6">
        <button
          onClick={onClose}
          className="text-3xl text-black border-none bg-white"
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="lg:text-2xl text-xl font-semibold text-primary">
          Let&apos;s Connect
        </h3>
        <p className="lg:text-lg text-xs text-black">
          Whether you&apos;re curious about our services or ready to get
          started, we&apos;re here for you.
        </p>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-800">
            Talk to us today:
          </p>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-primary" />
            <a href="tel:+919417430218" className="text-primary no-underline">
              +91 94174 30218
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-primary" />
            <a href="tel:+916283948363" className="text-primary no-underline">
              +91 62839 48363
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
