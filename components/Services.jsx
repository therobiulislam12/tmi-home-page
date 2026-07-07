// "Our Video Production Services" — 3×3 grid.
// Cell 1 is the intro copy; the other 8 are clickable cards whose
// background image smoothly zooms in on hover. Swap `img`/`href` per card.
import { asset } from "@/lib/asset";

const SERVICES = [
  {
    title: "Corporate Video Production",
    desc: "Used for company profiles, employer branding, and stakeholder communication. We help organisations turn complex messages into clear videos that build trust and credibility for internal and external audiences.",
    img: "/work/1.jpg",
    href: "#",
  },
  {
    title: "Educational Video Production",
    desc: "We create learning content using live footage, simple animation, and infographics. Used by schools and training teams to explain topics clearly and improve understanding in classrooms and onboarding programs.",
    img: "/work/2.jpg",
    href: "#",
  },
  {
    title: "Video Script Writing Services",
    desc: "Every project begins with the script. We shape ideas into structured scripts based on audience needs, ensuring the message is clear, natural, and ready for production.",
    img: "/work/3.jpg",
    href: "#",
  },
  {
    title: "Animation Studio",
    desc: "Some ideas need animation instead of cameras. We produce 2D and 3D animation, either standalone or combined with live footage, depending on what the story needs.",
    img: "/work/4.jpg",
    href: "#",
  },
  {
    title: "Motion Graphics",
    desc: "We design animated visuals like title sequences, typography, and data graphics. Each piece is built to simplify information and make videos easier to follow.",
    img: "/work/5.jpg",
    href: "#",
  },
  {
    title: "Video Editing Services",
    desc: "Editing is where everything comes together. We arrange footage, sync sound, and refine colour to turn raw clips into a finished, polished video.",
    img: "/work/6.svg",
    href: "#",
  },
  {
    title: "Event Video Production",
    desc: "We film conferences, launches, and corporate events using multi-camera setups. Highlights are edited into clear, fast-turnaround videos that capture the key moments.",
    img: "/work/7.svg",
    href: "#",
  },
  {
    title: "Annual Report Design",
    desc: "We design annual reports for listed and private companies, combining layout, writing, and visuals so that performance data is easy to read and presentable to stakeholders.",
    img: "/work/8.svg",
    href: "#",
  },
];

export default function Services() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Intro cell */}
        <div className="flex flex-col justify-start p-2 md:p-4">
          <h2 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Our Video Production Services
          </h2>
          <p className="mt-8 text-base leading-relaxed text-white/70">
            We manage end-to-end video production in Singapore, from idea and
            scripting to filming, editing, and delivery. Our in-house team of
            producers, directors, editors, and motion designers handles
            commercials, corporate videos, events, and animation without
            outsourcing.
          </p>
        </div>

        {/* Service cards */}
        {SERVICES.map((service) => (
          <a
            key={service.title}
            href={service.href}
            className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-panel p-8 ring-1 ring-white/5 transition-shadow duration-300 hover:ring-white/10"
          >
            {/* Zooming background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('${asset(service.img)}')` }}
            />
            {/* Darkening overlay — keeps text readable, image shows through at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/45" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {service.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
