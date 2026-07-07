// Global CTA template — "top CTA" variant.
// Reuse anywhere: <TopCtaBanner /> for defaults, or override any prop.
// Design stays identical every time; only the text/links change.

// Dark marble swirl background, generated as an inline SVG so it never 404s.
// To use a real photo instead, pass bgImage="/your-marble.jpg".
const MARBLE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='1400' height='460' preserveAspectRatio='xMidYMid slice'><rect width='100%25' height='100%25' fill='%23161616'/><filter id='m'><feTurbulence type='fractalNoise' baseFrequency='0.010 0.017' numOctaves='5' seed='9' result='n'/><feColorMatrix in='n' type='matrix' values='0 0 0 0 0.36 0 0 0 0 0.36 0 0 0 0 0.39 0 0 0 -2.4 1.05'/></filter><rect width='100%25' height='100%25' filter='url(%23m)'/></svg>`;
const MARBLE = `url("data:image/svg+xml,${MARBLE_SVG.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/#/g, "%23").replace(/"/g, "'")}")`;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.548 4.142 1.588 5.945L0 24l6.304-1.654a11.881 11.881 0 005.684 1.448h.005c6.582 0 11.94-5.359 11.944-11.945a11.86 11.86 0 00-3.418-8.4" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
      <path d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v.512l-10.5 6.3-10.5-6.3V5.25Z" />
      <path d="M22.5 7.763 12.386 13.83a.75.75 0 0 1-.772 0L1.5 7.763V18.75A2.25 2.25 0 0 0 3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V7.763Z" />
    </svg>
  );
}

export default function TopCtaBanner({
  heading = "Ready For Your Next Project?",
  quoteLabel = "Get A Quote",
  quoteHref = "#",
  whatsappHref = "https://wa.me/6588373489?text=Hello%20Moving%20Image%2C%20I%27m%20interested%20in%20using%20your%20service%20for%20",
  emailHref = "mailto:hello@movingimage.sg",
  bgImage,
}) {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-mi">
        <div
          className="relative overflow-hidden bg-cover bg-center px-8 py-14 md:px-16 md:py-16"
          style={{ backgroundImage: bgImage ? `url('${bgImage}')` : MARBLE }}
        >
          {/* Left-to-right darkening so the heading stays crisp over the swirl */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />

          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Heading */}
            <h2 className="max-w-xl text-5xl font-bold uppercase leading-[1.05] text-white md:text-[4.2rem]">
              {heading}
            </h2>

            {/* Actions */}
            <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[460px]">
              <a
                href={quoteHref}
                className="flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-xl font-bold text-ink transition-colors duration-300 hover:bg-white"
              >
                {quoteLabel}
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex items-center justify-center rounded-lg bg-accent py-6 text-ink transition-colors duration-300 hover:bg-white"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href={emailHref}
                  aria-label="Send us an email"
                  className="flex items-center justify-center rounded-lg bg-accent py-6 text-ink transition-colors duration-300 hover:bg-white"
                >
                  <EnvelopeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
