"use client";
import PageDropdown from "@/components/PageDropdown";
import React, { useState } from "react";

export default function TextToVideoPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    };

    try {
      const res = await fetch("/api/text-to-video", options);
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError("Failed to generate video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-[var(--background)] flex flex-col items-center px-4">
      <div className="fixed top-18 right-0 p-6 z-50">
        <PageDropdown />
      </div>
      <h1 className="text-4xl font-extrabold mb-4 gradient-text text-center animate-fade-in">
        Text to Video Generator
      </h1>
      <p className="text-lg text-[var(--foreground)] mb-10 text-center max-w-2xl opacity-80 animate-fade-in">
        Turn your imagination into video! Enter a creative prompt and let our AI
        generate a video for you.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl glass-card flex flex-col gap-5 p-8 mb-8 shadow-xl animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <label className="font-semibold text-[var(--foreground)]">
          Enter your prompt:
        </label>
        <textarea
          className="input-field min-h-[80px] resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the video you want to generate..."
          required
        />
        <button
          type="submit"
          className="btn-primary mt-2 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Generating...
            </span>
          ) : (
            <>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              Generate Video
            </>
          )}
        </button>
      </form>
      {error && (
        <div className="text-red-400 mt-2 animate-fade-in">{error}</div>
      )}
      {response && (
        <div className="mt-6 w-full max-w-xl glass-card p-6 animate-fade-in">
          <h2 className="font-semibold mb-2 gradient-text text-xl">
            Generated Video
          </h2>
          {response.video_url ? (
            <video
              src={response.video_url}
              controls
              className="w-full rounded-lg"
              autoPlay
              loop
            />
          ) : (
            <>
              <h3 className="font-semibold mb-2 gradient-text text-lg">
                API Response
              </h3>
              <pre className="text-xs whitespace-pre-wrap break-all text-[var(--foreground)] opacity-90">
                {JSON.stringify(response, null, 2)}
              </pre>
            </>
          )}
        </div>
      )}
    </div>
  );
}
