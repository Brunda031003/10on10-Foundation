import React from 'react'
import { FaBook, FaHandsHelping, FaUsers, FaLightbulb, FaGlobe, FaHeart } from "react-icons/fa"

const Programs = () => {
  return (
    <section id="program" className="w-full py-16 px-6 scroll-mt-20 md:scroll-mt-24" style={{ backgroundColor: "#FF9933" }}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Our Programs
        </h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          We offer a range of impactful programs designed to empower communities and create lasting change.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <FaBook className="text-5xl text-[#FF9933] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Education Support</h3>
          <p className="text-gray-600">
            Providing learning resources and support for students in need.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <FaHandsHelping className="text-5xl text-[#FF9933] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Community Service</h3>
          <p className="text-gray-600">
            Encouraging local engagement to uplift and support communities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <FaUsers className="text-5xl text-[#FF9933] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Youth Development</h3>
          <p className="text-gray-600">
            Empowering youth through activities and leadership training.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <FaLightbulb className="text-5xl text-[#FF9933] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Innovation Programs</h3>
          <p className="text-gray-600">
            Supporting creative minds to bring new ideas to life.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <FaGlobe className="text-5xl text-[#FF9933] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Global Awareness</h3>
          <p className="text-gray-600">
            Educating communities about global issues and solutions.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <FaHeart className="text-5xl text-[#FF9933] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Health Initiatives</h3>
          <p className="text-gray-600">
            Promoting wellness and providing health-related support.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Programs
