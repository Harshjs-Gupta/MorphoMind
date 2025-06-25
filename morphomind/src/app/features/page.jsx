import React from "react";
import BenefitsSection from "@/layout/BenefitsSection";
import CallToActionTwo from "@/layout/CallToActionTwo";
import ToolsSelectionSection from "@/layout/ToolsSelectionSection";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-30 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text leading-tight">
            Our Generation Tools
            <br />
            <span className="text-white">Features</span>
          </h1>
          <p className="text-xl text-[var(--foreground)] opacity-70">
            Choose the perfect tool for your creative needs
          </p>
        </div>
        <ToolsSelectionSection />
      </div>
      <BenefitsSection />
      <CallToActionTwo />
    </div>
  );
}
