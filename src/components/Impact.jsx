import React from 'react';

const Impact = () => {
  return (
    <div id="impact" className="min-h-screen bg-[#FF9933] py-12 px-4 md:px-8 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-[gray-800] text-3xl md:text-4xl font-bold mb-8 text-center">
          IMPACTFUL STORIES
        </h2>

        <div className="relative bg-[#FF9933] rounded-lg overflow-hidden">

          {/* IMAGE SECTION */}
          <div className="
            relative 
            w-full 
            h-[300px]
            md:w-[48%] 
            md:h-[480px] 
            md:left-[10%]
          ">
            <img 
              src="images/Stories.jpg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* OVERLAPPING CARD */}
          <div
            className="
              md:absolute 
              md:top-1/2 
              md:left-[54%] 
              md:-translate-y-1/2 
              bg-white/95 
              backdrop-blur-sm 
              shadow-2xl 
              p-6 
              md:p-8 
              rounded-xl 
              w-full 
              md:w-[36%] 
              mt-6 
              md:mt-0
            "
          >
            <h3 className="text-xl md:text-2xl font-bold text-[gray-800] mb-3">
              From Overwhelmed to Empowered: Alex's Journey
            </h3>

            <p className="text-gray-600 text-sm mb-3">
              When Alex joined our leadership program, she was struggling to balance her team's needs with organizational goals...
            </p>

            <p className="text-gray-600 text-sm mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <button className="text-orange-500 font-semibold flex items-center text-sm hover:text-orange-600 transition">
              Read Full Story 
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Impact;
