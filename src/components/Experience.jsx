import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experienceVideos, setExperienceVideos] = useState([]);
  const [changeVideos, setChangeVideos] = useState([]);

  const base = import.meta.env.BASE_URL || "/";

  const loadTxtFile = async (path) => {
    try {
      const res = await fetch(path);
      if (!res.ok) return [];

      const text = await res.text();
      return text
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.includes("|"))
        .map((line) => {
          const [title, link] = line.split("|").map((x) => x.trim());
          return { title, link };
        });
    } catch (err) {
      console.error("Error loading:", path, err);
      return [];
    }
  };

  const getRandomItems = (arr, count) =>
    [...arr].sort(() => 0.5 - Math.random()).slice(0, count);

  useEffect(() => {
    const fetchVideos = async () => {
      const experience = await loadTxtFile(
        `${base}videos/the_10on10_experience.txt`
      );
      const change = await loadTxtFile(
        `${base}videos/all_this_change_in_just_a_day.txt`
      );

      setExperienceVideos(getRandomItems(experience, 2));
      setChangeVideos(getRandomItems(change, 2));
    };

    fetchVideos();
  }, []);

  const VideoGrid = ({ videos }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {videos.map((v, i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={v.link}
              title={v.title}
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="experience"
      className="w-full py-16 px-4"
      style={{ backgroundColor: "#fea248" }}
    >
      {/* Heading 1 */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-10">
        THE 10on10 EXPERIENCE
      </h2>

      <VideoGrid videos={experienceVideos} />

      {/* Heading 2 */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mt-16 mb-10">
        ALL THIS CHANGE – IN JUST A DAY!
      </h2>

      <VideoGrid videos={changeVideos} />
    </section>
  );
};

export default Experience;
