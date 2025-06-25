import Link from "next/link";
import React from "react";
import { features } from "@/constant/features";

export default function ToolsSelectionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Link
          href={feature.href}
          key={index}
          className="transform transition-all duration-300 hover:scale-105"
        >
          <div className="glass-card p-6 h-full">
            <div className="feature-icon text-2xl">{feature.icon}</div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-2">
              {feature.title}
            </h2>
            <p className="text-[var(--foreground)] opacity-70 mb-4">
              {feature.description}
            </p>
            <ul className="space-y-2">
              {feature.benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="text-[var(--foreground)] opacity-80 flex items-center"
                >
                  <span className="text-[#10b981] mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
