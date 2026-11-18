import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Rsvp() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const [attending, setAttending] = useState('yes')
  const menuChoices = wedding.menu.courses.flatMap((course) => course.items.map((item) => item.name))

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    const endpoint = import.meta.env.VITE_FORMSPREE_URL
    if (!endpoint) {
      setStatus('error')
      setError('RSVP is not configured yet. Please contact the couple directly.')
      return
    }
    setStatus('loading')
    const form = event.currentTarget
    const formData = new FormData(form)
    if (String(formData.get('website') ?? '').trim()) {
      setStatus('success')
      return
    }
    try {
      const response = await fetch(endpoint, { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Your response could not be sent. Please try again.')
      setStatus('success')
      form.reset()
    } catch (submitError) {
      setStatus('error')
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <motion.section id="rsvp" className="section-pad rsvp-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="label">Kindly reply by {wedding.rsvp.deadline}</p><h2 className="section-title">Will you join us?</h2>
      {status === 'success' ? <div className="thank-you" role="status"><span className="script-and">Thank you</span><p>Your reply has been received. We can't wait to celebrate with you!</p></div> :
        <form className="rsvp-form" onSubmit={submit}>
          <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={200} /></label>
          <fieldset><legend>Will you be attending?</legend><div className="attendance-toggle">
            {['yes', 'no'].map((answer) => <button type="button" className={attending === answer ? 'selected' : ''} aria-pressed={attending === answer} onClick={() => setAttending(answer)} key={answer}>{answer === 'yes' ? 'Joyfully accepts' : 'Regretfully declines'}</button>)}
          </div><input type="hidden" name="attending" value={attending} /></fieldset>
          {attending === 'yes' && <>
            <label>Number of guests<select name="guests" defaultValue="1">{Array.from({ length: wedding.rsvp.maxGuests }, (_, index) => <option value={index + 1} key={index + 1}>{index + 1}</option>)}</select></label>
            <label>Meal choice<select name="meal" required defaultValue=""><option value="" disabled>Please choose</option>{menuChoices.map((choice) => <option key={choice}>{choice}</option>)}</select></label>
          </>}
          <label>Dietary notes<textarea name="dietary" rows={2} maxLength={500} /></label>
          <label>A note for the couple<textarea name="message" rows={3} maxLength={1000} /></label>
          <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-solid" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending...' : 'Send your reply'}</button>
        </form>}
    </motion.section>
  )
}
