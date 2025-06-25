import React from "react";
import { FaImage, FaVideo, FaPen } from "react-icons/fa";
import { featuresSectionData } from "@/constant/featuresSectionData";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Powerful AI Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Features */}
          {featuresSectionData.map((fea) => (
            <div className="glass-card p-8" key={fea.id}>
              <div className="feature-icon text-2xl">{fea.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                {fea.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">{fea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
