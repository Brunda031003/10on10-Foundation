import { useState } from "react";
import {
  FaGraduationCap,
  FaCalculator,
  FaTooth,
  FaBriefcase,
  FaUsers,
  FaGavel,
  FaLaptopCode,
  FaHeartbeat,
  FaHome,
  FaPlane,
  FaShippingFast,
  FaChalkboardTeacher,
  FaUserTie,
  FaHandsHelping,
  FaUniversity,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    role: "Shipping & Logistics Professional",
    Icon: FaShippingFast,
    review: "I was struggling with Sales, but within just two sessions, I was able to secure a deal — despite having no prior experience, no sales team, and, most remarkably, with complete ease. Words fall short in expressing my appreciation.",
  },
  {
    role: "College Student",
    Icon: FaGraduationCap,
    review: "I was feeling lost, haphazardly doing many things. I became more focused in my approach to the work at hand. I became more systematic and considered. It helped transform my capabilities and unlocked my productivity. And the best part is that I feel I’m just getting started!",
  },
  {
    role: "HR Professional",
    Icon: FaUsers,
    review: "You contributed in a big way when I needed you the most",
  },
  // {
  //   role: "Training Professional",
  //   Icon: FaChalkboardTeacher,
  //   review: "I felt constantly overwhelmed. My mind was racing, I was always anxious, and my relationships with my family were strained. I was stuck in a cycle of stress, and I didn't know how to break free.I now feel calm, clear, and empowered to handle any situation without feeling trapped by my circumstances or the people around me. Experience the guidance for yourself. You'll be amazed at the difference it can make.",
  // },
  {
    role: "Software Product Manager",
    Icon: FaLaptopCode,
    review: " have seen significant changes in myself. I feel much more confident at work and have gained clarity on my career roadmap. Most of my past issues have been resolved.",
  },
  {
    role: "A very young Entrepreneur",
    Icon: FaBriefcase,
    review: "It really helped me in improving focus, viewing problems differently and getting a better grasp on my life.  It helped me see things from a perspective I didn’t know I had. I would highly recommend anyone take this opportunity and approach, it is truly life altering.",
  },
  {
    role: "Customer Interaction Lead",
    Icon: FaHandsHelping,
    review: "I have again started meeting new people, gaining new experiences through travelling which have changed me in very important ways. When things don’t go my way, I stay resilient. I now have clarity of which path to go with my career and I am excited at the endless possibilities. Super grateful.",
  },
  // {
  //   role: "Leading Advocate",
  //   Icon: FaGavel,
  //   review: "I had to take certain professional decisions for the overall good of my career. However I was hesitant to take the first step. After the sessions, I was able to get the clarity and strength needed to take the step out of my comfort zone. The sessions have resulted in many professional and personal highs and successes for me.",
  // },
  // {
  //   role: "Banking Professional",
  //   Icon: FaUniversity,
  //   review: "My relationship with my mother has always been challenging, and I used to struggle with her behavior, finding it frustrating and upsetting. I've gained a new understanding of my mother's actions. This newfound insight has brought me a sense of peace, realizing that her behavior is influenced by her mental health condition rather than intentional.",
  // },
  //  {
  //   role: "Chartered Accountant",
  //   Icon: FaCalculator,
  //   review:
  //     "I was constantly anxious and overwhelmed by my thoughts. The transformation process helped me identify the root cause of my emotional struggles and limiting beliefs that were holding me back. I now feel calmer, more confident, and better equipped to handle life's challenges. Thank you, for creating such a safe and empowering space for transformation.",
  // },
  {
    role: "Homemaker",
    Icon: FaHome,
    review:
      "I was feeling stuck and confused about my future. Thanks to the guidance and procedures, I gained clarity about what was truly important to me and discovered a renewed sense of purpose. The I experienced were profound emotional shifts and I now approach life with greater confidence and optimism.",
  },
  {
    role: "Working Professional",
    Icon: FaBriefcase,
    review:
      "The transformation I experienced during my sessions was remarkable. Long-standing fears and self-doubt that had affected my decisions for years no longer feel overwhelming. I feel lighter, more positive, and more connected to myself, than I have in a long time.",
  },
  {
    role: "Working Professional",
    Icon: FaBriefcase,
    review:
      "They helped me understand patterns that were affecting my relationships and emotional well-being. The insights and breakthroughs I gained have allowed me to communicate more effectively, set healthier boundaries, and feel more at peace with myself. I am grateful for this life-changing experience.",
  },
  {
    role: "HR Executive",
    Icon: FaUsers,
    review:
      "The anxiety and emotional heaviness I had been carrying significantly reduced, and I felt a sense of clarity and relief. Their approach was compassionate, insightful, and highly effective. I would highly recommend her to anyone seeking personal transformation.",
  },
  {
  role: "Homemaker",
  Icon: FaHome,
  review:
    "I feel more confident, emotionally balanced, and clear about my goals after my sessions. The experience was powerful, insightful, and deeply healing.",
  },
  {
    role: "Student",
    Icon: FaGraduationCap,
    review:
      "The transformation process helped my child gain awareness of his patterns and replace them with empowering beliefs. He is feeling motivated, inspired, and ready to take action toward his goals.",
  },
  {
    role: "Baking Coach",
    Icon: FaChalkboardTeacher,
    review:
      "My house became my home after your intervention.",
  },
  {
    role: "Paramedic",
    Icon: FaHeartbeat,
    review:
      "My back pain of 7 years vanished just like that.",
  },
  {
    role: "Student",
    Icon: FaGraduationCap,
    review:
      "For the longest time, I was thinking my parents were my enemies, now I realize how much they love me.",
  },
  {
    role: "Dentist",
    Icon: FaTooth,
    review:
      "You are Godsend! I was planning to separate from my spouse and apply for a divorce. Now, looking back, it feels so silly. Thank you!",
  },
  {
    role: "HR Professional",
    Icon: FaUsers,
    review:
      "I don’t know what you folks did! I was stressed and confused for the past 13yrs. Five minutes into my session, my view of the world changed and I am still unable to believe this is happening.",
  },
  {
    role: "HR Professional",
    Icon: FaUsers,
    review:
      "I tried many times to commit self harm. After years, now I am able to be in touch with myself again.",
  },
  {
    role: "Entrepreneur",
    Icon: FaBriefcase,
    review:
      "I had been struggling to launch my project for the past 4 years. After your sessions, I am so much clear on what I need to do. Thank you! This means so much to me.",
  },
  {
    role: "A Homemaker’s Friend",
    Icon: FaHandsHelping,
    review:
      "In the past 7 days that I have been with her, I haven’t seen her without tears in her eyes; now she is beaming! It's unbelievable!",
  },
  {
    role: "Homemaker",
    Icon: FaHome,
    review:
      "I was thinking that my family was sexist and were shackling me. Now I know how to evolve a nurturing family! Thank you!",
  },
];

