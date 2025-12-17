import { FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa"; // using react-icons

export default function Footer() {
  return (
    <footer className="w-full py-8" style={{ backgroundColor: "#09487D" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-6">
        
        {/* Left Side - Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-white">
          <span className="font-semibold">Contact Us:</span>
          <a
            href="https://youtube.com/@10on10social"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <FaYoutube /> YouTube
          </a>
          <a
            href="https://www.instagram.com/10on10foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="mailto:info@10on10.org"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <FaEnvelope /> Mail
          </a>
        </div>

        {/* Right Side - Logo */}
        <div className="flex items-center justify-center">
          <img
            src="images/logo_white.png" 
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Optional: Small Copyright */}
      <div className="mt-6 text-center text-white/70 text-sm flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
      <span>
        &copy; {new Date().getFullYear()} 10on10 Foundation. All rights reserved.
      </span>

      <span className="hidden md:inline">|</span>

      <span>
        Designed & Developed by{" "}
        <a
          href="https://www.instagram.com/firstecho.in?igsh=MmRoNDB4Z2R2aGU="
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white/80 hover:text-white underline underline-offset-2"
        >
          First Echo
        </a>
      </span>
    </div>

    </footer>
  );
}
