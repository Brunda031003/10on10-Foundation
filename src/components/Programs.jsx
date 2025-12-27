import React from "react";

// Random image helper using Vite
const getRandomImage = (images) => {
  const imageArray = Object.values(images);
  return imageArray[Math.floor(Math.random() * imageArray.length)].default;
};

// Load images from folders
const studentImages = import.meta.glob(
  "../assets/gallery/students/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const adultImages = import.meta.glob(
  "../assets/gallery/adults/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

// Pick random images once per page load
const randomStudentImage = getRandomImage(studentImages);
const randomAdultImage = getRandomImage(adultImages);

const Programs = () => {
  const base = import.meta.env.BASE_URL || "/";

  return (
    <>
      <section
        id="program"
        className="w-full py-16 px-4 md:px-6 scroll-mt-20 md:scroll-mt-24"
        style={{ backgroundColor: "white" }}
      >
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
            OUR PROGRAMS
          </h2>
        </div>

        {/* White Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Images Section */}
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">  
              {/* Student Workshop */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={randomStudentImage}
                  alt="Student Workshop"
                  className="w-full h-64 md:h-80 object-cover rounded-xl bg-gray-100"
                />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                  1-Day Student Workshop
                </h3>
              </div>

              {/* Adult Workshop */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={randomAdultImage}
                  alt="Adult Workshop"
                  className="w-full h-64 md:h-80 object-cover rounded-xl bg-gray-100"
                />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                  1-Day Adult Workshop
                </h3>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Content Section */}
          <div className="px-2 py-6 md:px-8 md:py-8 text-justify">

            <p className="text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              The 10on10 Foundation organises <strong>1-day Personal Transformation</strong> workshops for <strong>Adults (21+)</strong> 
              and <strong>Students (12-21)</strong>.
            </p>
            
            <p className="text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              The focus of the workshops is to help you discover your dream and what is holding you back from 
              achieving it. It is a day of deep reflection and powerful insights.
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              Your dream could be anything - Career success, Academic success, Conquering self-doubt, 
              Mastering difficult subjects, Emotional stability, Meaningful relationships, Marital bliss, Better 
              parenting, Managing multiple demands, Managing stress, Superior self-confidence, Overcoming 
              fears, Stopping Overthinking….the list can go on…..
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              Instead of dwelling on past problems or labels, the 10on10© Approach helps participants:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              <li>Interrupt limiting thought and behaviour patterns</li>
              <li>Build new, supportive inner habits</li>
              <li>Strengthen emotional balance and self-awareness</li>
              <li>Prepare not just for today's challenges, but for the ones yet to come</li>
            </ul>

            <p className="text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              Through reflection, guided experiences, and powerful techniques, participants once again:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base mb-4 max-w-4xl mx-auto">
              <li>Discover their dreams and aspirations</li>
              <li>Identify what’s holding them back</li>
              <li>Learn to manage emotions, stress, and distractions</li>
              <li>Build confidence, clarity, and self-belief</li>
              <li>Reconnect with their Inner Compass and personal North Star</li>
            </ul>

            <p className="text-gray-700 text-sm md:text-base mb-6 max-w-4xl mx-auto">
              The outcome of the workshop is <strong>Becoming aligned with your Inner Compass</strong> — gaining 
              Confidence & Clarity, seeing your world from a vastly different and resourceful perspective, 
              knowing your very own North Star, preparing to lead a purposeful and fulfilling life.
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-6 max-w-4xl mx-auto">
              Each workshop runs from <strong>9:00 AM to 7:00 PM</strong>, includes vegetarian meals and refreshments, ensures complete confidentiality, and is supported by a <strong>follow-up three months later</strong> to help the learning translate into lasting change.
            </p>

          </div>
        </div>
      </section>

      {/* Blue Section */}
      <section className="w-full bg-[#1b81bc] py-16 md:py-20 px-4 md:px-6 mt-16">
        <div className="max-w-5xl mx-auto text-white text-left md:text-left space-y-10">

          <div className="space-y-4">
            <h2 className="text-1xl md:text-2xl font-semibold md:text-left">Our Approach</h2>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              <strong>
                At the heart of 10on10 is a simple belief: People are not broken — they are conditioned.
              </strong>
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              Every one of us carries immense, often untapped potential — the ability to think clearly, act confidently, and live with purpose.
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              This map quietly guides our thoughts, emotions, and actions. Sometimes it helps us move forward. At other times, it holds us back.
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              <strong>
                At 10on10, we help people revisit this inner map — reshape it so it becomes a source of strength rather than limitation.
              </strong>
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-2xl md:text-3xl font-semibold md:text-left">The 10on10 Experience</h2>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              Our programs are <strong>joyful, reflective, and deeply practical</strong>.
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              <strong>
                At 10on10, we don’t just teach skills — we help people upgrade their inner operating system.
              </strong>
            </p>

            <p className="text-sm md:text-base leading-relaxed opacity-95">
              Because when your inner compass is aligned, confusion gives way to clarity.
            </p>
          </div>

          <p className="text-sm md:text-base leading-relaxed opacity-95 text-center pt-8">
            ✨ <strong>The direction is within. It’s time to follow it.</strong> ✨
          </p>

        </div>
      </section>
    </>
  );
};

export default Programs;
