import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: '1px solid rgba(30,58,95,0.6)', background: 'rgba(2, 11, 24, 0.9)' }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-background text-xs"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)' }}
              >
                MK
              </div>
              <span className="text-text-secondary text-sm font-medium">Mohan Kumar Nulu</span>
            </div>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-text-muted text-sm">
            {['about', 'skills', 'projects', 'contact'].map(id => (
              <Link
                key={id}
                to={id}
                smooth
                duration={600}
                offset={-80}
                className="hover:text-accent transition-colors cursor-pointer capitalize"
              >
                {id}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/Mohan-1123', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/mohan-kumar-nulu', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:mohankumar8096@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-muted hover:text-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-text-muted text-xs" style={{ borderTop: '1px solid rgba(30,58,95,0.4)' }}>
          <p className="flex items-center justify-center gap-1.5">
            © {year} Mohan Kumar Nulu. Built with
            <FiHeart size={12} className="text-accent" />
            using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
