"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ExperienceSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents — deep navy only */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-primary/55 text-sm tracking-[0.3em] uppercase mb-4">
            {t.experience.subtitle}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary">
            {t.experience.title}
          </h2>
        </motion.div>

        {/* Editorial Gallery — Asymmetrical, all primary-tinted gradients */}
        <div className="space-y-8 lg:space-y-12">
          {/* Row 1 — Large + Tall portrait */}
          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/18 via-ocean-mid/10 to-primary/12">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground/60 border-y-[8px] border-y-transparent ml-1" />
                    </div>
                    <p className="text-primary-foreground/50 text-sm tracking-widest uppercase">Video</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/14 via-primary/8 to-ocean-mid/12">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Row 2 — Three staggered heights */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:mt-8"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-ocean-mid/8 to-primary/14">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/16 via-primary/10 to-ocean-mid/14">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                      <div className="w-0 h-0 border-l-[10px] border-l-primary-foreground/60 border-y-[6px] border-y-transparent ml-1" />
                    </div>
                    <p className="text-primary-foreground/45 text-xs tracking-widest uppercase">Video</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="md:-mt-8"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-mid/12 via-primary/8 to-primary/16">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/22" />
              </div>
            </motion.div>
          </div>

          {/* Row 3 — Wide cinematic banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-r from-primary/20 via-ocean-mid/12 to-primary/18">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                    <div className="w-0 h-0 border-l-[16px] border-l-primary-foreground/60 border-y-[10px] border-y-transparent ml-1" />
                  </div>
                  <p className="text-primary-foreground/45 text-sm tracking-[0.2em] uppercase">Video</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
