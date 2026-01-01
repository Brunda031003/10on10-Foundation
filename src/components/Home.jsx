import React, { useMemo } from "react";

const Home = () => {
  const base = import.meta.env.BASE_URL || "/";

  const images = [
    `${base}images/landing/2.jpg`,
    `${base}images/landing/3.jpg`,
    `${base}images/landing/4.jpg`,
    `${base}images/landing/5.jpg`,
    `${base}images/landing/6.jpg`,
    `${base}images/landing/7.jpg`,
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
