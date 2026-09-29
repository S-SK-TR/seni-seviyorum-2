import { NavLink, Outlet } from 'react-router-dom'
import { Heart, Home, BookOpen, Settings, Bell } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AppShellProps {
  children?: React.ReactNode
}

const navItems = [
  { to: '/', icon: Home, label: 'Anasayfa' },
  { to: '/memories', icon: BookOpen, label: 'Anılarımız' },
  { to: '/settings', icon: Settings, label: 'Ayarlar' }
]

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* ── Masaüstü Sidebar ── */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl">
        <div className="h-20 flex items-center justify-center border-b border-[var(--glass-border)]">
          <Heart size={32} className="text-rose-500" />
          <span className="ml-2 text-xl font-bold font-[Outfit] tracking-tight">Seni Seviyorum</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-rose-500/10 text-rose-500 shadow-[0_0_0_1px_var(--glass-glow)]"
                  : "text-[var(--text-muted)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]"
              )}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ── Mobil Bottom Navigation ── */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--glass-bg)]/90 backdrop-blur-xl border-t border-[var(--glass-border)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) => cn(
                "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
                isActive ? "text-rose-500" : "text-[var(--text-muted)]"
              )}
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-[var(--glass-border)] bg-[var(--glass-bg)]/80 backdrop-blur-xl sticky top-0 z-30">
          <h1 className="text-lg font-semibold font-[Outfit] tracking-tight">Seni Seviyorum</h1>
          <button
            onClick={() => console.log('Bildirimler açıldı')}
            className="relative p-2 rounded-lg hover:bg-[var(--glass-bg)] transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full" />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <AnimatePresence mode="wait">
            {children}
            <Outlet />
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}