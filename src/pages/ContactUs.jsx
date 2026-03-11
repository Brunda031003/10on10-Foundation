import { FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />
    <section
      id="contact"
      className="bg-[#1b81bc] px-4 pt-24 pb-10 md:px-10 md:pt-32 md:pb-16"
    >
      <div className="max-w-7xl mx-auto">

      {/* Embedded Form */}
      <div className="w-full flex justify-center px-4">
  <div className="w-full max-w-4xl min-h-[1100px]">
    <iframe
      src="https://app.10on10.net/enquiry"
      title="Request Call Back"
      className="w-full h-[1100px] md:h-[1050px] lg:h-[1000px] border-0 rounded-xl shadow-lg"
    />
  </div>
</div>
      </div>
    </section>
      <Footer />
    </>
  );
}