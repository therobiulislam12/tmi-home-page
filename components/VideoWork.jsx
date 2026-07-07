// "Watch Our Video Production Work" — grid of clickable video cards.
// Each card = background thumbnail + dark overlay + brand logo + title.
// On hover the title turns the accent colour.
// Swap `image` (thumbnail), `logo` (brand mark), and `href` (video link) per card.
const VIDEOS = [
  {
    title: "Giant Raya Commercial",
    image: "/work/1.jpg",
    logo: "/logos/gamuda.svg",
    href: "#",
  },
  {
    title: "SKINTIFIC TV Commercial",
    image: "/work/2.jpg",
    logo: "/logos/gamuda.svg",
    href: "#",
  },
  {
    title: "Foodpanda Annual Dinner Event",
    image: "/work/3.jpg",
    logo: "/logos/foodpanda.svg",
    href: "#",
  },
  {
    title: "Gamuda Splashmania Land Commercial",
    image: "/work/4.jpg",
    logo: "/logos/gamuda.svg",
    href: "#",
  },
  {
    title: "Indah Water Hari Raya",
    image: "/work/5.jpg",
    logo: "/logos/gamuda.svg",
    href: "#",
  },
  {
    title: "LG Nano Cell TV Commercial",
    image: "/work/1.jpg",
    logo: "/logos/gamuda.svg",
    href: "#",
  },
];

export default function VideoWork() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Watch Our Video Production Work
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <a
              key={video.title}
              href={video.href}
              className="group relative block h-[350px] overflow-hidden rounded-2xl"
            >
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${video.image}')` }}
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #00000080 0%, #000000 100%)",
                }}
              />

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                {video.logo && (
                  <img
                    src={video.logo}
                    alt=""
                    className="h-[100px] w-[300px] max-w-full object-contain"
                  />
                )}
                <h3 className="font-manrope text-[20px] font-medium leading-[29px] text-white transition-colors duration-300 group-hover:text-accent">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
