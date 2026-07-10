import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ThankYou from './pages/Thankyou.jsx'
import Experience from "./pages/Experience";
import NorthStar from "./pages/NorthStar.jsx";
import Momentum from "./pages/Momentum.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import MetaPixelTracker from "./components/MetaPixelTracker";

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MetaPixelTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/north-star" element={<NorthStar />} />
        <Route path="/momentum" element={<Momentum />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
