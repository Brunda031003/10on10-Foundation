import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYou() {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("event_id");

    if (window.fbq) {
      window.fbq('track', 'Lead', {}, { eventID: eventId });
    }

    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 5000);

  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">

        <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-10 text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Thank You!
          </h1>

          {/* Message */}
          <p className="text-gray-600 text-lg mb-8">
            Your request has been submitted successfully.
            <br />
            Our team will get in touch with you shortly.
          </p>

          {/* CTA Button */}
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Back to Home
          </Link>

        </div>

      </section>

      <Footer />
    </div>
  );
}
