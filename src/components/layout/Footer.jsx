import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6"
      style={{ borderTop: '1px solid rgba(30,58,95,0.6)', background: 'rgba(2,11,24,0.95)' }}>
      <div className="container-custom">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">

          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-background text-xs"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}>
                MK
              </div>
              <span className="text-text-secondary text-sm font-medium">Mohan Kumar Nulu</span>
            </div>
          </Link>

          {/* Nav links — wrap on very small screens */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-text-muted text-sm">
            {['about', 'skills', 'projects', 'hireme', 'contact'].map(id => (
              <Link key={id} to={id} smooth duration={600} offset={-80}
                className="hover:text-accent transition-colors cursor-pointer capitalize">
                {id === 'hireme' ? 'Hire Me' : id}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {[
              { icon: FiGithub,   href: 'https://github.com/Mohan-1123',               label: 'GitHub'   },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/mohan-kumar-nulu',     label: 'LinkedIn' },
              { icon: FiMail,     href: 'mailto:mohankumar8096@gmail.com',              label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-muted hover:text-accent transition-colors"
                style={{ border: '1px solid rgba(30,58,95,0.6)' }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-5 text-center text-text-muted text-xs"
          style={{ borderTop: '1px solid rgba(30,58,95,0.4)' }}>
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            © {year} Mohan Kumar Nulu. Built with
            <FiHeart size={11} className="text-accent" />
            React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
