import { useEffect, useState } from 'react'

export type ThemeName = 'velvet' | 'ivory'

export function useTheme() {
  const [theme] = useState<ThemeName>('ivory')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('wedding-theme', theme)
  }, [theme])

  return { theme }
}
