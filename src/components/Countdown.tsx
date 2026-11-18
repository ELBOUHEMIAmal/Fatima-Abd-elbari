import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { useCountdown } from '../hooks/useCountdown'

export function Countdown() {
  const time = useCountdown(wedding.date.iso)
  return (
    <motion.section id="countdown" className="section-pad section-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="label">Until we say “I do”</p>
      <h2 className="section-title">The countdown</h2>
      <div className="countdown-grid" aria-live="off">
        {Object.entries(time).map(([label, value]) => <div className="count-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><span className="label">{label}</span></div>)}
      </div>
    </motion.section>
  )
}
