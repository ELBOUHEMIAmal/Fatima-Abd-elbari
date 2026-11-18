import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wedding } from './data/wedding'
import { Envelope } from './components/Envelope'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { CalendarSave } from './components/CalendarSave'
import { Story } from './components/Story'
import { Timeline } from './components/Timeline'
import { DressCode } from './components/DressCode'
import { Menu } from './components/Menu'
import { Rsvp } from './components/Rsvp'
import { MusicPlayer } from './components/MusicPlayer'
import { NavDrawer } from './components/NavDrawer'
import { useTheme } from './hooks/useTheme'
import { FloralDivider } from './components/FloralDivider'
import './styles/theme.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  useTheme()
  const guestName = sanitizeGuest(new URLSearchParams(window.location.search).get('guest'))

  return (
    <>
      <AnimatePresence>{!opened && <Envelope onTap={() => window.dispatchEvent(new Event('wedding:play'))} onOpen={() => setOpened(true)} />}</AnimatePresence>
      {opened && (
        <motion.div
          className="invitation-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NavDrawer />
          <main>
            <Hero guestName={guestName} />
            <FloralDivider />
            <Countdown />
            <CalendarSave />
            <FloralDivider />
            <Story
              isPlaying={musicPlaying}
              onToggleMusic={() => window.dispatchEvent(new Event('wedding:toggle'))}
            />
            <FloralDivider />
            <Timeline />
            <DressCode />
            <FloralDivider />
            <Menu />
            <Rsvp />
          </main>
          <footer className="site-footer">
            <span className="footer-monogram">{wedding.couple.monogram}</span>
            <p>Thank you for being part of our story.</p>
          </footer>
        </motion.div>
      )}
      <MusicPlayer visible={opened} onPlayingChange={setMusicPlaying} />
    </>
  )
}

function sanitizeGuest(value: string | null): string {
  if (!value) return ''
  const cleaned = value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim()
  return Array.from(cleaned).slice(0, 40).join('')
}
