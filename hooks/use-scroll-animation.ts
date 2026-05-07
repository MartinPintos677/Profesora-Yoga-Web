"use client"

import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type ScrollAnimationOptions = {
  once?: boolean
  margin?: NonNullable<Parameters<typeof useInView>[1]>['margin']
}

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  const ref = useRef(null)
  const [fallbackVisible, setFallbackVisible] = useState(false)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '0px',
  })

  useEffect(() => {
    if (isInView) return

    const timeout = window.setTimeout(() => {
      setFallbackVisible(true)
    }, 1200)

    return () => window.clearTimeout(timeout)
  }, [isInView])

  return { ref, isInView: isInView || fallbackVisible }
}
