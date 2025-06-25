import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-8 gradient-text">
          Ready to Start Creating?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Join thousands of creators who are already using MorphoMind to bring
          their ideas to life. Start your creative journey today.
        </p>
        <Link
          href="/signup"
          className="btn-primary text-lg px-8 py-4 inline-block"
        >
          Create Your Account
        </Link>
      </div>
    </section>
  );
}
