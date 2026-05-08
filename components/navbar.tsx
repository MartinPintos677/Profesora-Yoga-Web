"use client"

import { useState, type MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n, languageNames, type Language } from '@/lib/i18n'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const { t, language, setLanguage } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navLinks = [
    { href: '#practice', label: t.nav.practice },
    { href: '#classes', label: t.nav.classes },
    { href: '#experience', label: t.nav.experience },
    { href: '#about', label: t.nav.about },
    { href: '#plans', label: t.nav.plans },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleMobileNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault()
    setIsMenuOpen(false)

    window.requestAnimationFrame(() => {
      const section = document.querySelector(href)
      if (!section) return

      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/Logo.jpg"
              alt="Samudra Vinyāsa"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif text-lg font-medium text-primary hidden sm:block">
              Samudra Vinyāsa
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {languageNames[language]}
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 py-2 bg-card border border-border rounded-lg shadow-lg min-w-[120px]"
                  >
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setIsLangOpen(false)
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                          language === lang
                            ? 'text-primary bg-secondary'
                            : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                        }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              className="px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleMobileNavClick(event, link.href)}
                  className="block text-lg font-serif text-primary hover:text-ocean-mid transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">{t.nav.language}</p>
                <div className="flex gap-3">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setIsMenuOpen(false)
                      }}
                      className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                        language === lang
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
