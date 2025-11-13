"use client";

import { useState, FormEvent, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [joinCount, setJoinCount] = useState(247);

  useEffect(() => {
    const interval = setInterval(() => {
      setJoinCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 4000 + 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    setMessage("");
    setMessageType("");

    if (!trimmedEmail) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch("https://your-backend.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (response.ok) {
        setMessage("✓ Thank you! Check your email for confirmation.");
        setMessageType("success");
        setEmail("");
        setJoinCount((prev) => prev + 1);
      } else {
        setMessage("Something went wrong. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-black text-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 backdrop-blur-md bg-black/50">
        <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="font-semibold text-lg text-white">comingsoon</span>
          </div>
          <button className="px-6 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
            Login
          </button>
        </div>
      </header>

      <div className="background-elements fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-slate-800/30 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="flex-1 flex items-center justify-center pt-20 pb-10 px-6 z-10 relative">
        <div className="content text-center max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 bg-linear-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent tracking-tight overflow-hidden">
            The first AI-native DFY acquisition engine.
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-4 leading-relaxed font-light">
            Built for agencies, by an agency.
          </p>

          <p className="text-sm sm:text-base text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            Stop wasting time on manual prospecting. comingsoon automates your
            entire client acquisition pipeline with AI-powered lead intelligence,
            multi-channel outreach, and predictive analytics—so you can focus on
            closing deals.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 mb-6 justify-center max-w-2xl mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              className="flex-1 min-w-[280px] rounded-md px-6 py-4 bg-slate-950/50 border border-slate-800 text-slate-200 text-base transition-all duration-200 backdrop-blur-sm placeholder:text-slate-600 focus:outline-none focus:border-slate-600 focus:bg-slate-950/80"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-8 sm:px-10 py-4 rounded-md bg-slate-50 text-black font-semibold text-base cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-white active:scale-[0.98]"
            >
              Get Early Access
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div
              className={`text-sm min-h-5 ${
                messageType === "success"
                  ? "text-emerald-400"
                  : messageType === "error"
                  ? "text-red-400"
                  : ""
              }`}
            >
              {message}
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 border border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-400">
                <span className="text-slate-200 font-semibold">
                  {joinCount.toLocaleString()}
                </span>{" "}
                joining
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            No credit card required • Get started in minutes
          </p>
        </div>
      </div>
    </div>
  );
}
