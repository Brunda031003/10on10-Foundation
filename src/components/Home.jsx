// import React, { useMemo } from 'react'

// const Home = () => {
//   const base = import.meta.env.BASE_URL || '/'

//   // List all hero images here
//   const images = [
//     `${base}images/landing/1.png`,
//     `${base}images/landing/2.jpg`,
//     `${base}images/landing/3.jpeg`,
//     `${base}images/landing/4.jpg`,
//     `${base}images/landing/5.jpg`,
//   ]

//   // Pick a random image ONLY once per page load
//   const randomImage = useMemo(() => {
//     const index = Math.floor(Math.random() * images.length)
//     return images[index]
//   }, [])

//   return (
//     <section id="home" className="w-full relative scroll-mt-20 md:scroll-mt-24">
      
//       {/* Desktop view: background cover */}
//       <div
//         className="hidden md:block w-full h-screen bg-top bg-cover"
//         style={{ backgroundImage: `url(${randomImage})` }}
//       />

//       {/* Mobile view */}
//       <div className="md:hidden w-full pt-[60px]">
//         <img
//           src={randomImage}
//           alt="Landing"
//           className="w-full h-auto object-contain block"
//         />
//       </div>
//     </section>
//   )
// }

// export default Home

import React, { useMemo } from "react";

const Home = () => {
  const base = import.meta.env.BASE_URL || "/";

  const images = [
    `${base}images/landing/1.png`,
    `${base}images/landing/2.jpg`,
    `${base}images/landing/3.jpeg`,
    `${base}images/landing/4.jpg`,
    `${base}images/landing/5.jpg`,
    `${base}images/landing/6.jpeg`,
    `${base}images/landing/7.jpeg`,
  ];

  const randomImage = useMemo(() => {
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  return (
    <section
      id="home"
      style={{ paddingTop: "var(--nav-height)" }}
      className="w-full scroll-mt-20 md:scroll-mt-24"
    >
      <img
        src={randomImage}
        alt="Landing"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default Home;
