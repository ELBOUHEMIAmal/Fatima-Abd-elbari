import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import laceAccessory from '../assets/images/accessories1.png'

export function Menu() {
  return (
    <motion.section id="menu" className="section-pad" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="label">A taste of Menu</p><h2 className="section-title">At the table</h2>
    <img className="menu-ornament" src={laceAccessory} alt="" aria-hidden="true" />
      <div className="menu-card corner-card">
        {wedding.menu.courses.map((course) => <div className="menu-course" key={course.label}><p className="label">{course.label}</p>
          {course.items.map((item, index) => <div className="menu-option" key={item.name}>{index > 0 && <span className="menu-or">or</span>}<h3>{item.name}</h3><p>{item.detail}</p></div>)}
        </div>)}
      </div>
      <p className="menu-note">Please share any dietary needs in your RSVP.</p>
    </motion.section>
  )
}
