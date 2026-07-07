// Each tile: thumbnail in /public/work + a `href` video link (opens in a new tab).
// Swap the sample .svg files for real thumbnails and update `href` to real video URLs.
import { asset } from "@/lib/asset";

const PORTFOLIO = [
  { title: "Setel — EV Charging", image: "/work/1.jpg", href: "#" },
  { title: "Corporate Interview", image: "/work/2.jpg", href: "#" },
  { title: "Boost — Raya Spot", image: "/work/3.jpg", href: "#" },
  { title: "Office Story", image: "/work/4.jpg", href: "#" },
  { title: "Career Tips — Aunty HR", image: "/work/5.jpg", href: "#" },
  { title: "Pernas — Lebaran", image: "/work/6.svg", href: "#" },
  { title: "Splash Mania", image: "/work/7.svg", href: "#" },
  { title: "Giant — Raya 2023", image: "/work/8.svg", href: "#" },
  { title: "En Abdullah", image: "/work/9.svg", href: "#" },
  { title: "Fitness Film", image: "/work/10.svg", href: "#" },
  { title: "Ready? — Night Scene", image: "/work/11.svg", href: "#" },
  { title: "Quayside", image: "/work/12.svg", href: "#" },
  { title: "Foodpanda — Street", image: "/work/13.svg", href: "#" },
  { title: "Ready? — Night Scene", image: "/work/11.svg", href: "#" },
  { title: "Quayside", image: "/work/12.svg", href: "#" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background video + dark overlay.
          Drop your file at /public/hero-bg.mp4 (poster image at /public/hero-bg.jpg).
          muted + playsInline + autoPlay are required for browsers to autoplay. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={asset("/hero-bg.jpg")}
      >
        <source src={asset("/hero-bg.mp4")} type="video/mp4" />
        <source src={asset("/hero-bg.webm")} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-ink" />

      <div className="container-mi relative pb-16 pt-40 md:pt-44">
        {/* Left-aligned intro */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-white">
            Moving Image
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Video Production Company In Singapore With 10 Years Of Experience
          </h1>

          <p className="mt-8 text-sm font-bold uppercase tracking-wide text-white">
            Video Production in Singapore with over 600+ Videos
          </p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/80">
            <p>
              Since 2016, we&apos;ve completed 600+ projects for Shell, LG,
              Maybank, Foodpanda, and more across Singapore and Southeast Asia.
              From scripting to filming, editing, and animation, one team
              manages everything with a clear process and reliable delivery.
            </p>
            <p>
              Need a video production company in Singapore that shows up prepared
              and delivers on time? That&apos;s us.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-white"
            >
              View Our Works
            </a>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="relative mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PORTFOLIO.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[16/10] overflow-hidden rounded-lg"
            >
              {/* Thumbnail — clean by default */}
              <img
                src={asset(item.image)}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay — only on hover */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

              {/* Play button — appears on hover */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 scale-75 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>

              {/* Title — hidden by default, fades in on hover */}
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 text-left text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.title}
              </span>
            </a>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
