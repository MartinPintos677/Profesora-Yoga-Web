"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

export function Footer() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  return (
    <footer ref={ref} className="relative py-16 lg:py-20 border-t border-primary/12 overflow-hidden">
      {/* Background accent — primary */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/4 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/Logo.jpg"
              alt="Samudra Vinyāsa"
              width={96}
              height={96}
              className="rounded-full"
            />
            <span className="font-serif text-3xl font-light text-primary">
              Samudra Vinyāsa
            </span>
          </div>

          {/* Sanskrit — primary at low opacity, elegant */}
          <p className="font-serif text-lg text-primary/38 mb-8">
            समुद्र विन्यास
          </p>

          {/* Decorative divider — primary-tinted */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary/18" />
            <svg
              className="w-6 h-6 text-primary/22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <div className="w-12 h-px bg-primary/18" />
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm mb-4">
            {t.footer.rights}
          </p>

          {/* Developer credit */}
          <p className="text-muted-foreground/50 text-xs">
            {t.footer.developer}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
