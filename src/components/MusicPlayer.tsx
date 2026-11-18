import { useCallback, useEffect, useRef, useState } from 'react'
import { wedding } from '../data/wedding'

export function MusicPlayer({ visible, onPlayingChange }: { visible: boolean; onPlayingChange: (playing: boolean) => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(() => localStorage.getItem('wedding-muted') === 'true')

  useEffect(() => {
    document.documentElement.dataset.music = playing ? 'playing' : 'paused'
    onPlayingChange(playing)
  }, [playing, onPlayingChange])

  const play = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = muted
    try {
      await audio.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [muted])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      void play()
    }
  }, [play, playing])

  useEffect(() => {
    window.addEventListener('wedding:toggle', toggle)
    window.addEventListener('wedding:play', play)
    return () => {
      window.removeEventListener('wedding:toggle', toggle)
      window.removeEventListener('wedding:play', play)
    }
  }, [play, toggle])

  function toggleMute() {
    const next = !muted
    setMuted(next)
    localStorage.setItem('wedding-muted', String(next))
    if (audioRef.current) audioRef.current.muted = next
  }

  return (
    <div className="music-controls" hidden={!visible}>
      <audio
        ref={audioRef}
        src={wedding.music.previewUrl}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      <button
        className={`music-button ${playing ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={wedding.music.title}
      >
        {playing ? 'Ⅱ' : '♫'}
      </button>
      <button
        className="mute-button label"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute music' : 'Mute music'}
      >
        {muted ? 'Muted' : 'Sound on'}
      </button>
    </div>
  )
}
