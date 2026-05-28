import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = false, onClick }) {
  const base = `glass rounded-2xl ${className}`

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -6, boxShadow: '0 0 30px rgba(0, 212, 255, 0.15)', borderColor: 'rgba(0, 212, 255, 0.35)' }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={base}>{children}</div>
}
