import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0074B5] py-16 md:py-15 px-6 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About Us
        </h2>

        {/* Stylish underline with a dot */}
        <div className="flex justify-center items-center mt-4 space-x-2">
            {/* Line */}
            <span className="block w-20 h-1 bg-white rounded-full"></span>
            {/* Dot */}
            <span className="block w-3 h-3 bg-white rounded-full"></span>
        </div>
        </div>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left - Image */}
        <div className="md:w-[330px] w-full flex justify-center order-1 md:order-1">
          <img
            src="/images/Founder.jpg"
            alt="About Us"
            className="rounded-xl shadow-2xl w-full max-w-xs md:max-w-sm object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2 w-full text-white flex flex-col order-2 md:order-2">
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>

          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#program"
              className="bg-white text-[#0074B5] font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#0074B5] hover:text-[white] transition"
            >
              Explore Programs
            </a>

            <a
              href="#impact"
              className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#0074B5] transition"
            >
              See Our Impact
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
