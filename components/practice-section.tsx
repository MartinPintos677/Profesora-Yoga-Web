"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function PracticeSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  const practices = [
    {
      key: 'breath',
      ...t.practice.breath,
    },
    {
      key: 'movement',
      ...t.practice.movement,
    },
    {
      key: 'presence',
      ...t.practice.presence,
    },
    {
      key: 'transformation',
      ...t.practice.transformation,
    },
  ]

  return (
    <section id="practice" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents — primary-tinted, very soft */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          {/* Overline — deep navy at reduced opacity, not turquoise */}
          <p className="text-primary/55 text-sm tracking-[0.3em] uppercase mb-4">
            Ashtanga Yoga
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary mb-8">
            {t.practice.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.practice.description}
          </p>
        </motion.div>

        {/* Practice Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="p-8 lg:p-10 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/25 transition-all duration-500 hover:shadow-lg hover:shadow-primary/8">
                {/* Number badge — pure primary */}
                <div className="w-12 h-12 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/14 transition-colors duration-300">
                  <span className="font-serif text-xl text-primary/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Heading — deep navy, hover stays primary */}
                <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-ocean-mid transition-colors duration-300">
                  {practice.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {practice.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative concentric circles — primary ink, very faint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <svg
            className="w-24 h-24 text-primary/15"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="15" />
            <circle cx="50" cy="50" r="5" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
