import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/north star/Gallery";
import NorthstarContent from "../components/north star/NorthstarContent";
import NorthStarLogo from "../components/north star/NorthStarLogo";
import Videos from "../components/north star/Videos";

export default function NorthStar() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section
      id="north-star"
      className="w-full bg-white"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <Navbar />
      <Gallery />
      <NorthstarContent />
      <NorthStarLogo />
      <Videos />
      <Footer />
    </section>
  );
}