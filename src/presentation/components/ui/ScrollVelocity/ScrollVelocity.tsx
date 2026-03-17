import React, { useRef, useLayoutEffect, useState } from 'react'
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'

interface VelocityMapping {
  input: [number, number]
  output: [number, number]
}

interface VelocityTextProps {
  children: React.ReactNode
  baseVelocity: number
  scrollContainerRef?: React.RefObject<HTMLElement>
  className?: string
  damping?: number
  stiffness?: number
  numCopies?: number
  velocityMapping?: VelocityMapping
  parallaxClassName?: string
  scrollerClassName?: string
  parallaxStyle?: React.CSSProperties
  scrollerStyle?: React.CSSProperties
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>
  texts: string[]
  velocity?: number
  className?: string
  damping?: number
  stiffness?: number
  numCopies?: number
  velocityMapping?: VelocityMapping
  parallaxClassName?: string
  scrollerClassName?: string
  parallaxStyle?: React.CSSProperties
  scrollerStyle?: React.CSSProperties
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [ref])
  return width
}

export function ScrollVelocity({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}: ScrollVelocityProps) {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef: scRef,
    className: cls = '',
    damping: dmp,
    stiffness: stf,
    numCopies: nc,
    velocityMapping: vm,
    parallaxClassName: pCls,
    scrollerClassName: sCls,
    parallaxStyle: pStyle,
    scrollerStyle: sStyle,
  }: VelocityTextProps) {
    const baseX = useMotionValue(0)
    const scrollOptions = scRef ? { container: scRef } : {}
    const { scrollY } = useScroll(scrollOptions)
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: dmp ?? 50,
      stiffness: stf ?? 400,
    })
    const velocityFactor = useTransform(
      smoothVelocity,
      vm?.input ?? [0, 1000],
      vm?.output ?? [0, 5],
      { clamp: false }
    )

    const copyRef = useRef<HTMLSpanElement>(null)
    const copyWidth = useElementWidth(copyRef)

    function wrap(min: number, max: number, v: number): number {
      const range = max - min
      const mod = (((v - min) % range) + range) % range
      return mod + min
    }

    const x = useTransform(baseX, v => {
      if (copyWidth === 0) return '0px'
      return `${wrap(-copyWidth, 0, v)}px`
    })

    const directionFactor = useRef<number>(1)
    useAnimationFrame((_t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get()
      baseX.set(baseX.get() + moveBy)
    })

    const spans = []
    for (let i = 0; i < (nc ?? 6); i++) {
      spans.push(
        <span className={`flex-shrink-0 ${cls}`} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      )
    }

    return (
      <div className={`${pCls ?? ''} relative overflow-hidden`} style={pStyle}>
        <m.div
          className={`${sCls ?? ''} flex whitespace-nowrap`}
          style={{ x, ...sStyle }}
        >
          {spans}
        </m.div>
      </div>
    )
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  )
}
