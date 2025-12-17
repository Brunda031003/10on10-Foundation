import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // Detect scroll to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Observe sections and update active link
  useEffect(() => {
    const ids = ['home', 'about', 'program', 'impact', 'blog', 'review']
    const options = {
      root: null,
      rootMargin: '0px 0px -40% 0px', // trigger when section is near middle
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, options)

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const linkClass = (id) => `hover:text-[#005c8f] transition ${active === id ? 'text-[#005c8f] font-semibold' : ''}`

  const navRef = useRef(null)

  const handleNavClick = (e, id) => {
    // allow middle-click / cmd-click to open in new tab
    if (e.metaKey || e.ctrlKey || e.button === 1) return
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const navHeight = navRef.current ? navRef.current.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
    setIsOpen(false)
  }

  // Intercept other in-page anchor clicks (e.g., buttons inside sections)
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest && e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      // allow normal behavior for new-tab or external anchors
      if (e.metaKey || e.ctrlKey || e.button === 1) return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
      setIsOpen(false)
    }

    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [navRef])

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center">
          {/** use BASE_URL so images work on GitHub Pages subpath */}
          <img src={`${import.meta.env.BASE_URL || '/'}images/Logo.png`} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[#0074B5] font-medium">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={linkClass('home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={linkClass('about')}>About</a></li>
          <li><a href="#program" onClick={(e) => handleNavClick(e, 'program')} className={linkClass('program')}>Program</a></li>
          <li><a href="#impact" onClick={(e) => handleNavClick(e, 'impact')} className={linkClass('impact')}>Impact</a></li>
          {/* <li><a href="#blog" onClick={(e) => handleNavClick(e, 'blog')} className={linkClass('blog')}>Blog</a></li>
          <li><a href="#review" onClick={(e) => handleNavClick(e, 'review')} className={linkClass('review')}>Review</a></li> */}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0074B5] focus:outline-none">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-[#0074B5] font-medium bg-white/90 backdrop-blur-lg shadow-md">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={linkClass('home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={linkClass('about')}>About</a></li>
          <li><a href="#program" onClick={(e) => handleNavClick(e, 'program')} className={linkClass('program')}>Program</a></li>
          <li><a href="#impact" onClick={(e) => handleNavClick(e, 'impact')} className={linkClass('impact')}>Impact</a></li>
          {/* <li><a href="#blog" onClick={(e) => handleNavClick(e, 'blog')} className={linkClass('blog')}>Blog</a></li>
          <li><a href="#review" onClick={(e) => handleNavClick(e, 'review')} className={linkClass('review')}>Review</a></li> */}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
