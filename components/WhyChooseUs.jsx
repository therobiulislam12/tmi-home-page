// "Why Choose Us" — heading block + 3×2 grid (image cell + 5 icon feature cards),
// laid over a dark textured background.
// To use a real photo background, pass bgImage="/why-choose-bg.jpg".
import { asset } from "@/lib/asset";

const IMAGE = "/work/2.jpg";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function DevicesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path strokeLinecap="round" d="M2 17.5h10" />
      <rect x="16.5" y="8.5" width="5.5" height="11.5" rx="1.2" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function ShieldStarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 2.6v5c0 4.6-3.1 7.6-7 9-3.9-1.4-7-4.4-7-9v-5L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5l1.1 2.2 2.4.35-1.75 1.7.4 2.4L12 15.95l-2.15 1.1.4-2.4L8.5 11.05l2.4-.35L12 8.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10" aria-hidden="true">
      <circle cx="12" cy="12.5" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5v4l2.75 1.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 4.5l2 1.2-1.2 2" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 3l3.5 6.5M15.5 3l-3.5 6.5" />
      <circle cx="12" cy="15" r="6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l.95 1.95 2.15.3-1.55 1.5.37 2.15L12 16.9l-1.92 1.0.37-2.15L8.9 14.25l2.15-.3L12 12z" />
    </svg>
  );
}

const FEATURES = [
  {
    Icon: DevicesIcon,
    title: "Full-Service Studio",
    desc: "We handle everything under one roof. From the first idea to the final video, you work with one team that manages it all. No need to hire separate people for filming, editing, or animation. We've got all the skills and equipment you need right here, which saves you time, money, and headaches.",
  },
  {
    Icon: BulbIcon,
    title: "Creative Meets Strategy",
    desc: "We don't just make videos that look cool. Every creative choice we make is connected to your business goals. Want more customers? More website visits? More people knowing your brand? We build that into the video from day one, so you get content that's both beautiful and effective.",
  },
  {
    Icon: ShieldStarIcon,
    title: "Trusted by Leading Brands",
    desc: "Over 600 companies have trusted us with their video projects, from small startups to big corporations. They choose us because we deliver what we promise, stay professional, and create videos that get results. When this many businesses trust us, you know you're in good hands.",
  },
  {
    Icon: ClockIcon,
    title: "Fast & Flexible",
    desc: "Need your video done quickly? We've got you covered. Our team moves fast without cutting corners on quality. We also adapt when your plans change because we understand that business doesn't always go according to schedule. You'll find us easy to work with, no matter what comes up.",
  },
  {
    Icon: MedalIcon,
    title: "Regional Production Experience",
    desc: "We shoot in 4K–8K, grade in DaVinci Resolve to broadcast standards, and deliver in all formats, including broadcast masters, web versions, and social cuts. We've produced commercials that aired nationally, videos for listed company annual reports, and government content with clearance requirements. Every project goes through the same process, regardless of size.",
  },
];

export default function WhyChooseUs({ bgImage }) {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24 md:py-28"
      style={
        bgImage
          ? { backgroundImage: `url('${bgImage}')` }
          : {
              backgroundColor: "#0d0d0d",
              backgroundImage:
                "repeating-linear-gradient(115deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 28px), radial-gradient(120% 90% at 75% 0%, rgba(255,255,255,0.06), transparent 60%)",
            }
      }
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{ backgroundImage: NOISE }}
      />

      <div className="container-mi relative">
        {/* Heading block */}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          Why Choose Us
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Why We Are the Best Video Production House in Singapore
        </h2>
        <p className="mt-8 max-w-5xl text-base leading-relaxed text-white/70">
          Choosing the right video production company in Singapore can make or
          break your project. You need a team that understands your goals,
          delivers on time, and creates videos that actually help your business
          grow. That&apos;s exactly what we do at Moving Image, and here&apos;s
          why businesses across Singapore keep choosing us over everyone else.
        </p>

        {/* Grid: image cell + 5 feature cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Image cell */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={asset(IMAGE)}
              alt="Our crew on set"
              className="h-full min-h-[280px] w-full object-cover grayscale"
            />
          </div>

          {/* Feature cards */}
          {FEATURES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-black/50 p-8 text-center md:p-10"
            >
              <span className="text-accent">
                <Icon />
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
