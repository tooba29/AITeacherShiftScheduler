import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { 
  Calendar, 
  Users, 
  FileText, 
  Settings as SettingsIcon,
  Menu,
  GraduationCap,
  Sparkles
} from 'lucide-react'
import { Button } from './ui/button'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Calendar, color: 'text-blue-600' },
    { name: 'Requests', href: '/requests', icon: FileText, color: 'text-purple-600' },
    { name: 'Teachers', href: '/teachers', icon: Users, color: 'text-green-600' },
    { name: 'Settings', href: '/settings', icon: SettingsIcon, color: 'text-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Mobile menu button */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white/80 backdrop-blur-md border-b border-white/20 px-4 shadow-lg sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hover:bg-blue-50"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex-1 text-sm font-semibold leading-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Teacher Relief Scheduler
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white/80 backdrop-blur-md border-r border-white/20 px-6 pb-4 shadow-xl">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1 animate-bounce-gentle" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Relief Scheduler
                </span>
                <div className="text-xs text-gray-500 font-medium">Admin Dashboard</div>
              </div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = location.pathname === item.href || 
                      (item.href === '/dashboard' && location.pathname === '/')
                    return (
                      <li key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <Link
                          to={item.href}
                          className={cn(
                            'group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-semibold transition-all duration-300',
                            isActive
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-md border border-blue-100'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm'
                          )}
                        >
                          <item.icon
                            className={cn(
                              'h-6 w-6 shrink-0 transition-all duration-300',
                              isActive ? item.color : 'text-gray-400 group-hover:text-blue-600'
                            )}
                            aria-hidden="true"
                          />
                          <span className="relative">
                            {item.name}
                            {isActive && (
                              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            )}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li className="mt-auto">
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 border border-blue-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">AD</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Admin User</div>
                      <div className="text-xs text-gray-600">admin@school.edu</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
        sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-white/90 backdrop-blur-md px-6 pb-4 shadow-2xl transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1 animate-bounce-gentle" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Relief Scheduler
                </span>
                <div className="text-xs text-gray-500 font-medium">Admin Dashboard</div>
              </div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = location.pathname === item.href || 
                      (item.href === '/dashboard' && location.pathname === '/')
                    return (
                      <li key={item.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <Link
                          to={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={cn(
                            'group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-semibold transition-all duration-300',
                            isActive
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-md border border-blue-100'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm'
                          )}
                        >
                          <item.icon
                            className={cn(
                              'h-6 w-6 shrink-0 transition-all duration-300',
                              isActive ? item.color : 'text-gray-400 group-hover:text-blue-600'
                            )}
                            aria-hidden="true"
                          />
                          <span className="relative">
                            {item.name}
                            {isActive && (
                              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            )}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout 