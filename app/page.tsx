"use client"

import { I18nProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PracticeSection } from '@/components/practice-section'
import { ClassesSection } from '@/components/classes-section'
import { ExperienceSection } from '@/components/experience-section'
import { AboutSection } from '@/components/about-section'
import { PlansSection } from '@/components/plans-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <PracticeSection />
          <ClassesSection />
          <ExperienceSection />
          <AboutSection />
          <PlansSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
