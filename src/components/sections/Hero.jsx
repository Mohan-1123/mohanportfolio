import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123, 47, 190, 0.06) 0%, transparent 60%), #020B18' }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123, 47, 190, 0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container-custom section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{ borderColor: 'rgba(100, 255, 218, 0.3)', backgroundColor: 'rgba(100, 255, 218, 0.05)' }}
            >
              <span className="animate-pulse-ring w-2 h-2 rounded-full bg-success inline-block" />
              <span className="text-success text-sm font-medium">Available for Full-time & Freelance</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
            >
              <span className="text-gradient-animate">Mohan Kumar</span>
              <br />
              <span className="text-text-primary">Nulu</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold mb-4 h-8"
              style={{ color: '#00D4FF' }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Engineer', 2000,
                  'MERN Stack Developer', 2000,
                  'React + Node.js Specialist', 2000,
                  'Open to Freelance Projects', 2000,
                  'TypeScript Enthusiast', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building scalable web apps that perform at scale —{' '}
              <span className="text-accent font-medium">4+ years</span> of production experience,{' '}
              <span className="text-accent font-medium">3 shipped products</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="/resume.pdf"
                download="Mohan_Kumar_Nulu_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-glow"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
              >
                <FiDownload size={18} />
                Download Resume
              </a>

              <Link
                to="projects"
                smooth
                duration={600}
                offset={-80}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-accent text-accent transition-all duration-300 hover:bg-accent hover:text-background hover:scale-105 hover:shadow-glow cursor-pointer"
              >
                View Projects
                <FiArrowRight size={18} />
              </Link>

              <Link
                to="hireme"
                smooth
                duration={600}
                offset={-80}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  borderColor: 'rgba(123, 47, 190, 0.6)',
                  color: '#C084FC',
                  background: 'rgba(123, 47, 190, 0.08)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(123, 47, 190, 0.2)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(123, 47, 190, 0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(123, 47, 190, 0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Hire Me / Freelance
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Mohan-1123', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com/in/mohan-kumar-nulu', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:mohankumar8096@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary transition-colors duration-200 hover:text-accent"
                  style={{ border: '1px solid rgba(30,58,95,0.8)' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            {/* Rotating outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00D4FF, #7B2FBE, transparent, #00D4FF)',
                padding: '3px',
                borderRadius: '50%',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glow behind photo */}
            <div
              className="absolute inset-2 rounded-full"
              style={{ boxShadow: '0 0 60px rgba(0, 212, 255, 0.2), 0 0 120px rgba(123, 47, 190, 0.15)', borderRadius: '50%' }}
            />

            {/* Photo container */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{ border: '3px solid rgba(0, 212, 255, 0.3)' }}
            >
              {/* Placeholder avatar when no photo */}
              <div
                className="w-full h-full flex items-center justify-center text-7xl font-bold"
                style={{ background: 'linear-gradient(135deg, #0D1F35, #112240)' }}
              >
                <span className="text-gradient" style={{ fontSize: '100px' }}>MK</span>
              </div>
            </div>

            {/* Floating tech pills */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-background"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)', boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)' }}
            >
              React Expert
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
              style={{ background: 'rgba(123, 47, 190, 0.2)', border: '1px solid rgba(123, 47, 190, 0.5)', color: '#C084FC', boxShadow: '0 4px 15px rgba(123, 47, 190, 0.3)' }}
            >
              Node.js + MongoDB
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="animate-bounce-chevron">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path d="M1 1L10 10L19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
