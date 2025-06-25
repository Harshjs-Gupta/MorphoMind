import React from "react";
import { benefits } from "@/constant/benefits";

export default function BenefitsSection() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-[var(--foreground)] opacity-70">
            Experience the advantages of our AI-powered generation tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card text-center p-6">
              <div className="feature-icon text-2xl mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[var(--foreground)] opacity-70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
