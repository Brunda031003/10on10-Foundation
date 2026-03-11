import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const sectionIds = ['home', 'about', 'impact', 'experience', 'blog']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el || !navRef.current) return

    const navHeight = navRef.current.offsetHeight
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight

    window.scrollTo({ top, behavior: 'smooth' })
  }

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

      if (isHomePage && window.scrollY < 50) {
        setActive('home')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) return

    let hasScrolled = false

    const observer = new IntersectionObserver(
      (entries) => {
        if (!hasScrolled) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-50% 0px -40% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const enableObserver = () => {
      hasScrolled = true
      window.removeEventListener('scroll', enableObserver)
    }

    window.addEventListener('scroll', enableObserver)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', enableObserver)
    }
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) return

    const hashId = location.hash.replace('#', '')
    if (!hashId) return

    const timer = window.setTimeout(() => {
      scrollToSection(hashId)
    }, 0)

    return () => window.clearTimeout(timer)
  }, [isHomePage, location.hash])

  const handleSectionNav = (e, id) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return
    e.preventDefault()

    if (!isHomePage) {
      navigate(`/#${id}`)
      setIsOpen(false)
      return
    }

    scrollToSection(id)
    setActive(id)
    setIsOpen(false)
  }

  const handleContactNav = (e) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return
    e.preventDefault()

    navigate('/contact')
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentActive = isHomePage ? active : 'contact'

  const linkClass = (id) =>
    `hover:text-[#005c8f] transition ${
      currentActive === id ? 'text-[#005c8f] font-semibold' : ''
    }`

  const sectionHref = (id) => (isHomePage ? `#${id}` : `/#${id}`)

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href={sectionHref('home')} onClick={(e) => handleSectionNav(e, 'home')} className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL || '/'}images/Logo.png`}
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        <ul className="hidden md:flex gap-6 text-[#0074B5] font-medium">
          <li><a href={sectionHref('home')} onClick={(e) => handleSectionNav(e, 'home')} className={linkClass('home')}>Home</a></li>
          <li><a href={sectionHref('about')} onClick={(e) => handleSectionNav(e, 'about')} className={linkClass('about')}>About</a></li>
          <li><a href={sectionHref('impact')} onClick={(e) => handleSectionNav(e, 'impact')} className={linkClass('impact')}>Stories of Success</a></li>
          <li><a href={sectionHref('experience')} onClick={(e) => handleSectionNav(e, 'experience')} className={linkClass('experience')}>10on10 Experience</a></li>
          <li><a href={sectionHref('blog')} onClick={(e) => handleSectionNav(e, 'blog')} className={linkClass('blog')}>Blog</a></li>
          <li><a href="/contact" onClick={handleContactNav} className={linkClass('contact')}>Contact Us</a></li>
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
          <li><a href={sectionHref('home')} onClick={(e) => handleSectionNav(e, 'home')} className={linkClass('home')}>Home</a></li>
          <li><a href={sectionHref('about')} onClick={(e) => handleSectionNav(e, 'about')} className={linkClass('about')}>About</a></li>
          <li><a href={sectionHref('impact')} onClick={(e) => handleSectionNav(e, 'impact')} className={linkClass('impact')}>Stories of Success</a></li>
          <li><a href={sectionHref('experience')} onClick={(e) => handleSectionNav(e, 'experience')} className={linkClass('experience')}>10on10 Experience</a></li>
          <li><a href={sectionHref('blog')} onClick={(e) => handleSectionNav(e, 'blog')} className={linkClass('blog')}>Blog</a></li>
          <li><a href="/contact" onClick={handleContactNav} className={linkClass('contact')}>Contact Us</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
