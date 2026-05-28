import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { projects } from '../../data/projects'
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const isPersonal = project.type === 'personal'
  const accentColor = project.accentColor

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass rounded-2xl overflow-hidden flex flex-col h-full group"
      style={{
        border: `1px solid rgba(30,58,95,0.8)`,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accentColor}40`
        e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(30,58,95,0.8)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Card header gradient bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-text-primary font-bold text-xl mb-0.5">{project.title}</h3>
            <p className="text-text-muted text-sm font-mono">{project.subtitle}</p>
          </div>
          <span
            className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full"
            style={isPersonal
              ? { background: 'rgba(123, 47, 190, 0.15)', color: '#C084FC', border: '1px solid rgba(123, 47, 190, 0.3)' }
              : { background: 'rgba(0, 212, 255, 0.1)', color: '#00D4FF', border: '1px solid rgba(0, 212, 255, 0.25)' }
            }
          >
            {isPersonal ? 'Personal' : 'Professional'}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.tagline}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5 flex-1">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
              <FiCheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
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
        <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'rgba(30,58,95,0.6)' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
            >
              <FiGithub size={16} />
              Frontend
            </a>
          )}
          {project.githubApi && (
            <a
              href={project.githubApi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
            >
              <FiGithub size={16} />
              Backend
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ml-auto"
              style={{ color: accentColor }}
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <span className="text-text-muted text-xs flex items-center gap-1">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: accentColor, opacity: 0.7 }}
              />
              Professional project — NDA restricted
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
