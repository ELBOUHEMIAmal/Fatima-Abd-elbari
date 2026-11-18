import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { Divider } from './Divider'
import flowerPair from '../assets/images/flower3.png'
import butterfly from '../assets/images/pappion.png'

export function Hero({ guestName }: { guestName: string }) {
  return (
    <motion.section id="home" className="hero-section section-pad" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <img className="hero-decor hero-flower-pair" src={flowerPair} alt="" />
      <img className="hero-decor hero-butterfly" src={butterfly} alt="" />
      <p className="label">Together with their families</p>
      {guestName && <p className="guest-greeting">Dear {guestName},</p>}
      <div className="couple-names">
        <h1>{wedding.couple.first}</h1>
        <span className="couple-conjunction">and</span>
        <h1>{wedding.couple.second}</h1>
      </div>
      <p className="hero-copy">joyfully invite you to celebrate their wedding</p>
      <Divider />
      <p className="hero-date">{wedding.date.displayDate}</p>
      <a className="venue-link" href={wedding.venue.mapsUrl} target="_blank" rel="noreferrer">{wedding.venue.name} · {wedding.venue.city}</a>
      <a className="button button-outline" href="#rsvp">RSVP</a>
    </motion.section>
  )
}
