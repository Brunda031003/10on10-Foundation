import React from "react";

const Gallery = () => {
  const images = [
    "images/gallery/1.jpg",
    "images/gallery/2.jpg",
    "images/gallery/3.avif",
    "images/gallery/4.jpg",
    "images/gallery/5.jpg",
    "images/gallery/6.jpg",
    "images/gallery/7.webp",
    "images/gallery/8.jpeg",
  ];

  return (
    <section className="bg-[#0074B5] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-10 text-center">
          GALLERY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, index) => (
                <div 
                key={index} 
                className="w-full h-40 md:h-48 overflow-hidden rounded-lg shadow-lg"
                >
                <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 
                            border-2 border-white rounded-lg"
                />
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
