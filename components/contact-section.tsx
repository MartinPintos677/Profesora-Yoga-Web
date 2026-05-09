"use client"

import { motion } from 'framer-motion'
import { Instagram, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ContactSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-cream/30 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary/55 text-sm tracking-[0.3em] uppercase mb-4">
            {t.contact.subtitle}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary">
            {t.contact.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/25 transition-all duration-300 hover:shadow-lg hover:shadow-primary/8"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/14 transition-colors duration-300">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-xl text-primary mb-1">{t.contact.whatsapp}</p>
              <p className="text-muted-foreground">+598 99 233 728</p>
            </div>
          </a>

          <a
            href="https://instagram.com/samudravinyasa.ashtanga"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/25 transition-all duration-300 hover:shadow-lg hover:shadow-primary/8"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/14 transition-colors duration-300">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-ocean-mid" />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-xl text-primary mb-1">{t.contact.instagram}</p>
              <p className="text-muted-foreground text-sm sm:text-base break-words leading-relaxed">
                @samudravinyasa.ashtanga
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
