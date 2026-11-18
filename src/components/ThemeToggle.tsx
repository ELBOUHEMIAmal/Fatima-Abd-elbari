import type { ThemeName } from '../hooks/useTheme'

export function ThemeToggle({ theme, onToggle }: { theme: ThemeName; onToggle: () => void }) {
  return <button className="theme-toggle label" onClick={onToggle} aria-label={`Switch to ${theme === 'velvet' ? 'ivory' : 'velvet'} colour theme`}>Colour <span className="theme-dot" /></button>
}
