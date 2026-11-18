import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'

export function Timeline() {
  const weddingDay = new Date(wedding.date.iso).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  return (
    <section id="day" className="section-pad">
      <p className="label">{weddingDay}</p>
      <h2 className="section-title">The day</h2>
      <div className="timeline">
        {wedding.timeline.map((item, index) => <motion.article className="timeline-item" key={item.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
          <span className="timeline-marker" aria-hidden="true">✦</span><p className="label">{item.time}</p><h3>{item.title}</h3><p>{item.place}</p>
        </motion.article>)}
      </div>
    </section>
  )
}
