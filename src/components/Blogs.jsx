import React from "react";

const Blogs = () => {
  const blogs = [
    {
      title: "How Youth Leadership Transforms Communities",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      img: "images/gallery/1.jpg",
    },
    {
      title: "10 Best Ways to Improve Mental Strength",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      img: "images/gallery/1.jpg",
    },
  ];

  return (
    <div id="blog" className="bg-[#FF9933] py-16 px-6 md:px-12 scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-5xl md:text-6xl font-bold text-center text-Black mb-12">
        BLOGS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative h-auto min-h-[500px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={blog.img}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content (Now Full) */}
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
