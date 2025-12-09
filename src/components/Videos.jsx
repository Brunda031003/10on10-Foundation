import React from "react";

const Videos = () => {
  return (
    <section
      className="w-full py-16 px-6"
      style={{ backgroundColor: "#0074B5" }}
    >
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our Videos
        </h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest activities, impact stories, and inspirational moments.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        
        {/* Video 1 */}
        <div className="bg-white rounded-xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/ZetNq8NOx8E"
              title="YouTube video 1"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/GjRghYWwNcw"
              title="YouTube video 2"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 3 */}
        <div className="bg-white rounded-xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/gv_qiRhSonE"
              title="YouTube video 3"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 4 */}
        <div className="bg-white rounded-xl p-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/0V5Mft_wC0g"
              title="YouTube video 4"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Videos;
