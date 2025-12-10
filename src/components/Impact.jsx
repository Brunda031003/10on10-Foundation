import React, { useMemo } from "react";

const Impact = () => {
  const stories = [
    {
      img: "images/impact/Person1.jpg",
      title: "From Overwhelmed to Empowered: Alex's Journey",
      short:
        "When Alex joined our leadership program, she was struggling to balance her team's needs with organizational goals...",
      long:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam...",
    },
    {
      img: "images/impact/Person2.jpg",
      title: "Ravi Turned Challenges Into Opportunities",
      short:
        "Ravi felt directionless until he discovered our youth mentorship initiative...",
      long:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos...",
    },
    {
      img: "images/impact/Person3.jpg",
      title: "Sara Found Her Voice Through Leadership",
      short:
        "Soft-spoken Sara learned how to lead confidently and inspire others...",
      long:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit sed quia non numquam eius modi...",
    },
    {
      img: "images/impact/Person4.jpg",
      title: "David's Growth From Self-Doubt to Self-Belief",
      short:
        "David struggled with confidence, but consistent mentoring changed everything...",
      long:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi...",
    },
    {
      img: "images/impact/Person5.jpg",
      title: "Meera Became a Community Change-Maker",
      short:
        "Meera’s passion for social impact transformed into real-world action after joining our workshops...",
      long:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem...",
    },
  ];

  // Pick ONE random story
  const story = useMemo(() => {
    return stories[Math.floor(Math.random() * stories.length)];
  }, []);

  return (
    <div
      id="impact"
      className="min-h-screen bg-[#FF9933] py-12 px-4 md:px-8 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[gray-800] text-3xl md:text-4xl font-bold mb-8 text-center">
          IMPACTFUL STORIES
        </h2>

        <div className="relative bg-[#FF9933] rounded-lg overflow-hidden">
          {/* IMAGE SECTION */}
          <div
            className="
              relative 
              w-full 
              h-[300px]
              md:w-[48%] 
              md:h-[480px] 
              md:left-[10%]
            "
          >
            <img
              src={story.img}
              alt="Person Story"
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
              {story.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">{story.short}</p>

            <p className="text-gray-600 text-sm mb-4">{story.long}</p>

            <button className="text-orange-500 font-semibold flex items-center text-sm hover:text-orange-600 transition">
              Read Full Story
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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
