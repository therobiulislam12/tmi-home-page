"use client";

import { useState } from "react";

// "FAQs" — heading + decorative line-art on the left, accordion on the right.
// Single-open accordion; the first item is open by default.
const FAQS = [
  {
    q: "How to find the best video production company?",
    a: "Look for a video production company with real experience and happy clients. Check their past work to see if their style matches what you want. Does the quality match what you need? Then check how long they've been operating and who they've worked with. A company that's been producing videos for 10 years and has delivered for Shell, LG, and government agencies isn't guessing at what works. Ask them to walk you through the process. A good video production company will be clear about timelines, revisions, and what happens if something changes.",
  },
  {
    q: "What are the types of video production services?",
    a: "Video production covers corporate videos, TV commercials, event coverage, 2D and 3D animation, motion graphics, product videos, testimonials, and social media content. Most projects combine several of these depending on your goals.",
  },
  {
    q: "How much does a video production cost in Singapore?",
    a: "Cost depends on scope — length, crew size, locations, animation, and post-production. Simple videos start lower, while multi-day shoots or broadcast commercials cost more. We give clear quotes upfront with no hidden fees.",
  },
  {
    q: "What does a video production company do?",
    a: "We manage the whole process: scripting, planning, filming, editing, animation, sound, and delivery. From the first idea to the final export, one team handles everything so you don't need to coordinate multiple vendors.",
  },
  {
    q: "Why work with a local Singaporean video production company like Moving Image?",
    a: "A local team understands the market, language nuances, and audience. We're on the ground for shoots, respond fast, and have delivered for regional brands and government agencies for over 10 years.",
  },
  {
    q: "How many revisions does our production company provide per video project?",
    a: "We include a set number of revision rounds in every project and agree on them before we start. Our goal is a video you're fully happy with, so we're clear about what's included from the beginning.",
  },
  {
    q: "How long does it take to create a video with our corporate video production company?",
    a: "Timelines vary by project. A simple video can take one to two weeks, while larger productions with animation or multiple shoot days take longer. We share a clear schedule once we understand your scope.",
  },
  {
    q: "What industries do you work with?",
    a: "We've produced videos for brands across retail, F&B, technology, finance, property, government, and education — from startups to listed companies and public agencies.",
  },
];

function ToggleIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className="h-6 w-6 shrink-0 text-white"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      {!open && <path d="M12 4v16" />}
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + line art */}
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            FAQs
          </h2>
          <p className="mt-2 text-3xl font-light italic text-white/80 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <div className="mt-14 flex justify-center lg:mt-20 lg:justify-start">
            {/* Mascot — spins slowly while hovered */}
            <img
              src="/faq_image.png"
              alt="Koi mascot"
              className="w-full max-w-[420px] rotate-45 hover:animate-[spin_14s_linear_infinite]"
            />
          </div>
        </div>

        {/* Right: accordion */}
        <div className="border-t border-white/15">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={item.q} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-5 py-6 text-left"
                >
                  <span className="mt-2 w-6 shrink-0 text-[11px] font-medium tracking-[0.15em] text-white/45">
                    {num} /
                  </span>
                  <span className="flex-1 text-[20px] font-medium leading-[1.35] text-white">
                    {item.q}
                  </span>
                  <ToggleIcon open={isOpen} />
                </button>

                {isOpen && (
                  <p className="pb-8 pl-11 pr-6 text-[15px] leading-[1.75] text-white/55">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
