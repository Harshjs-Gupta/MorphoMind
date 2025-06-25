import Link from "next/link";
import React from "react";

export default function CallToActionTwo() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="gradient-border p-8 text-center">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--foreground)] opacity-80 mb-8">
            Choose any of our generation tools and start creating amazing
            content today
          </p>
          <Link href="/text-to-image" className="btn-primary inline-block">
            Start Creating Now
          </Link>
        </div>
      </div>
    </div>
  );
}
