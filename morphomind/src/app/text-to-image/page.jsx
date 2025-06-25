"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PageDropdown from "@/components/PageDropdown";

export default function TextToImagePage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    if (image) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [image]);

  const generateImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }
      setImage({ image: data.imageUrl, description: prompt });
      setPrompt("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
      {/* Top Navigation */}
      <div className="fixed top-18 right-0 p-6 z-50">
        <PageDropdown />
      </div>
      {/* Main Content */}
      <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text leading-tight">
              AI Image Generator
            </h1>
            <p className="text-xl text-[var(--foreground)] opacity-70 max-w-2xl mx-auto">
              Transform your imagination into stunning visuals with our advanced
              AI technology
            </p>
            {image && (
              <div className="mt-8 space-y-10">
                <div className="gradient-border">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[rgba(255,255,255,0.05)] group">
                    <Image
                      src={image.image}
                      alt={`Generated image`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div ref={endRef} />
              </div>
            )}
            <form onSubmit={generateImage} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="prompt"
                  className="text-lg font-medium text-[var(--foreground)]"
                >
                  Enter your prompt
                </label>
                <div className="relative">
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the image you want to generate... (e.g., 'A serene landscape with mountains and a lake at sunset')"
                    className="w-full p-4 rounded-lg border border-white/10 bg-[rgba(255,255,255,0.05)] text-[var(--foreground)] min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] transition-all"
                    required
                    maxLength={500}
                  />
                  <div className="absolute bottom-3 right-3 text-sm text-[var(--foreground)] opacity-50">
                    {prompt.length}/500
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !prompt}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200
                  ${
                    loading || !prompt
                      ? "bg-[rgba(255,255,255,0.1)] cursor-not-allowed"
                      : "btn-primary"
                  }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating your masterpiece...</span>
                  </div>
                ) : (
                  "Generate Image"
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-[rgba(220,38,38,0.1)] text-red-400 rounded-lg border border-red-500/20 flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
