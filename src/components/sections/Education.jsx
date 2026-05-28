import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { educationData } from '../../data/education'
import { FiAward, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

function EduCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const isCert = item.type === 'certification'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-6 h-full"
      style={{
        border: `1px solid ${isCert ? 'rgba(0, 212, 255, 0.25)' : 'rgba(123, 47, 190, 0.25)'}`,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={isCert
          ? { background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.25)' }
          : { background: 'rgba(123, 47, 190, 0.1)', border: '1px solid rgba(123, 47, 190, 0.25)' }
        }
      >
        {isCert
          ? <FiAward size={26} className="text-accent" />
          : <FiBook size={26} style={{ color: '#C084FC' }} />
        }
      </div>

      {/* Type pill */}
      <div className="mb-3">
        <span
          className="text-xs font-mono font-medium px-2.5 py-1 rounded-full"
          style={isCert
            ? { background: 'rgba(0, 212, 255, 0.08)', color: '#00D4FF', border: '1px solid rgba(0, 212, 255, 0.2)' }
            : { background: 'rgba(123, 47, 190, 0.08)', color: '#C084FC', border: '1px solid rgba(123, 47, 190, 0.2)' }
          }
        >
          {isCert ? 'Certification' : 'Education'}
        </span>
      </div>

      <h3 className="text-text-primary font-bold text-xl mb-1">{item.title}</h3>
      <p className="font-semibold mb-3" style={{ color: isCert ? '#00D4FF' : '#C084FC' }}>{item.subtitle}</p>

      <div className="space-y-1.5 text-text-secondary text-sm mb-4">
        <div className="flex items-center gap-2">
          <FiBook size={13} className="flex-shrink-0 opacity-60" />
          {item.institution}
        </div>
        <div className="flex items-center gap-2">
          <FiCalendar size={13} className="flex-shrink-0 opacity-60" />
          {item.duration}
        </div>
        {item.location && (
          <div className="flex items-center gap-2">
            <FiMapPin size={13} className="flex-shrink-0 opacity-60" />
            {item.location}
          </div>
        )}
        {item.cgpa && (
          <div className="flex items-center gap-2 mt-2">
            <span className="font-semibold text-text-primary">CGPA: {item.cgpa}</span>
          </div>
        )}
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>

      {item.skills && (
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map(s => (
            <Badge key={s} label={s} color="#00D4FF" small />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,31,53,0.2), transparent)' }}>
      <div className="container-custom">
        <SectionHeading title="Education & Certifications" subtitle="My Background" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((item, i) => (
            <EduCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
