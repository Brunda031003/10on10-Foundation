import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  const navRef = useRef(null)

  /* ---------------- Scroll background change ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ---------------- Set navbar height dynamically ---------------- */
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

  /* ---------------- Active link observer ---------------- */
  useEffect(() => {
    const ids = ['home', 'about', 'impact', 'experience', 'footer']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: 0
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* ---------------- Smooth scroll handler ---------------- */
  const handleNavClick = (e, id) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return
    e.preventDefault()

    const el = document.getElementById(id)
    if (!el || !navRef.current) return

    const navHeight = navRef.current.offsetHeight
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight

    window.scrollTo({ top, behavior: 'smooth' })
    setIsOpen(false)
  }

  const linkClass = (id) =>
    `hover:text-[#005c8f] transition ${
      active === id ? 'text-[#005c8f] font-semibold' : ''
    }`

  /* ---------------- Intercept in-page anchor clicks ---------------- */
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest?.('a')
      if (!a) return

      const href = a.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      if (e.metaKey || e.ctrlKey || e.button === 1) return

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el || !navRef.current) return

      e.preventDefault()

      const navHeight = navRef.current.offsetHeight
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight

      window.scrollTo({ top, behavior: 'smooth' })
      setIsOpen(false)
    }

    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL || '/'}images/Logo.png`}
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[#0074B5] font-medium">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={linkClass('home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={linkClass('about')}>About</a></li>
          <li><a href="#impact" onClick={(e) => handleNavClick(e, 'impact')} className={linkClass('impact')}>Stories of Success</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className={linkClass('experience')}>10on10 Experience</a></li>
          <li><a href="#footer" onClick={(e) => handleNavClick(e, 'footer')} className={linkClass('footer')}>Contact Us</a></li>
        </ul>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-[#0074B5] font-medium bg-white/90 backdrop-blur-lg shadow-md">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={linkClass('home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={linkClass('about')}>About</a></li>
          <li><a href="#impact" onClick={(e) => handleNavClick(e, 'impact')} className={linkClass('impact')}>Stories of Success</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className={linkClass('experience')}>10on10 Experience</a></li>
          <li><a href="#footer" onClick={(e) => handleNavClick(e, 'footer')} className={linkClass('footer')}>Contact Us</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
