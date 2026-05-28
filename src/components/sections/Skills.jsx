import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { skillCategories } from '../../data/skills'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
}

function SkillCategory({ category, icon, skills, delay }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-6"
      style={{ border: '1px solid rgba(30,58,95,0.8)' }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <h3 className="text-text-primary font-bold text-lg">{category}</h3>
      </div>

      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {skills.map(skill => (
          <motion.span
            key={skill.name}
            variants={badgeVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: `0 0 12px ${skill.color}55`,
              y: -2,
            }}
            className="inline-block text-sm px-3 py-1.5 rounded-full font-mono font-medium cursor-default transition-all duration-200"
            style={{
              color: skill.color,
              borderColor: `${skill.color}40`,
              backgroundColor: `${skill.color}10`,
              border: `1px solid ${skill.color}40`,
            }}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,31,53,0.3), transparent)' }}>
      <div className="container-custom">
        <SectionHeading title="Technical Skills" subtitle="What I Work With" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategory
              key={cat.category}
              {...cat}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
