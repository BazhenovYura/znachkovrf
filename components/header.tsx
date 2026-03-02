"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Продукция", href: "#products" },
  { label: "Процесс", href: "#process" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
            <span className="font-serif text-lg font-bold text-gold">З</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-wide text-foreground">
            Значкофф
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+79999999999"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            +7 (999) 999-99-99
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-gold-light"
          >
            Оставить заявку
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border/30 py-4 text-sm tracking-wide text-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-sm bg-gold px-6 py-3 text-center text-sm font-semibold tracking-wide text-background"
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
