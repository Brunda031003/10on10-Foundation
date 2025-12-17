// import React from 'react'
// import { FaBook, FaHandsHelping, FaUsers, FaLightbulb, FaGlobe, FaHeart } from "react-icons/fa"

// const Programs = () => {
//   return (
//     <section id="program" className="w-full py-16 px-6 scroll-mt-20 md:scroll-mt-24" style={{ backgroundColor: "#FF9933" }}>
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
//           OUR PROGRAMS
//         </h2>
//         <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
//           We offer a range of impactful programs designed to empower communities and create lasting change.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
//         {/* Card 1 */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
//           <FaBook className="text-5xl text-[#FF9933] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-2">Education Support</h3>
//           <p className="text-gray-600">
//             Providing learning resources and support for students in need.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
//           <FaHandsHelping className="text-5xl text-[#FF9933] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-2">Community Service</h3>
//           <p className="text-gray-600">
//             Encouraging local engagement to uplift and support communities.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
//           <FaUsers className="text-5xl text-[#FF9933] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-2">Youth Development</h3>
//           <p className="text-gray-600">
//             Empowering youth through activities and leadership training.
//           </p>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
//           <FaLightbulb className="text-5xl text-[#FF9933] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-2">Innovation Programs</h3>
//           <p className="text-gray-600">
//             Supporting creative minds to bring new ideas to life.
//           </p>
//         </div>

//         {/* Card 5 */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
//           <FaGlobe className="text-5xl text-[#FF9933] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-2">Global Awareness</h3>
//           <p className="text-gray-600">
//             Educating communities about global issues and solutions.
//           </p>
//         </div>

//         {/* Card 6 */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
//           <FaHeart className="text-5xl text-[#FF9933] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-2">Health Initiatives</h3>
//           <p className="text-gray-600">
//             Promoting wellness and providing health-related support.
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Programs

import React from "react";

const Programs = () => {
  const base = import.meta.env.BASE_URL || "/";

  return (
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
            <img
              src={`${base}images/programs/Student.webp`}
              alt="Student Workshop"
              className="w-full h-64 md:h-80 object-contain md:object-cover rounded-xl bg-gray-100"
            />

            <img
              src={`${base}images/programs/Adult.webp`}
              alt="Adult Workshop"
              className="w-full h-64 md:h-80 object-contain md:object-cover rounded-xl bg-gray-100"
            />

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Content Section */}
          <div className="px-2 py-6 md:px-8 md:py-8 text-justify">

          {/* Intro */}
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
            The outcome of the workshop is <strong>Becoming aligned with your Inner Compass</strong> -  Gaining 
            Confidence & Clarity, Seeing your world from a vastly different and resourceful perspective, 
            Knowing your very own North Star, Preparing to lead a purposeful and fulfilling life.
          </p>

          {/* Emphasis Line */}
          <p className="font-semibold text-lg mb-4 text-center text-gray-800">
            Become Resourceful. Responsible. Resilient.
          </p>

          {/* Bullet Points */}
          <ul className="list-none text-gray-700 space-y-3 max-w-md mx-auto text-left md:text-center">
            <li>🕘 9AM – 7PM, In-Person (Vegetarian Lunch & Evening Snacks)</li>
            <li>🔁 Online Follow-up in 90 Days</li>
            <li>📄 Personalised Before-After Report</li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default Programs;
