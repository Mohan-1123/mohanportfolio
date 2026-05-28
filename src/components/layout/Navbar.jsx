import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import useScrollSpy from '../../hooks/useScrollSpy'

const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1mDMG0-kVr5aQyWnl1hDOOYHbBxgZceg3'

const navLinks = [
  { label: 'About',      to: 'about'      },
  { label: 'Skills',     to: 'skills'     },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects',   to: 'projects'   },
  { label: 'Hire Me',    to: 'hireme'     },
  { label: 'Contact',    to: 'contact'    },
]

export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false)
  const [menuOpen,   setMenuOpen]  = useState(false)
  const activeSection = useScrollSpy(navLinks.map(l => l.to), 120)

  // Close on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  // Close on Escape — Phase 4 accessibility
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 backdrop-blur-md border-b' : 'py-4'
        }`}
        style={scrolled ? {
          backgroundColor: 'rgba(2, 11, 24, 0.95)',
          borderColor: 'rgba(30, 58, 95, 0.6)',
        } : {}}
      >
        <div className="container-custom flex items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-background text-sm tracking-tight"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
              >
                MK
              </div>
              <span className="hidden sm:block text-text-primary font-semibold text-sm">
                Mohan <span className="text-accent">Kumar</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  activeSection === link.to
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {activeSection === link.to && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow text-background"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
            >
              <FiDownload size={15} />
              Resume
            </a>

            {/* Hamburger — Phase 4: aria-expanded + aria-controls */}
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen backdrop — blocks content bleed-through */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: 'rgba(2, 11, 24, 0.85)', backdropFilter: 'blur(4px)' }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-50 lg:hidden px-3 sm:px-4"
          >
            <div
              className="rounded-2xl p-3 shadow-card"
              style={{
                background: 'rgba(9, 22, 42, 0.98)',
                border: '1px solid rgba(30,58,95,0.9)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Nav links */}
              <nav>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer mb-1 ${
                        activeSection === link.to
                          ? 'text-accent'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                      style={activeSection === link.to
                        ? { backgroundColor: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.15)' }
                        : { border: '1px solid transparent' }
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Resume button — compact, not full-width */}
              <div className="pt-3 mt-1 border-t flex justify-center" style={{ borderColor: 'rgba(30,58,95,0.6)' }}>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
