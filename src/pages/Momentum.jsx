import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MomentumTopContent from "../components/momentum/MomentumTopContent";
import MomentumLogo from "../components/momentum/MomentumLogo";
import MomentumJourneyImage from "../components/momentum/MomentumJourneyImage";
import MomentumTestimonials from "../components/momentum/MomentumTestimonials";

export default function Momentum() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section id="momentum" className="w-full bg-white" style={{ paddingTop: "var(--nav-height)" }}>
      <Navbar />
      <MomentumTopContent />
      <MomentumLogo />
      <MomentumJourneyImage />
      <MomentumTestimonials />
      <Footer />
    </section>
  );
}