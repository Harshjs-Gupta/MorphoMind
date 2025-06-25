import FAQSection from "@/layout/FAQSection";
import PricingCards from "@/layout/PricingCards";
import React from "react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4 gradient-text">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-[var(--foreground)] opacity-70 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>
        <PricingCards />
        <FAQSection />
      </div>
    </div>
  );
}
