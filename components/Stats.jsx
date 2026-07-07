const STATS = [
  { value: "550+", label: "Videos Produced" },
  { value: "250+", label: "Client Served" },
  { value: "150", label: "Reviews" },
];

export default function Stats() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          10 Years of Experience
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative flex items-center justify-center"
            >
              {/* Outlined number */}
              <span
                className="select-none text-[6rem] font-extrabold leading-none md:text-[8.5rem]"
                style={{
                  WebkitTextStroke: "1.5px #F5992F",
                  color: "transparent",
                }}
              >
                {stat.value}
              </span>

              {/* Label chip across the middle */}
              <span className="absolute bg-ink px-3 py-1.5 text-sm font-medium text-white md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
