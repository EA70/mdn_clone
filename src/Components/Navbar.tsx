import { NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

type Props = {
  onBurgerClick: () => void
}

export default function Navbar({ onBurgerClick }: Props) {
  const { dark, toggle } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-3 flex items-center gap-4">

      {/* Burger */}
      <button onClick={onBurgerClick} className="md:hidden flex flex-col gap-1.5 shrink-0">
        <span className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded block" />
        <span className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded block" />
        <span className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded block" />
      </button>

      {/* Logo */}
      <NavLink className="flex items-center gap-2 shrink-0" to='/'>
        <div className="w-2 h-2 rounded-full bg-blue-700" />
        <span className="font-bold text-sm text-slate-900 dark:text-white">DevDocs</span>
      </NavLink>

      {/* Liens */}
      <div className="max-md:hidden flex items-center gap-5">
        {['Guide', 'API', 'Exemples', 'Blog'].map((label) => (
          <NavLink
            key={label}
            to={`/${label.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? 'text-sm text-blue-700 dark:text-blue-400 font-medium'
                : 'text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Recherche */}
        <div className="max-md:hidden flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 w-44">
          <span className="text-slate-400 text-sm">Rechercher…</span>
          <kbd className="ml-auto text-xs bg-slate-100 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded px-1 py-0.5">⌘K</kbd>
        </div>

        {/* Toggle dark mode */}
        <button
          onClick={toggle}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {dark
            ? <Sun size={16} className="text-slate-400 dark:text-slate-300" />
            : <Moon size={16} className="text-slate-500" />
          }
        </button>
      </div>

    </nav>
  )
}