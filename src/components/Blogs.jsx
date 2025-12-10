import React, { useMemo } from "react";

const Blogs = () => {
  const blogs = [
    {
      title: "How Youth Leadership Transforms Communities",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
    {
      title: "10 Best Ways to Improve Mental Strength",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
    {
      title: "Why Volunteering Builds a Better Future",
      desc: "Volunteering helps build essential leadership skills and strengthens society. Volunteering helps build essential leadership skills and strengthens society. Volunteering helps build essential leadership skills and strengthens society. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
    {
      title: "How Youth Can Lead Climate Action",
      desc: "Young people around the world are driving powerful environmental movements. Young people around the world are driving powerful environmental movements. Young people around the world are driving powerful environmental movements. Young people around the world are driving powerful environmental movements. Young people around the world are driving powerful environmental movements. Young people around the world are driving powerful environmental movements. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
    {
      title: "Top 5 Habits of Successful Young Leaders",
      desc: "Consistency, focus, discipline and communication are core elements of youth leadership. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
    {
      title: "How to Build Emotional Intelligence",
      desc: "Emotional intelligence helps young people communicate better and lead effectively. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
    {
      title: "Importance of Sports for Youth Development",
      desc: "Sports teach teamwork, confidence, resilience and discipline to young minds. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sports teach teamwork, confidence, resilience and discipline to young minds. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "images/gallery/1.jpg",
    },
  ];

  // Select 2 random blogs (useMemo prevents re-randomizing on every re-render)
  const randomBlogs = useMemo(() => {
    const shuffled = [...blogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, []);

  return (
    <div
      id="blog"
      className="bg-[#FF9933] py-16 px-6 md:px-12 scroll-mt-20 md:scroll-mt-24"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-12">
        BLOGS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {randomBlogs.map((blog, index) => (
          <div
            key={index}
            className="relative h-auto min-h-[500px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
          >
            <img
              src={blog.img}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {blog.title}
              </h3>

              <p className="text-sm md:text-base opacity-95 leading-relaxed">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
