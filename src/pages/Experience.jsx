import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceHero from "../components/experience/ExperienceHero";
import ExperienceDescription from "../components/experience/ExperienceDescription";
import ProgramLogo from "../components/experience/ProgramLogo";
import ExperienceSponsors from "../components/experience/ExperienceSponsors";

export default function Experience() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section id="experience">
      <Navbar />
      <ExperienceHero />
      <ExperienceDescription />
      <ProgramLogo />
      <ExperienceSponsors />
      <Footer />
    </section>
  );
}