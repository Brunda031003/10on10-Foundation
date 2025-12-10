import { useMemo } from "react";

export default function ReviewSection() {
  const allReviews = [
    {
      name: "Aarav",
      review: "Amazing organization! The work they do for youth empowerment is truly inspiring.",
      link: "https://www.youtube.com/watch?v=example1",
    },
    {
      name: "Diya",
      review: "I loved volunteering! The team is supportive and focused on real impact.",
      link: "https://www.youtube.com/watch?v=example2",
    },
    {
      name: "Karan",
      review: "A great platform that builds confidence and motivates young minds.",
      link: "https://www.youtube.com/watch?v=example3",
    },
    {
      name: "Sahana",
      review: "Professional management and meaningful initiatives. Highly recommended!",
      link: "https://www.youtube.com/watch?v=example4",
    },
    // Extra 5 Reviews
    {
      name: "Rohit",
      review: "Great programs and leadership workshops. I learned so much!",
      link: "https://www.youtube.com/watch?v=example5",
    },
    {
      name: "Maya",
      review: "A very positive and welcoming environment! Loved the sessions.",
      link: "https://www.youtube.com/watch?v=example6",
    },
    {
      name: "Vikram",
      review: "Impactful initiatives that genuinely help youth grow and succeed.",
      link: "https://www.youtube.com/watch?v=example7",
    },
    {
      name: "Nisha",
      review: "The activities boosted my confidence and communication skills!",
      link: "https://www.youtube.com/watch?v=example8",
    },
    {
      name: "Ananya",
      review: "Dedicated team and amazing execution. Truly admirable work!",
      link: "https://www.youtube.com/watch?v=example9",
    },
  ];

  // Pick 4 random reviews safely
  const reviews = useMemo(() => {
    const shuffled = [...allReviews].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);

  return (
    <section
      id="review"
      className="w-full py-16 px-7 scroll-mt-20 md:scroll-mt-24"
      style={{ backgroundColor: "#0074B5" }}
    >
      <h2 className="text-center text-white text-4xl font-bold mb-10">
        What People Say About Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between"
            style={{ backgroundColor: "#09487d" }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 14a4 4 0 10-8 0m8 0a4 4 0 00-8 0m8 0c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 0v0a4 4 0 00-8 0"
                  />
                </svg>
              </div>
            </div>

            <p className="text-center italic leading-relaxed flex-grow">"{r.review}"</p>

            <p className="text-center mt-4 font-semibold text-lg">— {r.name}</p>

            <div className="text-center mt-4">
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium underline hover:text-gray-300"
              >
                Know More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
