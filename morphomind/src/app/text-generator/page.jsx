"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiUser, FiCpu, FiLoader } from "react-icons/fi";
import { GoogleGenAI } from "@google/genai";
import PageDropdown from "@/components/PageDropdown";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }); // <-- Replace with your key

const TextGeneratorPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", // or "gemini-1.5-flash" if that's what you have access to
        contents: input,
      });

      setMessages([...newMessages, { text: response.text, sender: "ai" }]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...newMessages,
        {
          text: "Sorry, I encountered an error. Please try again.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  function formatAnswer(text) {
    return (
      "<p>" +
      text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
        .replace(/\n{2,}/g, "</p><p>") // paragraph breaks
        .replace(/\n/g, "<br>") + // single line breaks
      "</p>"
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[var(--background)] pt-20 text-[var(--foreground)]">
      <div className="fixed top-18 right-0 p-6 z-50">
        <PageDropdown />
      </div>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 && !isLoading && (
            <div className="text-center text-gray-400 mt-8">
              <h2 className="text-2xl font-semibold">Start a conversation</h2>
              <p className="mt-2">
                Ask me anything, or start with one of the examples.
              </p>
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                  <FiCpu className="text-white" />
                </div>
              )}
              <div
                className={`max-h-fit md:max-w-lg p-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white/10 text-white rounded-bl-none"
                }`}
              >
                {msg.sender === "ai" ? (
                  <div
                    className="text-sm md:text-base ai-message"
                    style={{ lineHeight: "1.8" }}
                    dangerouslySetInnerHTML={{ __html: formatAnswer(msg.text) }}
                  />
                ) : (
                  <p className="text-sm md:text-base">{msg.text}</p>
                )}
              </div>
              {msg.sender === "user" && (
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-700 flex items-center justify-center">
                  <FiUser className="text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4 justify-start">
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                <FiCpu className="text-white" />
              </div>
              <div className="max-w-md md:max-w-lg p-3 rounded-2xl bg-white/10 text-white rounded-bl-none">
                <FiLoader className="animate-spin text-white" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="p-4 md:p-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 glass-card p-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 p-3 bg-transparent focus:outline-none text-white placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-blue-600 rounded-xl hover:bg-blue-700 disabled:bg-gray-500 transition-colors duration-300"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <FiLoader className="animate-spin text-white text-xl" />
              ) : (
                <FiSend className="text-white text-xl" />
              )}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TextGeneratorPage;
