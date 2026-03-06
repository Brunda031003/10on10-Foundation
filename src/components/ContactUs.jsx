import { FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="bg-[#1b81bc] py-10 md:py-16 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
        CONTACT US
      </h2>

      {/* Social Links */}
      {/* <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
        <a
          href="https://youtube.com/@10on10social"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-red-600 hover:opacity-80"
        >
          <FaYoutube size={22} /> YouTube
        </a>

        <a
          href="https://www.instagram.com/10on10foundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-600 hover:opacity-80"
        >
          <FaInstagram size={22} /> Instagram
        </a>

        <a
          href="mailto:info@10on10.org"
          className="flex items-center gap-2 text-blue-600 hover:opacity-80"
        >
          <FaEnvelope size={22} /> info@10on10.org
        </a>
      </div> */}

      {/* Embedded Form */}
      <div className="w-full flex justify-center px-4">
  <div className="w-full max-w-4xl">
    <iframe
      src="https://app.10on10.net/enquiry"
      title="Request Call Back"
      scrolling="no"
      className="w-full h-[980px] md:h-[1000px] lg:h-[950px] border-0 rounded-xl shadow-lg"
    />
  </div>
</div>
      </div>
    </section>
  );
}