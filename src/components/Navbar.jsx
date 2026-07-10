import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const activePath = location.pathname

  useEffect(() => {
    const setNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          '--nav-height',
          `${navRef.current.offsetHeight}px`
        )
      }
    }

    setNavHeight()
    window.addEventListener('resize', setNavHeight)
    return () => window.removeEventListener('resize', setNavHeight)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactNav = (e) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return
    e.preventDefault()

    navigate('/contact')
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (path) => activePath === path

  const linkClass = (path) =>
    `hover:text-[#005c8f] transition ${
      isActive(path) ? 'text-[#005c8f] font-semibold underline underline-offset-4' : ''
    }`

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Experience', to: '/experience' },
    { label: 'North Star', to: '/north-star' },
    { label: 'Momentum', to: '/momentum' },
    { label: 'Testimonials', to: '/testimonials' },
  ]

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL || '/'}images/Logo.png`}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden md:flex gap-6 text-[#0074B5] font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className={linkClass(item.to)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/contact" onClick={handleContactNav} className={linkClass('/contact')}>
              Contact Us
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0074B5] focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-[#0074B5] font-medium bg-white/90 backdrop-blur-lg shadow-md">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={() => setIsOpen(false)} className={linkClass(item.to)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/contact" onClick={handleContactNav} className={linkClass('/contact')}>
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
