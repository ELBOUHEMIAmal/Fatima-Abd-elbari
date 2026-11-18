import { useEffect, useState } from 'react'

type CountdownValue = { days: number; hours: number; minutes: number; seconds: number }
const zero: CountdownValue = { days: 0, hours: 0, minutes: 0, seconds: 0 }

export function useCountdown(targetDate: string): CountdownValue {
  const [remaining, setRemaining] = useState(zero)
  useEffect(() => {
    const update = () => {
      const difference = Math.max(0, new Date(targetDate).getTime() - Date.now())
      const seconds = Math.floor(difference / 1000)
      setRemaining({
        days: Math.floor(seconds / 86400),
        hours: Math.floor((seconds % 86400) / 3600),
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60,
      })
    }
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [targetDate])
  return remaining
}
