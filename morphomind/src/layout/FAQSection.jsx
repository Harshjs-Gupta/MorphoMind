import { questions } from "@/constant/frequentlyQuestion";
import React from "react";

export default function FAQSection() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-12 gradient-text">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {questions.map((faq) => (
          <div key={faq.id} className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
              {faq.question}
            </h3>
            <p className="text-[var(--foreground)] opacity-70">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
