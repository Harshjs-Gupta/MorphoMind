"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationOptions = [
  { name: "Text to Image", path: "/text-to-image", icon: "🎨" },
  { name: "Text to Video", path: "/text-to-video", icon: "🎥" },
  { name: "Image to Image", path: "/image-to-image", icon: "🖼️" },
  { name: "Text Generator", path: "/text-generator", icon: "✍️" },
];

export default function PageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] text-[var(--foreground)] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200"
      >
        <span>AI Tools</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/10 shadow-lg z-50 overflow-hidden">
          {navigationOptions.map((option) => (
            <Link
              key={option.path}
              href={option.path}
              className={`flex items-center space-x-3 px-4 py-3 text-[var(--foreground)] hover:bg-[rgba(255,255,255,0.1)] transition-colors ${
                pathname === option.path ? "bg-[rgba(255,255,255,0.1)]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl">{option.icon}</span>
              <span>{option.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
