import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { downloadCalendarInvite } from '../utils/ics'

const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const weddingDate = new Date(wedding.date.iso)
const monthYear = weddingDate.getFullYear()
const monthIndex = weddingDate.getMonth()
const monthName = weddingDate.toLocaleDateString('en-US', { month: 'long' })
const daysInMonth = new Date(monthYear, monthIndex + 1, 0).getDate()
const mondayOffset = (new Date(monthYear, monthIndex, 1).getDay() + 6) % 7

export function CalendarSave() {
  return (
    <motion.section id="save-date" className="section-pad" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="label">Mark your calendar</p>
      <h2 className="section-title">Save the date</h2>
      <p className="calendar-month">{monthName} <span>{monthYear}</span></p>
      <div className="calendar-grid" aria-label={`${monthName} ${monthYear}`}>
        {weekdays.map((day, index) => <span className="calendar-weekday label" key={`${day}-${index}`}>{day}</span>)}
        {Array.from({ length: mondayOffset }, (_, index) => <span key={`blank-${index}`} />)}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1
          return <span key={day} className={day === weddingDate.getDate() ? 'calendar-day wedding-day' : 'calendar-day'}>{day}</span>
        })}
      </div>
      <button className="button button-outline" onClick={downloadCalendarInvite}>Add to calendar</button>
    </motion.section>
  )
}
