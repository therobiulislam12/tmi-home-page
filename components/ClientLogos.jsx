// Swap these SVG placeholders for the real logo files in /public/logos.
const LOGOS = [
  { name: "ATA", src: "/logos/ata.svg" },
  { name: "aL-ikhsaN", src: "/logos/al-ikhsan.svg" },
  { name: "Frost & Sullivan", src: "/logos/frost-sullivan.svg" },
  { name: "foodpanda", src: "/logos/foodpanda.svg" },
  { name: "Al Jazeera", src: "/logos/aljazeera.svg" },
  { name: "Gamuda", src: "/logos/gamuda.svg" },
  { name: "MK Land", src: "/logos/mkland.svg" },
  { name: "Shell", src: "/logos/shell.svg" },
  { name: "MODA", src: "/logos/moda.svg" },
  { name: "digi", src: "/logos/digi.svg" },
  { name: "GE", src: "/logos/ge.svg" },
];

export default function ClientLogos() {
  return (
    <section className="bg-white py-10">
      <div className="group relative overflow-hidden">
        {/* Track — duplicated once for a seamless loop */}
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex shrink-0 items-center justify-center px-10 md:px-14">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
          ))}
        </div>

        {/* Soft fade at both edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
