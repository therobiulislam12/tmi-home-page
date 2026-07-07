const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Our Work", href: "#" },
  { label: "Get a Quote", href: "#" },
  { label: "Contact", href: "#" },
];

const SERVICES = [
  { label: "Production", href: "#" },
  { label: "Post Production", href: "#" },
  { label: "Video Services", href: "#" },
  { label: "Other Services", href: "#" },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel">
      <div className="container-mi py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <div className="leading-none">
              <span className="block font-display text-xl font-normal tracking-[0.3em] text-white">
                MOVING
              </span>
              <span className="mt-1 block font-display text-xl font-normal tracking-[0.3em] text-white">
                IMAGE
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Video production company in Singapore delivering 600+ projects
              since 2016.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li>
                <a href="tel:+6588373489" className="hover:text-accent">
                  +65 8837 3489
                </a>
              </li>
              <li>
                <a href="mailto:hello@movingimage.sg" className="hover:text-accent">
                  hello@movingimage.sg
                </a>
              </li>
              <li>67 Ayer Rajah Crescent #2-10/17, Singapore 139950</li>
            </ul>
          </div>

          <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          <LinkColumn title="Our Services" links={SERVICES} />

          {/* Networks */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Networks
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M13 10h3l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V7H7v3h2.6v8H13v-8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-6 text-center text-xs text-white/40">
          Copyright © 2026 The Moving Image (SG) Pte. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
