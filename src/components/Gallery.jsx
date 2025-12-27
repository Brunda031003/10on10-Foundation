// import React, { useMemo } from "react";

// const Gallery = () => {
//   // Auto-import all images from gallery folder (Vite latest syntax)
//   const allImages = Object.values(
//   import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,avif}", {
//     eager: true,
//     query: "?url",
//     import: "default",
//   })
// );


//   // Pick 8 random images ONCE per page load
//   const randomImages = useMemo(() => {
//     const shuffled = [...allImages].sort(() => Math.random() - 0.5);
//     return shuffled.slice(0, 8);
//   }, [allImages]);

//   return (
//     <section className="bg-[#0074B5] py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center">
//           GALLERY
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
//           {randomImages.map((img, index) => (
//             <div
//               key={index}
//               className="w-full h-40 md:h-48 overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={img}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 border-2 border-white rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React, { useMemo } from "react";

const Gallery = () => {
  // Import student images
  const studentImages = Object.values(
    import.meta.glob("../assets/gallery/students/*.{jpg,jpeg,png,webp,avif}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  );

  // Import adult images
  const adultImages = Object.values(
    import.meta.glob("../assets/gallery/adults/*.{jpg,jpeg,png,webp,avif}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  );

  // Pick 4 random student images (row 1)
  const randomStudents = useMemo(() => {
    const shuffled = [...studentImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [studentImages]);

  // Pick 4 random adult images (row 2)
  const randomAdults = useMemo(() => {
    const shuffled = [...adultImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [adultImages]);

  // Combine for rendering
  const galleryImages = [...randomStudents, ...randomAdults];

  return (
    <section className="bg-[#1b81bc] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center">
          GALLERY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="w-full h-40 md:h-48 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 border-2 border-white rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
