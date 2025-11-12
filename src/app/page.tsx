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
            The first AI-native<br /> DFY acquisition  <br />engine.
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
          {/* Features Section */}
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

          {/* Stats Section */}
          <div className="mt-32 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">10M+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Data Points Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">500K+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Qualified Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">94%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Match Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">3.5x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Average ROI Increase</div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-32 py-20 border-t border-slate-800/50">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">How It Works</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Three simple steps to transform your client acquisition pipeline
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700/50 to-transparent"></div>

              <div className="relative bg-slate-950/50 border border-slate-800/50 p-8 hover:border-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-lg mb-6 relative z-10">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Define Your ICP</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our AI analyzes your ideal customer profile across 50+ data points to identify high-intent prospects that match your exact criteria.
                </p>
              </div>

              <div className="relative bg-slate-950/50 border border-slate-800/50 p-8 hover:border-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-lg mb-6 relative z-10">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Automated Engagement</h3>
                <p className="text-slate-400 leading-relaxed">
                  Intelligent outreach sequences deliver personalized messaging at scale, nurturing prospects through multi-channel touchpoints.
                </p>
              </div>

              <div className="relative bg-slate-950/50 border border-slate-800/50 p-8 hover:border-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 font-bold text-lg mb-6 relative z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Close More Deals</h3>
                <p className="text-slate-400 leading-relaxed">
                  Real-time insights and predictive analytics help you prioritize qualified opportunities and maximize conversion rates.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mt-32 py-20 border-t border-slate-800/50">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Built For Modern Agencies</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Tailored solutions for every stage of your agency growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:border-blue-500/40 transition-all duration-300">
                    <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-4">Digital Marketing</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Scale your client roster with targeted lead generation that identifies businesses actively seeking marketing services. Our engine analyzes website performance, social presence, and market signals.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Lead Scoring</span>
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Intent Signals</span>
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Outreach</span>
                </div>
              </div>

              <div className="group relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-linear-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:border-purple-500/40 transition-all duration-300">
                    <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-4">Development Studios</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Connect with businesses undergoing digital transformation. Identify companies with outdated tech stacks, legacy systems, or recent funding rounds signaling investment in development.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Tech Stack</span>
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Funding Alerts</span>
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Insights</span>
                </div>
              </div>

              <div className="group relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-linear-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:border-pink-500/40 transition-all duration-300">
                    <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-4">Creative & Design</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Find brands ready for rebranding, product launches, or seasonal campaigns. Track industry trends, brand refresh cycles, and market expansion activities to engage at the perfect moment.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Brand Monitor</span>
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Trends</span>
                  <span className="px-3 py-1.5 text-xs bg-slate-900/50 border border-slate-800 text-slate-400 rounded-md">Tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof / Testimonials Section */}
          <div className="mt-32 py-20 border-t border-slate-800/50">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Trusted By Leading Agencies</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                See how agencies are transforming their growth with our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 group">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  "This platform completely transformed how we approach client acquisition. We went from manually prospecting to having a steady pipeline of qualified leads. Our close rate increased by 40% in the first quarter."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    SJ
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 text-base">Sarah Johnson</div>
                    <div className="text-sm text-slate-500">Founder, GrowthScale Agency</div>
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 group">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  "The AI-powered targeting is incredibly accurate. We're no longer wasting time on cold outreach to unqualified prospects. Every lead is a genuine opportunity, which has allowed our team to focus on what they do best."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    MC
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 text-base">Michael Chen</div>
                    <div className="text-sm text-slate-500">CEO, Velocity Digital</div>
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 group">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  "We've tried multiple lead generation tools, but nothing comes close to this. The automation saves us 20+ hours per week, and the quality of leads is consistently high. It's like having a dedicated BDR team working 24/7."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                    JM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 text-base">Jessica Martinez</div>
                    <div className="text-sm text-slate-500">Director of Growth, Pixel Perfect</div>
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-950/30 border border-slate-800/50 p-10 rounded-xl hover:bg-slate-950/50 hover:border-slate-700/50 transition-all duration-500 group">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  "The ROI speaks for itself. Within 60 days we had signed three new retainer clients that more than paid for the platform. The predictive analytics help us identify which prospects to prioritize, saving countless hours."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    DP
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 text-base">David Park</div>
                    <div className="text-sm text-slate-500">Partner, Summit Creative</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 py-24 relative">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-600/5 to-transparent rounded-3xl"></div>
            <div className="relative text-center px-6">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                Ready to Transform<br />Your Agency?
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the waitlist and be among the first to experience the future of client acquisition. Limited spots available for our beta program.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-12 py-5 rounded-lg bg-slate-50 text-black font-semibold text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:scale-105 active:scale-[0.98] shadow-lg shadow-slate-900/50"
              >
                Get Early Access
              </button>
              <p className="text-sm text-slate-500 mt-6">No credit card required • Get started in minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
