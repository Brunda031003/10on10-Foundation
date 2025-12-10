import React, { useState, useMemo } from "react";

const Videos = () => {
  // All video links here
  const videoLinks = [
  "https://www.youtube.com/embed/TF79MRtLsKE?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/bAX0x_-3g78?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/qSKcrXX6YrY?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/MAo11rg3x3c?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/jvH9BkGfSTc?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/6l2rRAA7Gyc?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/SqUX_M6q0T0?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/nGP9op33rZY?controls=0&modestbranding=1&rel=0&showinfo=0",
  "https://www.youtube.com/embed/LVGtXJzYzoo?controls=0&modestbranding=1&rel=0&showinfo=0",
];

  // Random starting index
  const startIndex = useMemo(() => {
    return Math.floor(Math.random() * videoLinks.length);
  }, [videoLinks.length]);

  const [current, setCurrent] = useState(startIndex);

  // Go to previous video
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? videoLinks.length - 1 : prev - 1
    );
  };

  // Go to next video
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === videoLinks.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="w-full py-16 px-6"
      style={{ backgroundColor: "#0074B5" }}
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our Videos
        </h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest activities, impact stories, and inspirational moments.
        </p>
      </div>

      {/* Video Carousel */}
      <div className="max-w-4xl mx-auto relative">

        {/* Video Card */}
        <div className="bg-white rounded-xl p-3 shadow-xl transition-all">
          <div className="relative w-full h-0 pb-[46.25%]">
            <iframe
              src={videoLinks[current]}
              title="YouTube video"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0074B5] text-white px-3 py-2 rounded-full shadow hover:scale-105 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0074B5] text-white px-3 py-2 rounded-full shadow hover:scale-105 transition"
        >
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {videoLinks.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-white" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
