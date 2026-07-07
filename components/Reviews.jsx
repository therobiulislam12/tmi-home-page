// "Reviews" — three staggered testimonial cards.
// Card bg = /review-card-bg.jpg, 25px radius. Quote on top, person pinned bottom.
// Replace each `avatar` with a real customer photo (150×150).

// Neutral silhouette placeholder so the avatars render before real photos exist.
const AVATAR_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%231c1c1c'/%3E%3Ccircle cx='75' cy='58' r='30' fill='%23555'/%3E%3Cpath d='M20 145a55 48 0 0 1 110 0z' fill='%23555'/%3E%3C/svg%3E";

const REVIEWS = [
  {
    quote:
      "“I had a wonderful experience working with Moving Image. The team listened to what I wanted and turned my ideas into a beautiful video. They were patient-friendly and very easy to work with. I am really happy with the final result.”",
    name: "Aisyah Rahman",
    role: "Product Specialist",
    avatar: AVATAR_PLACEHOLDER,
  },
  {
    quote:
      "“Moving Image did an amazing job on our video. They captured every important moment and made everything look so clean and professional. The whole process was smooth from planning to filming to editing. I would happily work with them again.”",
    name: "Siti Nur Hana",
    role: "Product Specialist",
    avatar: AVATAR_PLACEHOLDER,
  },
  {
    quote:
      "“I am very impressed with Moving Image. They understood my vision right away and delivered a video that was even better than I expected. The team was creative fast and very respectful of my time. I highly recommend them for any video project.”",
    name: "Daniel Lim",
    role: "Product Specialist",
    avatar: AVATAR_PLACEHOLDER,
  },
];

export default function Reviews() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-mi">
        <h2 className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Reviews
        </h2>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`flex min-h-[620px] flex-col justify-between overflow-hidden rounded-[25px] bg-cover bg-center p-10 ${
                i === 1 ? "lg:mt-16" : ""
              }`}
              style={{ backgroundImage: "url('/review-card-bg.jpg')" }}
            >
              {/* Quote */}
              <p className="font-manrope text-[24px] font-light leading-[36px] text-white/90">
                {review.quote}
              </p>

              {/* Person */}
              <div className="mt-10 flex items-center gap-5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-inter text-[20px] font-bold leading-[22px] text-white">
                    {review.name}
                  </p>
                  <p className="mt-2 font-manrope text-[16px] font-light leading-[24px] text-white/80">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
