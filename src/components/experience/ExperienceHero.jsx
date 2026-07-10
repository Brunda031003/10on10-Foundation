import { useMemo } from "react";

export default function ExperienceHero() {
  const images = [
    "/images/experience/hero1.webp",
    "/images/experience/hero2.webp",
    "/images/experience/hero3.webp",
    "/images/experience/hero4.webp",
  ];

  const selectedImage = useMemo(() => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }, []);

  return (
    <section
      className="w-full bg-white scroll-mt-20 md:scroll-mt-24"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <div className="w-full">
        <img
        src={selectedImage}
        alt="10on10 Experience"
        className="w-full h-[320px] md:h-[620px] object-cover object-center block"
        />
      </div>
    </section>
  );
}