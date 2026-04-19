import { NavLink } from 'react-router-dom'
import { navData } from '../data/SideNavbardata'
import { X } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

const navLinks = [
  { label: 'Guide', to: '/introduction' },
  { label: 'API', to: '/api' },
  { label: 'Exemples', to: '/exemples' },
  { label: 'Blog', to: '/blog' },
]

export default function Sidebar({ open, onClose }: Props) {
  return (
    <aside className={`
      fixed left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 overflow-y-auto z-40
      transition-transform duration-300
      md:translate-x-0 md:top-16 md:h-[calc(100vh-4rem)]
      top-0 h-screen
      ${open ? 'translate-x-0' : '-translate-x-full'}
    `}>

      {/* Header mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-700">
        <NavLink className="flex items-center gap-2" to='/' onClick={onClose}>
          <div className="w-2 h-2 rounded-full bg-blue-700" />
          <span className="font-bold text-sm text-slate-900 dark:text-white">DevDocs</span>
        </NavLink>
        <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <X size={18} className="text-slate-500 dark:text-slate-400" />
        </button>
      </div>

      <div className="px-4 py-6 flex flex-col gap-6">

        {/* Liens navbar mobile */}
        <div className="md:hidden flex flex-col gap-0.5 pb-4 border-b border-slate-200 dark:border-slate-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm px-3 py-1.5 rounded-md text-blue-700 dark:text-blue-400 font-semibold'
                  : 'text-sm px-3 py-1.5 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Sections doc */}
        {navData.map((group) => (
          <div key={group.section}>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-2">
              {group.section}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-sm px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-medium'
                      : 'text-sm px-3 py-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors'
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}

      </div>
    </aside>
  )
}