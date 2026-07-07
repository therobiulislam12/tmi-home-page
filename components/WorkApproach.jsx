// "Our Work Approach" — heading + intro on the left, three divider-separated
// feature rows on the right, each with an outline icon.

function LightBulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-11 w-11" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-11 w-11" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-11 w-11" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  );
}

const FEATURES = [
  {
    Icon: LightBulbIcon,
    title: "Creative Excellence",
    desc: "We shoot on RED and Sony cinema cameras, use ARRI and Kino Flo lighting systems, and do all our colour grading in DaVinci Resolve. Our directors have handled work for Boost, Foodpanda, NXP, Maybank, Sunway, and ICAEW, managing from concept to final broadcast, web, and social media exports.",
  },
  {
    Icon: PuzzleIcon,
    title: "Strategic Thinking",
    desc: "Every video we make is built around your business goals. We start by understanding what you want to achieve and who you're trying to reach. Then we create content designed to get you real results, whether that's more sales, leads, or brand awareness.",
  },
  {
    Icon: UsersIcon,
    title: "Collaborative Process",
    desc: "We work with you as partners, not just vendors. You're involved at every step, and your ideas shape the final video. We listen, communicate clearly, and treat your project with the same care we'd give our own business.",
  },
];

export default function WorkApproach() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + intro */}
        <div>
          <h2 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Video Production House in Singapore &ndash; Our Work Approach
          </h2>
          <p className="mt-10 text-base leading-relaxed text-white/70">
            Most productions fail in pre-production, not on shoot day. We&apos;ve
            seen it enough times to know: a weak brief, an unreviewed script, or a
            location that wasn&apos;t scouted properly costs more to fix in post
            than it would have upfront. So we put real time into the planning
            stage before a single camera is set up.
          </p>
        </div>

        {/* Right: feature rows */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="flex gap-6 py-8">
              <div className="shrink-0 text-white/70">
                <Icon />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/60">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
