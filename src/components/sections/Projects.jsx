import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { projects } from '../../data/projects'
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const isPersonal = project.type === 'personal'
  const accentColor = project.accentColor

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass rounded-2xl overflow-hidden flex flex-col"
      style={{ border: '1px solid rgba(30,58,95,0.8)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accentColor}40`
        e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(30,58,95,0.8)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

      <div className="p-4 sm:p-6 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="min-w-0">
            <h3 className="text-text-primary font-bold text-lg leading-tight mb-0.5">{project.title}</h3>
            <p className="text-text-muted text-xs font-mono">{project.subtitle}</p>
          </div>
          <span
            className="flex-shrink-0 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
            style={isPersonal
              ? { background: 'rgba(123,47,190,0.15)', color: '#C084FC', border: '1px solid rgba(123,47,190,0.3)' }
              : { background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.25)' }
            }
          >
            {isPersonal ? 'Personal' : 'Professional'}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.tagline}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4 flex-1">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-xs sm:text-sm">
              <FiCheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
              <span className="min-w-0">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 6).map(t => (
            <Badge key={t} label={t} color={accentColor} small />
          ))}
          {project.tech.length > 6 && (
            <span className="text-text-muted text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
              +{project.tech.length - 6}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-3 border-t" style={{ borderColor: 'rgba(30,58,95,0.6)' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors font-medium">
              <FiGithub size={14} /> Frontend
            </a>
          )}
          {project.githubApi && (
            <a href={project.githubApi} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors font-medium">
              <FiGithub size={14} /> Backend
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium ml-auto transition-colors"
              style={{ color: accentColor }}>
              <FiExternalLink size={14} /> Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <span className="text-text-muted text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor, opacity: 0.7 }} />
              NDA restricted
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,31,53,0.3), transparent)' }}>
      <div className="container-custom">
        <SectionHeading title="Featured Projects" subtitle="What I've Built" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