export default function MomentumTestimonials() {
  const [current, setCurrent] = useState(0);

  const scrollingTestimonials = [...testimonials, ...testimonials];

  const previous = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const next = () =>
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="overflow-hidden bg-[#087db3] px-4 py-12 md:px-10 lg:px-16 md:py-16">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
  <div className="relative mx-auto max-w-sm">

    {/* Left Button */}
    <button
      onClick={previous}
      className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
    >
      <FaChevronLeft className="text-[#087db3]" />
    </button>

    {/* Card */}
    <article className="rounded-xl border border-[#087db3] bg-[#fffdf4] p-6 text-center shadow-[0_8px_20px_rgba(8,125,179,0.22)]">

      {(() => {
        const testimonial = testimonials[current];
        const Icon = testimonial.Icon;

        return (
          <>
            <div className="mb-3 flex justify-center">
              <Icon className="text-4xl text-[#087db3]" />
            </div>

            <h3 className="text-xl font-medium">
              {testimonial.role}
            </h3>

            <div className="mx-auto my-3 flex w-20 items-center">
              <span className="h-px flex-1 bg-[#087db3]" />
              <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#087db3]" />
              <span className="h-px flex-1 bg-[#087db3]" />
            </div>

            <div className="relative mt-5">
              <span className="absolute -left-2 -top-4 text-4xl font-serif text-[#087db3]">
                “
              </span>

              <p className="px-2 text-[15px] leading-7 text-black/85">
                {testimonial.review}
              </p>

              <span className="absolute -bottom-6 right-0 text-4xl font-serif text-[#087db3]">
                ”
              </span>
            </div>
          </>
        );
      })()}

    </article>

    {/* Right Button */}
    <button
      onClick={next}
      className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
    >
      <FaChevronRight className="text-[#087db3]" />
    </button>

  </div>

  {/* Dots */}
  <div className="mt-6 flex justify-center gap-2">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`h-2.5 w-2.5 rounded-full transition ${
          current === index
            ? "bg-white"
            : "bg-white/40"
        }`}
      />
    ))}
  </div>
</div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="testimonial-mask mx-auto max-w-[1500px]">
          <div className="testimonial-track">
            {scrollingTestimonials.map(({ role, Icon, review }, index) => (
              <article
                key={`${role}-${index}`}
                className="testimonial-card relative flex-shrink-0 rounded-xl border border-[#087db3] bg-[#fffdf4] px-6 py-5 text-center shadow-[0_8px_20px_rgba(8,125,179,0.22)]"
              >
                <div className="mb-2 flex justify-center">
                  <Icon className="text-4xl text-[#087db3]" />
                </div>

                <h3 className="text-xl font-medium text-black">
                  {role}
                </h3>

                <div className="mx-auto my-3 flex w-20 items-center">
                  <span className="h-px flex-1 bg-[#087db3]" />
                  <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#087db3]" />
                  <span className="h-px flex-1 bg-[#087db3]" />
                </div>

                <div className="relative">
                  <span className="absolute -left-1 -top-3 text-4xl font-serif text-[#087db3]">
                    “
                  </span>

                  <p className="px-3 text-sm leading-6 text-black/85">
                    {review}
                  </p>

                  <span className="absolute -bottom-5 -right-1 text-4xl font-serif text-[#087db3]">
                    ”
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
        </div>
      </div>
    </section>
  );
}