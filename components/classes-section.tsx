"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Video, Users, Sparkles, MapPin, Clock } from 'lucide-react'

export function ClassesSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="classes" className="relative py-24 lg:py-32 bg-cream/30">
      {/* Background accents — primary only */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl" />

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
            {t.classes.subtitle}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary">
            {t.classes.title}
          </h2>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Virtual Classes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="h-full p-8 lg:p-10 rounded-2xl bg-card border border-border/50 hover:border-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/8">
              {/* Icon — primary-tinted circle */}
              <div className="w-14 h-14 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/14 transition-colors duration-300">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4">
                {t.classes.virtual.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.classes.virtual.description}
              </p>
              {/* Schedule — ocean-mid, not turquoise */}
              <div className="flex items-center gap-2 text-sm text-ocean-mid">
                <Clock className="w-4 h-4" />
                <span>{t.classes.virtual.schedule}</span>
              </div>
            </div>
          </motion.div>

          {/* Presential Classes — Featured (filled primary) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group lg:-mt-4 lg:mb-4"
          >
            <div className="h-full p-8 lg:p-10 rounded-2xl bg-primary text-primary-foreground border border-primary shadow-xl shadow-primary/25">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl mb-4">
                {t.classes.presential.title}
              </h3>
              <p className="text-primary-foreground/75 leading-relaxed mb-6">
                {t.classes.presential.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <Clock className="w-4 h-4" />
                  <span>{t.classes.presential.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <MapPin className="w-4 h-4" />
                  <span>{t.classes.presential.location}</span>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full mt-8 px-6 py-3 bg-background text-primary font-medium rounded-full hover:bg-background/90 transition-all duration-300"
              >
                {t.classes.reserve}
              </a>
            </div>
          </motion.div>

          {/* All Levels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="h-full p-8 lg:p-10 rounded-2xl bg-card border border-border/50 hover:border-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/8">
              {/* Icon — primary circle, softer fill */}
              <div className="w-14 h-14 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/14 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4">
                {t.classes.levels.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.classes.levels.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
