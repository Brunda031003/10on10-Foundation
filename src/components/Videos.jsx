import React, { useEffect, useState } from "react";

const Videos = () => {
  const [studentVideos, setStudentVideos] = useState([]);
  const [adultVideos, setAdultVideos] = useState([]);

  const base = import.meta.env.BASE_URL || "/";

  // Load & parse TXT file
  const loadTxtFile = async (path) => {
    try {
      const res = await fetch(path);
      if (!res.ok) {
        console.warn("Missing file:", path);
        return [];
      }

      const text = await res.text();
      return text
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && line.includes("|"))
        .map((line) => {
          const [title, link] = line.split("|").map((x) => x.trim());
          return { title, link };
        });
    } catch (err) {
      console.error("Failed loading", path, err);
      return [];
    }
  };

  // Pick N random items
  const pickRandom = (arr, count) => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const students = await loadTxtFile(
        `${base}videos/stories_of_transformation_students.txt`
      );
      const adults = await loadTxtFile(
        `${base}videos/stories_of_transformation_adults.txt`
      );

      setStudentVideos(pickRandom(students, 3));
      setAdultVideos(pickRandom(adults, 3));
    };

    fetchVideos();
  }, []);

  return (
    <section className="w-full py-16 px-6 bg-white">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0074B5] mb-4">
          Stories Of Transformation
        </h2>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest activities, impact stories, and inspirational moments.
        </p>
      </div>

      {/* STUDENTS ROW */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {studentVideos.map((v, i) => (
            <div key={`student-${i}`} className="bg-[#0074B5] rounded-xl shadow-xl">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={v.link}
                  title={v.title}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ADULTS ROW */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {adultVideos.map((v, i) => (
            <div key={`adult-${i}`} className="bg-[#0074B5] rounded-xl shadow-xl">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={v.link}
                  title={v.title}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
