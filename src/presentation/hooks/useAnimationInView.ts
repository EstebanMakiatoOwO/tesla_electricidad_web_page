import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { RefObject } from 'react'

interface UseAnimationInViewOptions {
  readonly once?: boolean
  readonly amount?: number | 'some' | 'all'
}

interface UseAnimationInViewReturn<T extends HTMLElement> {
  readonly ref: RefObject<T | null>
  readonly isInView: boolean
}

export function useAnimationInView<T extends HTMLElement>(
  options: UseAnimationInViewOptions = {}
): UseAnimationInViewReturn<T> {
  const ref = useRef<T | null>(null)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.2,
  })

  return { ref, isInView }
}
