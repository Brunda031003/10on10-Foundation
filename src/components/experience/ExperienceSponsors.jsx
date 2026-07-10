export default function ExperienceSponsors() {
  const sponsors = [
    "/images/sponsors/vivero.png",
    "/images/sponsors/rotary.png",
    "/images/sponsors/apl.png",
    "/images/sponsors/brigade.png",
    "/images/sponsors/nps.png",
    "/images/sponsors/rv.png",
    "/images/sponsors/young-indians.png",
    "/images/sponsors/tie.png",
    "/images/sponsors/namma-yatri.png",
    "/images/sponsors/kirloskar.png",
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-gray-600 mb-10">
          Here are some of the institutions and organisations where we have delivered the 10on10 Experience Sessions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
          {sponsors.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt="Sponsor Logo"
                className="max-h-20 object-contain grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}