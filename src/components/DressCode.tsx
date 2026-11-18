import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'

function DressIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M25 10c2 4 12 4 14 0l5 8-7 8 11 25H16l11-25-7-8z" /><path d="M27 27h10" /></svg>
}
function SuitIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M22 10 12 17l5 37h30l5-37-10-7-10 8z" /><path d="m22 10 10 15 10-15M32 25v29m-8-27 8 8 8-8" /></svg>
}

export function DressCode() {
  return (
    <motion.section id="dress-code" className="section-pad" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="label">A note on attire</p><h2 className="section-title">Dress code</h2>
      <div className="dress-tags">
        {[{ title: 'Ladies', text: wedding.dressCode.ladies, icon: <DressIcon /> }, { title: 'Gentlemen', text: wedding.dressCode.gentlemen, icon: <SuitIcon /> }].map((tag, index) =>
          <motion.article className="dress-tag corner-card" key={tag.title} initial={{ rotate: index === 0 ? -4 : 4, y: 20, opacity: 0 }} whileInView={{ rotate: index === 0 ? -1.5 : 1.5, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 130 }}>
            <span className="tag-hole" /><div className="dress-icon">{tag.icon}</div><h3>{tag.title}</h3><p>{tag.text}</p>
          </motion.article>
        )}
      </div>
      <p className="dress-note">{wedding.dressCode.note}</p>
    </motion.section>
  )
}
