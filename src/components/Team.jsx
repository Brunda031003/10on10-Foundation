import React from "react";

const team = [
  {
    name: "Ambika Warrier",
    desc: "Dr. Ambika, an RCI-registered Rehabilitation Counsellor. She has over 20 years of corporate experience, along with 15 years as a counsellor and therapist."
  },
  {
    name: "Divya Dsouza",
    desc: "Divya has spent over two decades empowering thousands of women entrepreneurs. She helps them develop a sense of purpose, direction, and fulfilment in their lives."
  },
  {
    name: "Vinod V M",
    desc: "Following a 40-year career in the pharmaceutical industry, Vinod helps students, professionals, and parents grow through empathy, insight, and genuine connection."
  },
  {
    name: "Jyotsna Fernandes",
    desc: "Jyotsna is a certified Child Psychology and Parenting coach. Alongside her full-time corporate career, she empowers individuals to build self awareness, resilience, and positive change."
  },
  {
    name: "Jyoti Gupta",
    desc: "A HR professional and a certified Life Coach, Jyoti brings deep expertise to her impactful one-on-one coaching, transformative group workshops, and inspiring motivational talks."
  },
  {
    name: "Deepa Ranjith",
    desc: "Deepa has over 14 years of teaching experience in international schools. A Certified Yoga Trainer, Deepa inspires individuals to embrace lifelong learning, mindfulness, and the joy of self-discovery."
  },
  {
    name: "Babita Singh",
    desc: "Babita is a dynamic entrepreneur with a strong background in business and community engagement. She inspires others to build confidence, embrace positive habits, and achieve their full potential."
  },
  {
    name: "Priyanka Ramalingam",
    desc: "Priyanka, an IT professional and personal transformation specialist, helps children, adults, and elders embrace their authenticity and the joy of living."
  },
  {
    name: "Jyoti Bhosle",
    desc: "Jyoti is an experienced HR professional who guides individuals and organisations to build clarity, confidence, and balance. She empowers them to unlock their potential and lead happier, more fulfilling lives."
  },
  {
    name: "Shraddha Balakrishnan",
    desc: "Shraddha is a CA with 6+ years in corporate banking. Alongside her corporate career, she devotes herself to education and empowerment, helping individuals find personal breakthroughs."
  },
  {
    name: "Richa Sekhar",
    desc: "Richa empowers individuals and teams through process standardisation and behavioural training. She nurtures excellence within using neuro science, Image Management, Visual Facilitation, and experiential learning."
  },
  {
    name: "Ishara Ahmed",
    desc: "Ishara has extensive global experience in guiding individuals through personal and professional evolution. Her mission is rooted in empowerment, particularly in uplifting women and supporting students as they navigate the pressures that often hinder their growth."
  },
  {
    name: "M S Krishnan",
    desc: "Krishnan has held senior leadership roles in multiple organisations across Asia-Pacific. He has worked with students, business professionals, corporate leaders, and homemakers."
  }
];

const Team = () => {
  const base = import.meta.env.BASE_URL || "/";

  return (
    <section
      className="w-full py-16 px-4"
      style={{ backgroundColor: "#FF9933" }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Our Team
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* First 10 Members */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {team.slice(0, 10).map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              img={`${base}images/team/${index + 1}.jpg`}
            />
          ))}
        </div>

        {/* Last 3 Members – Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.slice(10).map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                img={`${base}images/team/${index + 11}.jpg`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const TeamCard = ({ member, img }) => (
  <div className="bg-white rounded-2xl shadow-lg p-5 text-center flex flex-col items-center">
    <img
      src={img}
      alt={member.name}
      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-3"
    />
    <h3 className="font-bold text-sm md:text-base mb-1">
      {member.name}
    </h3>
    <p className="text-gray-600 text-xs md:text-sm leading-snug">
      {member.desc}
    </p>
  </div>
);

export default Team;
