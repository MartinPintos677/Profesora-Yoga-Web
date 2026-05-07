"use client"

import { useInView } from 'framer-motion'
import { useRef } from 'react'

type ScrollAnimationOptions = {
  once?: boolean
  margin?: NonNullable<Parameters<typeof useInView>[1]>['margin']
}

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '-100px',
  })

  return { ref, isInView }
}
