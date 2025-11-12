"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

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
    <div className="min-h-screen flex items-center justify-center overflow-x-hidden bg-black text-slate-100">
      <div className="background-elements fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-slate-800/30 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent"></div>

        {/* Glowing orbs inspired by a-leads.co */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container max-w-5xl px-6 py-10 z-10 relative">
        <div className="content relative z-10 text-center">

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] mb-8 bg-linear-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent tracking-tight">
            The first AI-native DFY
            <br />
            acquisition engine.
          </h1>

          <p className="text-2xl sm:text-3xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto font-light">
            Built for agencies, by an agency.
          </p>

          <p className="text-base text-slate-500 mb-14 leading-relaxed max-w-2xl mx-auto">
            Transform your client acquisition with an intelligent, automated
            platform engineered to scale your agency with precision and
            efficiency.
          </p>

          <form
            className="flex gap-3 mb-6 flex-wrap justify-center max-w-xl mx-auto"
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
              className="px-10 py-4 rounded-md bg-slate-50 text-black font-semibold text-base cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-white active:scale-[0.98]"
            >
              Get Early Access
            </button>
          </form>

          <div
            className={`mt-4 text-sm min-h-5 ${
              messageType === "success"
                ? "text-emerald-400"
                : messageType === "error"
                ? "text-red-400"
                : ""
            }`}
          >
            {message}
          </div>
          {/* Features Section 
          <div className="mt-24 pt-20 border-t border-slate-800/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/30">
              <div className="bg-black p-8 group hover:bg-slate-950/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-slate-800 bg-slate-950/50 flex items-center justify-center group-hover:border-slate-700 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-200 mb-3 uppercase tracking-wide">AI-Powered Intelligence</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Advanced machine learning algorithms identify and engage high-value prospects with precision targeting.</p>
                  </div>
                </div>
              </div>
              

              <div className="bg-black p-8 group hover:bg-slate-950/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-slate-800 bg-slate-950/50 flex items-center justify-center group-hover:border-slate-700 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-200 mb-3 uppercase tracking-wide">Done-For-You</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Fully automated deployment and management. Zero configuration required, start acquiring clients immediately.</p>
                  </div>
                </div>
                
              </div>
             

              <div className="bg-black p-8 group hover:bg-slate-950/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-slate-800 bg-slate-950/50 flex items-center justify-center group-hover:border-slate-700 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-200 mb-3 uppercase tracking-wide">Agency-First Design</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Built by agency operators who understand the challenges of scaling client acquisition and retention.</p>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
           */}
        </div>
      </div>
    </div>
  );
}
