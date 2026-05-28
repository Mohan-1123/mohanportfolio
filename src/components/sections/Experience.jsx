import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { experiences } from '../../data/experience'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Pulsing dot */}
        <div className="relative mt-6">
          <div
            className="w-5 h-5 rounded-full z-10 relative"
            style={{ backgroundColor: '#00D4FF', boxShadow: '0 0 0 4px rgba(0, 212, 255, 0.2)' }}
          />
          <div
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ backgroundColor: 'rgba(0, 212, 255, 0.3)' }}
          />
        </div>
        {/* Vertical line */}
        <div className="w-px flex-1 mt-3" style={{ background: 'linear-gradient(to bottom, #00D4FF55, transparent)' }} />
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-12 glass rounded-2xl p-6 md:p-8"
        style={{ border: '1px solid rgba(30,58,95,0.8)', borderLeft: '3px solid #00D4FF' }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-text-primary font-bold text-xl mb-1">{exp.role}</h3>
            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm">
              <span className="flex items-center gap-1.5">
                <FiBriefcase size={14} className="text-accent" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin size={14} className="text-accent" />
                {exp.location}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-accent"
              style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
            >
              <FiCalendar size={12} />
              {exp.duration}
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-success"
              style={{ background: 'rgba(100, 255, 218, 0.08)', border: '1px solid rgba(100, 255, 218, 0.2)' }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-3 mb-6">
          {exp.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
            >
              <span
                className="flex-shrink-0 mt-0.5 px-2 py-0.5 rounded font-mono font-bold text-xs text-background"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)', minWidth: '45px', textAlign: 'center' }}
              >
                {h.metric}
              </span>
              <span>{h.text}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="pt-4 border-t" style={{ borderColor: 'rgba(30,58,95,0.6)' }}>
          <p className="text-text-muted text-xs font-mono mb-3 uppercase tracking-wider">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
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
