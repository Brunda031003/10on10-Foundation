import React, { useMemo } from "react";

const Impact = () => {
  const stories1 = [
    {
      video: "https://www.youtube.com/embed/a7BQwgU-GVY?controls=0&rel=0",
      title: "Talk to Anyone Anytime! ",
      short:
        "🌍✨ From hiding behind books to stepping into the spotlight!💫 He’s gone from quietly staying in the background to voluntarily signing up to participate — and that confidence speaks volumes. 🎤💪",
      long:
        "What changed? A shift in mindset, a willingness to see himself differently, and the courage to try something new. 💭💡Every new perspective has added a fresh color to his story — and it’s been such a joy watching him open up, explore, and shine. 🎨🌈 Because when you start believing in yourself, the world starts seeing you differently too. 💙✨"
    },
    {
      video: "https://www.youtube.com/embed/MAo11rg3x3c?controls=0&rel=0",
      title: "Discover New Perspectives",
      short:  "Once nervous to talk to strangers, now she volunteers to teach them 🌱💪",
      long:
        "A new experience sparked confidence—at school, at home, and within herself. She opens up to her parents, builds deeper bonds, and has become the friend others trust to listen. Growth isn’t just speaking up, it’s seeing yourself and others differently ✨💛",
    },
    {
      video: "https://www.youtube.com/embed/FbxjPJoiZnU?controls=0&rel=0",
      title: "Communicate Fluently!",
      short:
        "From hesitation to confident, clear speech 💬💪",
      long:
        "It was never about perfection, but finding his voice and using it fearlessly. One conversation and one brave word at a time, he keeps growing—and it’s inspiring to watch 🌱❤️",
    },
    {
      video: "https://www.youtube.com/embed/UxXmrYwJIL8",
      title: "Being Calm is Cool",
      short:
        "From exam stress to inner calm — what a transformation! 🌟📚He’s learned to pause, breathe, and face challenges with a clear mind and steady heart. 💆‍♂️💫",
      long:
        "Today, he’s not just studying better — he’s thinking calmer, managing his emotions, and scoring higher. Because being calm isn’t about doing less — it’s about doing everything with peace, patience, and purpose.✨ So proud of his journey — proof that true growth begins when you learn to lead your mind before it leads you. 🌱",
    },
    {
      video: "https://www.youtube.com/embed/KtCjrblMI_s",
      title: "Know Yourself!",
      short:"Progress in Every Hour 🌱📚",
      long:"From quiet days at home and nervous class presentations to focused study sessions and growing confidence.🌱✨ She’s learning how to use her time better, stay focused for longer, and keep going even with distractions around. Progress isn’t about perfection—it’s about consistency, effort, and believing you can improve. And she’s doing exactly that, one confident hour at a time 📚💖",
    },
    {
      video: "https://www.youtube.com/embed/wzCW9VO-X5I",
      title: "Conquer Exam Fear!",
      short:"From exam fear and silent classrooms to confident answers and bright smiles 🌟📚",
      long:"Once scared to speak and unsure during exams, she’s now focused, fearless, and flourishing. Studying with dedication at home and school, raising her hand in class, answering with confidence, and building beautiful friendships along the way. She now believes in herself, and isn’t afraid to be seen or heard. Confidence can be learned, courage can be built, and every child has the power to shine when given the right support 💖✨",
    },
    {
      video: "https://www.youtube.com/embed/I43kdktRG9g",
      title: "Make Eye Contact!",
      short:"From a quiet, anxious student to a confident thinker 🌱✨",
      long:"She grew in creativity, independence, and self-belief—rising to second rank in SSD. Her parents see the change too, in the way she speaks, thinks, and shares thoughtful advice. More than marks, it’s a journey of confidence and finding her voice 💖📚",
    },
    
  ];
  const stories2 = [
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
        "Today, she volunteers in NCC to teach her juniors—and does it with pride 💪 Watching them learn because of her makes her feel confident and accomplished. She’s more open with her parents now, sharing thoughts she once kept to herself 💛 And among her friends, she’s become the one they turn to—the listener, the trustworthy shoulder.Growth isn’t just about speaking louder. It’s about standing taller. 🌱",
    },
    {
      video: "https://www.youtube.com/embed/FbxjPJoiZnU?controls=0&rel=0",
      title: "From giving up easily to growing stronger every day 🚀",
      short:
        "He was once short-tempered, shy, and quiet—rarely speaking to anyone and struggling in certain subjects. Confidence felt far away, and communicating fluently seemed impossible.",
      long:
        "Now, look at the change! ✨He’s calmer, kinder, and more confident. He doesn’t give up anymore. He concentrates better in class, understands concepts clearly, and talks more openly with others. The biggest win? The subjects he once found difficult are now his strengths 📚💪",
    }
  ];

  // Pick ONE random story
  const story1 = useMemo(() => {
    return stories1[Math.floor(Math.random() * stories1.length)];
  }, []);

  const story2 = useMemo(() => {
    return stories2[Math.floor(Math.random() * stories2.length)];
  }, []);

  return (
    <div
      id="impact"
      className="min-h-screen bg-[#fea248] py-12 px-4 md:px-8 scroll-mt-20 md:scroll-mt-24"
    >
      {/* Students */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[gray-800] text-4xl md:text-5xl font-bold mb-8 text-center">
          Stories Of Success
        </h2>

        <div className="relative bg-[#fea248] rounded-lg overflow-hidden">
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
              src={story1.video}
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
              {story1.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">{story1.short}</p>

            <p className="text-gray-600 text-sm mb-4">{story1.long}</p>

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

      {/* <div className="max-w-7xl mx-auto my-16 flex justify-center">
        <div className="w-full md:w-2/3 h-[2px] bg-black rounded-full"></div>
      </div>

      {/* Adults */}
      {/*<div className="max-w-7xl mx-auto">
        <h2 className="text-[gray-800] text-4xl md:text-5xl font-bold mb-8 text-center">
          Stories Of Success - Adults
        </h2>

        <div className="relative bg-[#FF9933] rounded-lg overflow-hidden">
          {/* IMAGE SECTION */}
          {/*<div
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
              src={story2.video}
              title="Impact Story Video"
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          {/* OVERLAPPING CARD */}
          {/*<div
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
              {story2.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">{story2.short}</p>

            <p className="text-gray-600 text-sm mb-4">{story2.long}</p>

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
      </div> */}
    </div>
  );
};

export default Impact;
