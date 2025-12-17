import React, { useEffect, useState } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  const base = import.meta.env.BASE_URL || '/'

  // Function to load and parse a TXT file
  const loadTxtFile = async (path) => {
  try {
    const res = await fetch(path)
    if (!res.ok) {
      console.warn("Missing file:", path)
      return []
    }

    const text = await res.text()
    return text
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0 && line.includes("|"))   // ★ removes empty lines
  .map((line) => {
    const [title, link] = line.split("|").map((x) => x.trim())
    return { title, link }
  })

  } catch (err) {
    console.error("Failed loading", path, err)
    return []
  }
}


  const getRandom = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

    useEffect(() => {
      const fetchVideos = async () => {
      const eventOverview = await loadTxtFile(`${base}videos/event_overview.txt`)
      const interviews = await loadTxtFile(`${base}videos/interviews.txt`)
      const whatChanged = await loadTxtFile(`${base}videos/what_changed.txt`)



      const picks = [getRandom(eventOverview), getRandom(interviews), getRandom(whatChanged)].filter(Boolean)
      console.log('Videos loaded:', { eventOverviewLength: eventOverview.length, interviewsLength: interviews.length, whatChangedLength: whatChanged.length, picks })
      setVideos(picks)
    }

    fetchVideos();
  }, []);

  return (
    <section className="w-full py-16 px-6" style={{ backgroundColor: "white" }}>
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0074B5] mb-4">
          OUR VIDEOS
        </h2>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest activities, impact stories, and inspirational moments.
        </p>
      </div>

      {/* 3 Random Videos */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {videos.map((v, i) => (
          <div key={i} className="bg-[#0074B5] rounded-xl p-0 shadow-xl">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={v.link}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
