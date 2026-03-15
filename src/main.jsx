import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ThankYou from './pages/Thankyou.jsx'
import MetaPixelTracker from "./components/MetaPixelTracker";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MetaPixelTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
