import SectionHeading from '../ui/SectionHeading'
import StatCounter from '../ui/StatCounter'
import ScrollReveal from '../ui/ScrollReveal'
import { stats } from '../../data/education'
import { motion } from 'framer-motion'
import { FiCode, FiZap, FiUsers, FiAward } from 'react-icons/fi'

const traits = [
  { icon: FiCode, label: 'Clean Code Advocate', desc: 'TypeScript-first, reusable components, zero runtime errors' },
  { icon: FiZap, label: 'Performance Focused', desc: '40% faster APIs, optimized MongoDB pipelines' },
  { icon: FiUsers, label: 'Team Player', desc: 'Mentored juniors, code reviews, Agile sprints' },
  { icon: FiAward, label: 'Accessibility Champion', desc: 'WCAG compliant across all modules' },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Bio */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm a <span className="text-accent font-semibold">Full Stack MERN Engineer</span> with 4+ years of hands-on production experience at Caprus IT, Hyderabad. I architect and ship full-stack applications — from database schema design to React UIs to cloud deployments on AWS EC2.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                My work spans education platforms, digital marketplaces, and real-time networking apps. I'm known for writing <span className="text-text-primary font-medium">scalable, maintainable TypeScript</span>, designing <span className="text-text-primary font-medium">role-based access systems</span>, and integrating AI services like <span className="text-text-primary font-medium">Azure Cognitive Services</span> and <span className="text-text-primary font-medium">Gemini API</span>.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Beyond code, I mentor junior developers, champion WCAG accessibility, and collaborate in fast-moving Agile teams. I'm currently open to <span className="text-success font-semibold">full-time opportunities</span> and <span className="text-success font-semibold">freelance projects</span>.
              </p>

              {/* Traits */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {traits.map(({ icon: Icon, label, desc }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-4 transition-all duration-200"
                    style={{ border: '1px solid rgba(30,58,95,0.8)' }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={16} className="text-accent flex-shrink-0" />
                      <span className="text-text-primary text-sm font-semibold">{label}</span>
                    </div>
                    <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Stats */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            {/* Tech stack mini showcase */}
            <div className="mt-8 glass rounded-2xl p-6" style={{ border: '1px solid rgba(30,58,95,0.8)' }}>
              <p className="text-text-secondary text-sm font-mono mb-4 tracking-wider uppercase">Core Stack</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'].map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg text-sm font-mono font-medium text-accent"
                    style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
