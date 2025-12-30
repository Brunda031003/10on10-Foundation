import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#1b81bc] py-16 px-6 scroll-mt-20 md:scroll-mt-24"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          ABOUT US
        </h2>

        {/* Underline */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <span className="block w-20 h-1 bg-white rounded-full"></span>
          <span className="block w-3 h-3 bg-white rounded-full"></span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-white space-y-10 leading-relaxed text-justify align-center">

        {/* Who We Are */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="mb-4">
            At <strong>10on10</strong>, we’re people first — people who have walked different paths,
            faced our own challenges, and learned how powerful inner change can be.
            We come from diverse backgrounds across India, but we’re united by one
            shared purpose:
          </p>

          <p className="font-bold mb-4">
            To nurture a generation of people who are Resourceful, Responsible, and
            Resilient — people who believe in themselves, aim high, pursue
            excellence, and contribute meaningfully to the world.
          </p>

          <p>
            We work closely with students, young adults, parents, educators, and
            institutions, creating experiences that help real change happen —
            from within.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="mb-4">We imagine a world where young people grow into adults who:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Think and act <strong>resourcefully</strong></li>
            <li>Take <strong>responsibility</strong> for their choices and their impact</li>
            <li>Face life’s challenges with <strong>resilience</strong></li>
          </ul>
          <p>
            To turn this vision into reality, we’ve committed ourselves to empowering<strong> 10 million young people over the next 10 years</strong> — helping them grow not just academically or professionally, but emotionally and mentally as well.
          </p>
        </div>

        {/* What We Do */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
          <p className="mb-4">
            The <strong>10on10 Foundation</strong> conducts <strong>one-day Personal Transformation Workshops</strong> for:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Students (12–21 years)</strong></li>
            <li><strong>Adults (21+ years)</strong></li>
          </ul>
          <p className="mb-4">
            These aren’t typical workshops. They are <strong>highly interactive,
            activity-based experiences</strong> that work at a deeper level — helping
            participants understand why they think, feel, and act the way they do,
            and how to change what no longer serves them.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
