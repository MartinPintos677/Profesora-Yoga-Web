"use client"

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Check } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

export function PlansSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  const plans = [
    {
      ...t.plans.weekly1,
      features: t.plans.weekly1.features,
      popular: false,
    },
    {
      ...t.plans.weekly2,
      features: t.plans.weekly2.features,
      popular: true,
    },
    {
      ...t.plans.single,
      features: t.plans.single.features,
      popular: false,
    },
  ]

  return (
    <section id="plans" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents — primary only */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Overline — primary at reduced opacity */}
          <p className="text-primary/55 text-sm tracking-[0.3em] uppercase mb-4">
            {t.plans.subtitle}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-primary">
            {t.plans.title}
          </h2>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge — deep primary, not turquoise */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider rounded-full">
                  {t.plans.popular}
                </div>
              )}
              <div
                className={`h-full p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/25'
                    : 'bg-card border border-border/50 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300'
                }`}
              >
                <h3
                  className={`font-serif text-xl mb-2 ${
                    plan.popular ? 'text-primary-foreground' : 'text-primary'
                  }`}
                >
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span
                    className={`font-serif text-4xl ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-primary-foreground/65' : 'text-muted-foreground'
                      }`}
                    >
                      {' '}{plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      {/* Check icon — primary-foreground on filled card, ocean-mid on plain card */}
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.popular ? 'text-primary-foreground/80' : 'text-ocean-mid'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-primary-foreground/85' : 'text-muted-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 font-medium rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-background text-primary hover:bg-background/90'
                      : 'bg-primary/8 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary'
                  }`}
                >
                  {t.plans.select}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
