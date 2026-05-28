import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { experiences } from '../../data/experience'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-3 sm:gap-6"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative mt-5">
          <div
            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full z-10 relative"
            style={{ backgroundColor: '#00D4FF', boxShadow: '0 0 0 4px rgba(0, 212, 255, 0.2)' }}
          />
          <div
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ backgroundColor: 'rgba(0, 212, 255, 0.3)' }}
          />
        </div>
        <div className="w-px flex-1 mt-2" style={{ background: 'linear-gradient(to bottom, #00D4FF55, transparent)' }} />
      </div>

      {/* Card */}
      <div
        className="flex-1 min-w-0 mb-10 glass rounded-2xl p-4 sm:p-6 md:p-8"
        style={{ border: '1px solid rgba(30,58,95,0.8)', borderLeft: '3px solid #00D4FF' }}
      >
        {/* Header — stacks on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div className="min-w-0">
            <h3 className="text-text-primary font-bold text-lg sm:text-xl mb-1 leading-tight">{exp.role}</h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-text-secondary text-sm">
              <span className="flex items-center gap-1.5">
                <FiBriefcase size={13} className="text-accent flex-shrink-0" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin size={13} className="text-accent flex-shrink-0" />
                {exp.location}
              </span>
            </div>
          </div>
          <div className="flex sm:flex-col items-start sm:items-end gap-2 flex-wrap">
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-accent whitespace-nowrap"
              style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
            >
              <FiCalendar size={11} />
              {exp.duration}
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-success whitespace-nowrap"
              style={{ background: 'rgba(100, 255, 218, 0.08)', border: '1px solid rgba(100, 255, 218, 0.2)' }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 mb-5">
          {exp.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="flex items-start gap-2 sm:gap-3 text-text-secondary text-sm leading-relaxed"
            >
              <span
                className="flex-shrink-0 mt-0.5 px-2 py-0.5 rounded font-mono font-bold text-xs text-background"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)', minWidth: '42px', textAlign: 'center' }}
              >
                {h.metric}
              </span>
              <span className="min-w-0">{h.text}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="pt-4 border-t" style={{ borderColor: 'rgba(30,58,95,0.6)' }}>
          <p className="text-text-muted text-xs font-mono mb-3 uppercase tracking-wider">Technologies Used</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {exp.tech.map(t => (
              <Badge key={t} label={t} color="#00D4FF" small />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Work Experience" subtitle="My Journey" />
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
