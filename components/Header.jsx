"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#", dropdown: true },
  { label: "Our Work", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

function Logo() {
  return (
    <a href="#" className="leading-none" aria-label="Moving Image home">
      <span className="block font-display text-2xl font-normal tracking-[0.35em] text-white">
        MOVING
      </span>
      <span className="mt-1 block font-display text-2xl font-normal tracking-[0.35em] text-white">
        IMAGE
      </span>
    </a>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-full flex items-center justify-between py-6">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-12">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-accent ${
                  link.active ? "text-accent" : "text-white"
                }`}
              >
                {link.label}
                {link.dropdown && <Chevron />}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: search + CTA */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label="Search"
            className="hidden text-white transition-colors hover:text-accent lg:block"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>

          <a
            href="#"
            className="hidden border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-accent hover:bg-accent hover:text-white lg:inline-block"
          >
            Get a Quote
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur lg:hidden">
          <nav className="container-full flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-3 text-base font-medium hover:bg-white/5 ${
                  link.active ? "text-accent" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-3 inline-flex items-center justify-center border border-accent bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
