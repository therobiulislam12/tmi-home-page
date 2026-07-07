function Brand({ children }) {
  return <span className="text-highlight">{children}</span>;
}

export default function Clients() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi text-center">
        <p className="text-base font-medium text-white/80">
          Trusted by 500+ Leading Brands
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Video Production Company in Singapore – Our Clients
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/60 md:text-lg">
          Most clients find us through previous work. One project leads to
          another. Since 2016, we&apos;ve produced commercials, corporate
          videos, animations, and campaign content for <Brand>Shell</Brand>,{" "}
          <Brand>LG</Brand>, <Brand>Foodpanda</Brand>, <Brand>Maybank</Brand>,{" "}
          <Brand>Gamuda</Brand>, and the{" "}
          <Brand>Prime Minister&apos;s Office</Brand> across Singapore and
          Southeast Asia. 600+ projects later, people usually come in already
          familiar with the kind of work we do.
        </p>
      </div>
    </section>
  );
}
