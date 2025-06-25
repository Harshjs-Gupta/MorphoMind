import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text leading-tight">
          Transform Your Ideas with
          <br />
          <span className="text-white">AI-Powered Creation</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the future of content creation with our advanced AI models.
          Generate stunning images, videos, and text with just a few clicks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup" className="btn-primary text-lg px-8 py-4">
            Start Creating Now
          </Link>
          <a
            href="#features"
            className="glass-card px-8 py-4 text-lg flex items-center justify-center"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
