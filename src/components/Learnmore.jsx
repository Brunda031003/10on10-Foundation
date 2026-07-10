import { Link } from "react-router-dom";

const learnMoreItems = [
  {
    title: "Experience",
    link: "/experience",
    img: "/images/Experience.png",
  },
  {
    title: "North Star",
    link: "/north-star",
    img: "/images/North Star.png",
  },
  {
    title: "Momentum",
    link: "/momentum",
    img: "/images/Momentum.png",
  },
];

export default function LearnMore() {
  return (
    <section className="w-full bg-[#f4fbff] py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#0c5f8f]">
            Learn more
          </h2>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {learnMoreItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group overflow-hidden rounded-xl border border-green-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}