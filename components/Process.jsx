// "Our Proven Process" — 4 steps in a row, circular icons joined by arrows,
// with a title + description under each.

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2.19-5.81L6 18l3.81-8.19L18 6l-3.81 8.19z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
      <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
    </svg>
  );
}

const STEPS = [
  {
    Icon: CompassIcon,
    accent: true,
    title: "1. Discovery & Strategy",
    desc: "We start by understanding your business goals and target audience in Singapore. Then we create a clear video strategy that connects with local customers and helps you stand out in your market.",
  },
  {
    Icon: CameraIcon,
    accent: true,
    title: "2. Production",
    desc: "Our experienced crew films your story with professional-quality equipment. Every shot is carefully planned to make sure your video represents your brand perfectly and captures exactly what you need.",
  },
  {
    Icon: MonitorIcon,
    accent: false,
    title: "3. Post-Production",
    desc: "Our editing team transforms your footage into an engaging story. We add motion graphics, color correction, music, and sound design to create a polished video that keeps viewers watching and drives real results.",
  },
  {
    Icon: GiftIcon,
    accent: true,
    title: "4. Distribution",
    desc: "We guide you on how to launch your video across the right platforms social media, your website, email campaigns, and ads so your message reaches your target audience and generates leads for your business.",
  },
];

export default function Process() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Our Proven Process of Video Production Singapore
        </h2>
        <p className="mx-auto mt-8 max-w-5xl text-base leading-relaxed text-white/70">
          Our video production company in Singapore provides all services related
          to content creation, including pitching for ideas, shooting at different
          venues/studios, post-production, special effects, and annual report
          design. As a part of the production industry, we can also provide
          specific talents, props, and equipment upon request.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-0">
          {STEPS.map(({ Icon, accent, title, desc }, i) => (
            <div
              key={title}
              className="relative flex flex-col items-center px-4 text-center"
            >
              {/* Icon circle */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15">
                <span className={accent ? "text-accent" : "text-white/90"}>
                  <Icon />
                </span>
              </div>

              {/* Connector arrow (desktop only, not after the last step) */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-[calc(50%+2.5rem)] top-10 hidden w-[calc(100%-5rem)] -translate-y-1/2 items-center lg:flex">
                  <div className="h-px flex-1 bg-white/25" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-ml-px h-3 w-3 text-white/25"
                    aria-hidden="true"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
