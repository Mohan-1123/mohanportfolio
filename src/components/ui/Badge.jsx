import { motion } from 'framer-motion'

export default function Badge({ label, color = '#00D4FF', small = false }) {
  const size = small ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'

  return (
    <motion.span
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 10px ${color}55`,
      }}
      className={`inline-block rounded-full font-mono font-medium ${size} border transition-all duration-200 cursor-default`}
      style={{
        color: color,
        borderColor: `${color}44`,
        backgroundColor: `${color}12`,
      }}
    >
      {label}
    </motion.span>
  )
}
