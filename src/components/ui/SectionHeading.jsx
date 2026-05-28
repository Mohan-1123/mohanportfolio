import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${alignClass}`}
    >
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px flex-1 max-w-[50px] bg-gradient-to-r from-transparent to-accent opacity-60" />
        <span className="text-accent text-xs sm:text-sm font-mono tracking-widest uppercase">{subtitle}</span>
        <div className="h-px flex-1 max-w-[50px] bg-gradient-to-l from-transparent to-accent opacity-60" />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
    </motion.div>
  )
}
