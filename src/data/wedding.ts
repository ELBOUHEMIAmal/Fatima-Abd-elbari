export type MenuCourse = {
  label: string
  items: { name: string; detail: string; or?: boolean }[]
}

export const wedding = {
  couple: { first: 'Fatima', second: 'Abd Elbari', monogram: 'F&A' },
  date: {
    iso: '2025-07-06T17:00:00',
    timezone: 'Europe/Rome',
    displayDate: 'Sunday, the sixth of July, 2025',
  },
  venue: {
    name: 'Villa Rosé',
    city: 'Marakesh, Morocco',
    mapsUrl: 'https://maps.google.com/?q=Villa+Ros%C3%A9+Marakesh',
  },
  story: [
    { year: '2018', title: 'A chance encounter', text: 'At a birthday party, an unexpected encounter—and the most beautiful one.' },
    { year: '2021', title: 'A thousand little adventures', text: 'From weekend trains to long dinners, every ordinary day became a favourite memory.' },
    { year: '2024', title: 'The question', text: 'On a golden evening beneath the olive trees, one question changed everything.' },
    { year: '2025', title: 'Our next chapter', text: 'Now, surrounded by the people we love most, we cannot wait to say “I do.”' },
  ],
  quote: '“Whatever our souls are made of, his and mine are the same.”',
  timeline: [
    { time: '4:30 PM', title: 'Welcome drinks', place: 'The Villa Garden' },
    { time: '5:00 PM', title: 'Ceremony', place: 'The Rose Courtyard' },
    { time: '7:00 PM', title: 'Dinner & dancing', place: 'The Grand Orangery' },
  ],
  dressCode: {
    ladies: 'Garden formal. We invite you to wear elegant, Burgundy Caften.',
    gentlemen: 'Dark suits or a tuxedo, with a tie of your choosing.',
    note: 'The celebration is outdoors, so please choose shoes for the garden.',
  },
  menu: {
    courses: [
      {
        label: 'Menu',
        items: [
          { name: 'HALWA', detail: 'A Selection of Traditional Moroccan Sweets' },
          { name: 'ATAY', detail: 'Traditional Moroccan Mint Tea' },
          { name: 'DAJAJ MHAMMAR', detail: 'Traditional Moroccan Roasted Chicken\nGarnished with Preserved Lemons and Olives' },
          { name: 'SSEFFA', detail: 'Steamed Vermicelli with Powdered Sugar, Cinnamon and Almonds' },
          { name: 'CAKE', detail: 'Delicate Moroccan Cake' },
          { name: 'FRESH JUICE', detail: 'Fresh Seasonal Fruit Juice' },
        ],
      },
    ] satisfies MenuCourse[],
  },
  rsvp: { deadline: 'June 6, 2025', maxGuests: 4 },
  music: {
    title: 'Laroussa',
    src: '/audio/song.mp3',
    previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ff/a4/e6/ffa4e65a-885e-cdd9-4ec4-fa1d8b85c2f2/mzaf_14906912293622471051.plus.aac.p.m4a',
  },
} as const
