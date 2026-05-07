"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-violet/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative z-10 w-full max-w-7xl mx-auto px-8 pt-20">
        <div className="flex items-center justify-between w-full gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary/50 text-sm tracking-[0.3em] uppercase mb-6"
            >
              Ashtanga Yoga
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif text-6xl xl:text-7xl font-light text-primary leading-tight mb-4"
            >
              Samudra
              <br />
              <span className="italic">Vinyāsa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-serif text-3xl text-primary/50 mb-3"
            >
              समुद्र विन्यास
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground text-lg italic mb-10"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                {t.hero.cta}
              </a>
              <a
                href="#classes"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary/30 text-primary font-medium rounded-full hover:bg-primary/5 transition-all duration-300"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Video Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 max-w-md"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/18 via-primary/8 to-primary/14">
              <video
                src="/video-perfil.mp4"
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              {/* Decorative wave pattern */}
              <svg
                className="absolute bottom-0 left-0 right-0 text-background/10"
                viewBox="0 0 400 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 Q100,0 200,50 T400,50 L400,100 L0,100 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 w-full min-h-screen flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0 bg-primary">
          <video
            src="/video-perfil.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/55 to-ocean-mid/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/70 text-xs tracking-[0.3em] uppercase mb-6"
          >
            Ashtanga Yoga
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl font-light text-background leading-tight mb-4"
          >
            Samudra
            <br />
            <span className="italic">Vinyāsa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-serif text-2xl text-primary-foreground/55 mb-2"
          >
            समुद्र विन्यास
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-background/60 text-lg italic mb-12"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-background text-primary font-medium rounded-full hover:bg-background/90 transition-all duration-300"
            >
              {t.hero.cta}
            </a>
            <a
              href="#classes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-background/40 text-background font-medium rounded-full hover:bg-background/10 transition-all duration-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-background/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
