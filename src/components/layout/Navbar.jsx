import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import useScrollSpy from '../../hooks/useScrollSpy'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Hire Me', to: 'hireme' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(navLinks.map(l => l.to), 120)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 backdrop-blur-md border-b'
            : 'py-5'
        }`}
        style={scrolled ? {
          backgroundColor: 'rgba(2, 11, 24, 0.92)',
          borderColor: 'rgba(30, 58, 95, 0.6)',
        } : {}}
      >
        <div className="container-custom flex items-center justify-between px-6">

          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
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

          {/* Right: Download Resume */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Mohan_Kumar_Nulu_Resume.pdf"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow text-background"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
            >
              <FiDownload size={15} />
              Resume
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 lg:hidden px-4"
          >
            <div className="glass rounded-2xl p-4 shadow-card" style={{ border: '1px solid rgba(30,58,95,0.8)' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer mb-1 ${
                      activeSection === link.to
                        ? 'text-accent bg-accent/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t" style={{ borderColor: 'rgba(30,58,95,0.6)' }}>
                <a
                  href="/resume.pdf"
                  download="Mohan_Kumar_Nulu_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-background justify-center"
                  style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FiDownload size={15} />
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
