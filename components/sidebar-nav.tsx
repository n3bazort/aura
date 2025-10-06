"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, User, BookOpen, Users, Star, Calendar, Menu, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: Home, label: "Inicio", link: "/" },
  { icon: User, label: "Profesionales", link: "/profesionales" },
  { icon: BookOpen, label: "Talleres", link: "/talleres" },
  { icon: Users, label: "Comunidad", link: "/comunidad" },
  { icon: Star, label: "Planes", link: "/#planes" },
  { icon: Calendar, label: "Eventos", link: "/eventos" },
  { icon: Info, label: "Quiénes Somos", link: "/quienes-somos" },
]

export function SidebarNav() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-20 left-4 z-50 md:hidden bg-card shadow-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40",
          "hidden md:flex flex-col",
          isExpanded ? "w-[260px]" : "w-20",
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-3">
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    "text-sidebar-foreground group",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {isExpanded && <span className="font-medium whitespace-nowrap">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <aside className="fixed inset-0 z-40 md:hidden pt-16">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute left-0 top-16 h-[calc(100vh-4rem)] w-[260px] bg-sidebar border-r border-sidebar-border flex flex-col">
            {/* Navigation */}
            <nav className="flex-1 py-6">
              <ul className="space-y-2 px-3">
                {menuItems.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  )
}
