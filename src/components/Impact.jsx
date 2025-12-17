import React, { useMemo } from "react";

const Impact = () => {
  const stories = [
    {
      video: "https://www.youtube.com/embed/a7BQwgU-GVY?controls=0&rel=0",
      title: "Once shy. Now unstoppable ✨",
      short:
        "He sat in class with low confidence—hiding behind books, hoping the teacher wouldn’t notice him. Speaking up felt impossible.",
      long:
        "Fast forward to today 🚀He volunteers to read aloud, speaks with confidence, and owns the room. His maths scores are up 📈, and at his school’s Model United Nations, he researched Bosnia like a pro—using AI to create a full document that left even his dad amazed 🤯From quiet corners to confident conversations—this is what growth looks like. 💪📚",
    },
    {
      video: "https://www.youtube.com/embed/MAo11rg3x3c?controls=0&rel=0",
      title: "From shy and hesitant to confident and trusted ✨",
      short:
        "There was a time when she was scared to talk to strangers, always procrastinating, always holding back. Speaking up didn’t come easy.",
      long:
        "Today, she volunteers in NCC to teach her juniors—and does it with pride 💪 Watching them learn because of her makes her feel confident and accomplished.She’s more open with her parents now, sharing thoughts she once kept to herself 💛 And among her friends, she’s become the one they turn to—the listener, the trustworthy shoulder.Growth isn’t just about speaking louder. It’s about standing taller. 🌱",
    },
    {
      video: "https://www.youtube.com/embed/FbxjPJoiZnU?controls=0&rel=0",
      title: "From giving up easily to growing stronger every day 🚀",
      short:
        "He was once short-tempered, shy, and quiet—rarely speaking to anyone and struggling in certain subjects. Confidence felt far away, and communicating fluently seemed impossible.",
      long:
        "Now, look at the change! ✨He’s calmer, kinder, and more confident. He doesn’t give up anymore. He concentrates better in class, understands concepts clearly, and talks more openly with others.The biggest win? The subjects he once found difficult are now his strengths 📚💪",
    },
    {
      video: "https://www.youtube.com/embed/UxXmrYwJIL8",
      title: "From exam stress to calm confidence ✨",
      short:
        "He once felt overwhelmed by exams and wrote just average. He joined the workshop to improve his social skills and learn how to connect with others.",
      long:
        "Today, he’s calmer, more patient, and more focused 🌱That calm showed up where it mattered most—he wrote well in his exams, and made his parents proud 💪📚 Less stress. More confidence. Real growth.",
    }
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
        <h2 className="text-[gray-800] text-4xl md:text-5xl font-bold mb-8 text-center">
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
            <iframe
              src={story.video}
              title="Impact Story Video"
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

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

            <p className="text-orange-500 font-semibold flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"></path>
              </svg>
              Watch this video
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
