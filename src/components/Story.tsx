import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import cadreFrame from '../assets/images/cadre.png'
import momentPhoto from '../assets/images/moment.png'
export function Story(_props: { isPlaying: boolean; onToggleMusic: () => void }) {
  return (
    <motion.section id="story" className="section-pad story-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="label">A love in little moments</p>
      <h2 className="section-title">Our story</h2>
      <div className="story-list">
        {wedding.story.map((moment) => <article className="story-moment" key={moment.year}><span className="story-year">{moment.year}</span><div><h3>{moment.title}</h3><p>{moment.text}</p></div></article>)}
      </div>
      <figure className="story-photo">
        <div className="story-photo-window">
          <img className="story-photo-image" src={momentPhoto} alt="Illustration of the Tuscan hills at sunset" />
        </div>
        <img className="story-photo-frame" src={cadreFrame} alt="" aria-hidden="true" />
        <figcaption className="label">A little piece of Our Love</figcaption>
      </figure>
      <blockquote>{wedding.quote}</blockquote>
      <p className="quote-attribution label text">— Fatima Touil</p>
      
    </motion.section>
  )
}
