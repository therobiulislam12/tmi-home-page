// One image sliced into 5 vertical strips, each staggered vertically.
// Swap /public/about.svg for a real photo (e.g. about.jpg) and update IMAGE below.
const IMAGE = "/about.svg";

const STRIPS = [
  { pos: "0%", offset: "translate-y-6" },
  { pos: "25%", offset: "-translate-y-4" },
  { pos: "50%", offset: "translate-y-8" },
  { pos: "75%", offset: "-translate-y-2" },
  { pos: "100%", offset: "translate-y-3" },
];

export default function About() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy */}
        <div>
          <h2 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
            Video Production Singapore – Who We Are
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70">
            <p>
              Moving Image has been producing videos since 2016 across Singapore
              and Southeast Asia. In that time, we&apos;ve completed 600+
              projects – broadcast commercials, corporate films, government
              communications, 2D and 3D animation, event coverage, and
              documentary work for clients like Shell, LG, Maybank, Boost, and
              Foodpanda.
            </p>
            <p>
              Our team works in-house: scriptwriters, cinematographers, sound
              engineers, lighting technicians, editors, and animation artists.
              As a video company Singapore businesses have relied on for 10
              years, every team member brings regional production experience to
              your project. The same people who take your brief are the ones on
              set and in the edit.
            </p>
            <p>
              We started in Malaysia and have been serving Singapore clients
              since day one. Ten years of regional production work means
              we&apos;ve handled tight deadlines, multi-location shoots,
              broadcast specifications, and campaigns running across multiple
              platforms. That experience doesn&apos;t come from reading about it.
            </p>
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Find Out More
          </a>
        </div>

        {/* Right: sliced-image strips */}
        <div className="flex h-[420px] items-center justify-center gap-2 md:gap-3">
          {STRIPS.map((strip, i) => (
            <div
              key={i}
              className={`h-full flex-1 overflow-hidden rounded-sm ${strip.offset}`}
              style={{
                backgroundImage: `url('${IMAGE}')`,
                backgroundSize: "500% 100%",
                backgroundPosition: `${strip.pos} center`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
