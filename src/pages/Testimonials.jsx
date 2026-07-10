import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Impact from "../components/testimonial/Impact";

export default function Testimonials() {
	return (
		<section id="testimonials" className="w-full bg-white" style={{ paddingTop: "var(--nav-height)" }}>
			<Navbar />
			<Impact />
			<Footer />
		</section>
	);
}
