import { wedding } from '../data/wedding'

function escapeIcs(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
}

function toUtc(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function toLocalIcs(date: string): string {
  return date.slice(0, 19).replace(/[-:]/g, '')
}

export function downloadCalendarInvite(): void {
  const start = new Date(`${wedding.date.iso}Z`)
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000)
  const coupleSlug = `${wedding.couple.first}-${wedding.couple.second}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${wedding.couple.first} and ${wedding.couple.second}//Wedding Invitation//EN`,
    'BEGIN:VEVENT',
    `UID:${start.getTime()}-${coupleSlug}@wedding`,
    `DTSTAMP:${toUtc(new Date())}`,
    `DTSTART;TZID=${wedding.date.timezone}:${toLocalIcs(wedding.date.iso)}`,
    `DTEND;TZID=${wedding.date.timezone}:${toLocalIcs(end.toISOString())}`,
    `SUMMARY:${escapeIcs(`${wedding.couple.first} & ${wedding.couple.second} Wedding`)}`,
    `LOCATION:${escapeIcs(`${wedding.venue.name}, ${wedding.venue.city}`)}`,
    `DESCRIPTION:${escapeIcs(`Join us to celebrate at ${wedding.venue.name}. ${wedding.venue.mapsUrl}`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${coupleSlug}-wedding.ics`
  link.click()
  URL.revokeObjectURL(url)
}
