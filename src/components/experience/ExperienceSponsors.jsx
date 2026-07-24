import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ExperienceSponsors() {
  const sponsors = [
    "/images/sponsors/Vivero.webp",
    "/images/sponsors/Arty Facets.webp",
    "/images/sponsors/Growing Minds.jpg",
    "/images/sponsors/Kalpavriksha.webp",
    "/images/sponsors/Shriram Spandhana.webp",
    "/images/sponsors/Ferns City.webp",
  ];

  const [current, setCurrent] = useState(0);

  const loopSponsors = [...sponsors, ...sponsors];

  const previous = () =>
    setCurrent((prev) => (prev === 0 ? sponsors.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === sponsors.length - 1 ? 0 : prev + 1));

  return (
    <section className="overflow-hidden bg-[#f7941d] py-20 px-10 sm:px-12 lg:px-16">
      <div className="max-w-[1700px] mx-auto">

        <p className="mt-0 mb-10 max-w-3xl mx-auto text-center text-white/95 text-xl leading-relaxed">
          Here are some of the institutions and organisations where we have
          delivered the <strong>10on10 Experience</strong> sessions.
        </p>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-xs">

            {/* Left Button */}
            <button
              onClick={previous}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
            >
              <FaChevronLeft className="text-[#f7941d]" />
            </button>

            {/* Card */}
            <div className="flex h-60 w-full items-center justify-center rounded-2xl border border-white/40 bg-white shadow-lg">
              <img
                src={sponsors[current]}
                alt="Sponsor"
                className="max-w-[74%] max-h-[82%] object-contain"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
            >
              <FaChevronRight className="text-[#f7941d]" />
            </button>

          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {sponsors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  current === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden px-10 xl:px-16">
            <div className="marquee-track flex gap-8">
              {loopSponsors.map((logo, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-[260px] h-60 flex items-center justify-center rounded-2xl border border-white/40 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
                >
                  <img
                    src={logo}
                    alt="Sponsor"
                    className="max-w-[74%] max-h-[82%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .marquee-track {
          width: max-content;
          padding: 0 2.5rem;
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 2.5rem));
          }
        }
      `}</style>
    </section>
  );
}