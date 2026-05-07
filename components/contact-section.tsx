"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { MessageCircle, Instagram, MapPin } from 'lucide-react'

export function ContactSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-cream/30 overflow-hidden">
      {/* Background accents — primary only */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Overline — primary at reduced opacity */}
          <p className="text-primary/55 text-sm tracking-[0.3em] uppercase mb-4">
            {t.contact.subtitle}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary">
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* WhatsApp — primary icon circle */}
            <a
              href="https://wa.me/59899233728"
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

            {/* Instagram — ocean-mid to keep it distinct yet primary-family */}
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
                <p className="text-muted-foreground text-sm sm:text-base break-words leading-relaxed">@samudravinyasa.ashtanga</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-xl text-primary mb-1">{t.contact.location}</p>
                <p className="text-muted-foreground">Renacer Studio — Pinares, Maldonado</p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-ocean-mid/8 border border-primary/15">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/25 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Mapa</p>
                  <p className="text-muted-foreground/55 text-xs mt-1">Pinares, Maldonado</p>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-15">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--border) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--border) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
