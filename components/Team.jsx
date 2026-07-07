// "Our Team" — full-bleed image on the left half, copy on the right.
// The image runs to the left viewport edge; the text stays aligned to the
// site container on the right. Swap IMAGE for the real team photo.
import { asset } from "@/lib/asset";

const IMAGE = "/work/1.jpg";

export default function Team() {
  return (
    <section className="bg-ink py-20 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left: full-bleed image (half width, flush to viewport edge) */}
        <div
          className="h-[360px] w-full bg-cover bg-center bg-no-repeat grayscale lg:h-[600px]"
          style={{ backgroundImage: `url('${asset(IMAGE)}')` }}
        />

        {/* Right: copy, constrained to the container gutter */}
        <div className="px-5 lg:pl-14 lg:pr-[max(1.25rem,calc((100vw-1340px)/2+1.25rem))]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Our Team
          </p>

          <h2 className="mt-4 text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl">
            Your Videography Experts in Singapore
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/60">
            <p>
              We&apos;re not just another production house in Singapore.
              We&apos;re a team of people who wake up excited to make videos. Our
              crew has directors, camera operators, editors, and animators, and
              everyone brings their own skills to help turn your ideas into
              videos that work.
            </p>
            <p>
              What sets us apart is how we work with you. We talk like normal
              people, not salespeople. You won&apos;t hear confusing tech words
              or get pushed into anything. When you reach out, we reply fast. And
              you&apos;ll work directly with the same people who film and edit
              your video. We handle your project the way we&apos;d handle our own
              because your success matters to us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
