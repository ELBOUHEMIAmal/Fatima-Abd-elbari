import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import flowerBorder from '../assets/images/flower6.png'

const links = [['home', 'Welcome'], ['countdown', 'Countdown'], ['save-date', 'Save the date'], ['story', 'Our story'], ['day', 'The day'], ['dress-code', 'Dress code'], ['menu', 'Menu'], ['rsvp', 'RSVP']]

export function NavDrawer() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="topbar"><img className="topbar-flower-border" src={flowerBorder} alt="" aria-hidden="true" /><button className="hamburger" onClick={() => setOpen(true)} aria-label="Open navigation menu"><span /><span /></button><a href="#home" className="nav-monogram">{wedding.couple.monogram}</a><span className="topbar-spacer" /></header>
      <AnimatePresence>{open && <motion.div className="nav-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
        <motion.nav className="nav-drawer" aria-label="Invitation sections" initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.28 }} onClick={(event) => event.stopPropagation()}>
          <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close navigation menu">×</button><p className="label">The celebration</p>
          {links.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
        </motion.nav>
      </motion.div>}</AnimatePresence>
    </>
  )
}
