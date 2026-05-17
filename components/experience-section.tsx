"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

type MediaItem = {
  type: 'image' | 'video'
  src: string
  alt?: string
  fit?: 'cover' | 'contain'
}

function MediaTile({
  item,
  className = '',
  priority = false,
}: {
  item: MediaItem
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-primary/10 ${className}`}>
      {item.type === 'image' ? (
        <Image
          src={item.src}
          alt={item.alt ?? 'Experiencia de práctica en Samudra Vinyāsa'}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 48px)"
          className={item.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}
          priority={priority}
        />
      ) : (
        <video
          src={item.src}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
    </div>
  )
}

export function ExperienceSection() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollAnimation()

  const photos: MediaItem[] = [
    { type: 'image', src: '/Foto1.jpg' },
    { type: 'image', src: '/Foto2.jpg' },
    { type: 'image', src: '/Foto3.jpg' },
    { type: 'image', src: '/Foto7.jpg' },
    { type: 'image', src: '/Foto5.jpg' },
    { type: 'image', src: '/Foto8.jpg' },
  ]

  const videos: MediaItem[] = [
    { type: 'video', src: '/VIdeo1.mp4' },
    { type: 'video', src: '/Video5.mp4' },
    { type: 'video', src: '/Video6.mp4' },
  ]

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-primary/4 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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

        <div className="space-y-8 lg:space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.08 }}
              >
                <MediaTile
                  item={item}
                  className="aspect-[3/4]"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.62 + index * 0.08 }}
              >
                <MediaTile item={item} className="aspect-[4/3]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
