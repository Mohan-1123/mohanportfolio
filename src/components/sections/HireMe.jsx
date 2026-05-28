import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/services'
import { FiCheckCircle, FiArrowRight, FiClock } from 'react-icons/fi'

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-6 flex flex-col group"
      style={{ border: '1px solid rgba(30,58,95,0.8)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${service.accentColor}44`
        e.currentTarget.style.boxShadow = `0 0 30px ${service.accentColor}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(30,58,95,0.8)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: `${service.accentColor}15`, border: `1px solid ${service.accentColor}30` }}
      >
        <Icon size={26} style={{ color: service.accentColor }} />
      </div>

      <h3 className="text-text-primary font-bold text-lg mb-2">{service.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

      <ul className="space-y-2">
        {service.highlights.map(h => (
          <li key={h} className="flex items-center gap-2 text-sm">
            <FiCheckCircle size={13} style={{ color: service.accentColor, flexShrink: 0 }} />
            <span className="text-text-secondary">{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function HireMe() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="hireme" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Let's Build Something Together" subtitle="Hire Me / Freelance" />

        {/* Sub heading */}
        <ScrollReveal>
          <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto mb-14">
            Available for <span className="text-accent font-semibold">freelance projects</span> and{' '}
            <span className="text-accent font-semibold">full-time roles</span>. I bring production-grade MERN expertise
            to projects of any scale — from MVPs to enterprise platforms.
          </p>
        </ScrollReveal>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA callout box */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(123, 47, 190, 0.08) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.06) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
              style={{ background: 'rgba(100, 255, 218, 0.1)', color: '#64FFDA', border: '1px solid rgba(100, 255, 218, 0.25)' }}
            >
              <FiClock size={14} />
              Typical response within 24 hours
            </div>

            <h3 className="text-text-primary text-3xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8">
              Whether it's a new product, a feature addition, or performance optimization —
              I'd love to hear about it and discuss how I can help.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer text-lg w-full sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
              >
                Get in Touch
                <FiArrowRight size={20} />
              </Link>
              <a
                href="mailto:mohankumar8096@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 text-base w-full sm:w-auto break-all text-center"
                style={{ borderColor: 'rgba(0,212,255,0.3)', color: '#00D4FF', background: 'rgba(0,212,255,0.05)' }}
              >
                mohankumar8096@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
