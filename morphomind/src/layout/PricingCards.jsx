import React from "react";
import { pricingPlans } from "@/constant/pricingPlans";

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingPlans.map((plan) => (
        <div key={plan.name} className="relative rounded-2xl p-8 glass-card">
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#f472b6] to-[#db2777] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}

          <div className="mb-8 ">
            <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
              {plan.name}
            </h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold gradient-text">
                {plan.price}
              </span>
              <span className="ml-2 text-lg text-[var(--foreground)] opacity-70">
                /{plan.period}
              </span>
            </div>
            <p className="mt-4 text-sm text-[var(--foreground)] opacity-70">
              {plan.description}
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center text-[var(--foreground)]"
              >
                <svg
                  className="h-5 w-5 mr-3 text-[#8b5cf6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
              plan.popular
                ? "btn-primary"
                : "bg-[rgba(255,255,255,0.1)] text-[var(--foreground)] hover:bg-[rgba(255,255,255,0.15)]"
            }`}
          >
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
