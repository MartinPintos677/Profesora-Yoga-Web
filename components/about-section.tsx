"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

export function AboutSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream/30 overflow-hidden">
      {/* Background accents — primary only */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/16 via-primary/8 to-ocean-mid/14">
                <Image
                  src="/Rafa.jpg"
                  alt="Rafaela, guía de práctica de Samudra Vinyāsa"
                  fill
                  sizes="(min-width: 1024px) 480px, calc(100vw - 48px)"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              {/* Decorative rings — primary ink */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-primary/18 hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-primary/12 hidden lg:block" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Overline — primary at reduced opacity */}
            <p className="text-primary/55 text-sm tracking-[0.3em] uppercase mb-4">
              {t.aboutRafaela.subtitle}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary mb-8">
              {t.aboutRafaela.title}
            </h2>

            <div className="space-y-6">
              {t.aboutRafaela.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature — primary at low opacity for elegance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10"
            >
              <p className="font-serif text-2xl italic text-primary/40">
                — Rafaela
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
