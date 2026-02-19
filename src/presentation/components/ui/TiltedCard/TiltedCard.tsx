import type { SpringOptions } from 'framer-motion'
import { m, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

interface TiltedCardProps {
  imageSrc?: string
  altText?: string
  captionText?: string
  containerHeight?: React.CSSProperties['height']
  containerWidth?: React.CSSProperties['width']
  imageHeight?: React.CSSProperties['height']
  imageWidth?: React.CSSProperties['width']
  scaleOnHover?: number
  rotateAmplitude?: number
  showTooltip?: boolean
  overlayContent?: React.ReactNode
  displayOverlayContent?: boolean
}

const springValues: SpringOptions = { damping: 30, stiffness: 100, mass: 2 }

export function TiltedCard({
  imageSrc,
  altText = '',
  captionText = '',
  containerHeight = '280px',
  containerWidth = '100%',
  imageHeight = '280px',
  imageWidth = '100%',
  scaleOnHover = 1.05,
  rotateAmplitude = 12,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 })
  const [lastY, setLastY] = useState(0)

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude)
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude)
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
    rotateFigcaption.set(-(offsetY - lastY) * 0.6)
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
    opacity.set(1)
  }

  function handleMouseLeave() {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <m.div
        className="relative [transform-style:preserve-3d]"
        style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
      >
        {imageSrc && (
          <m.img
            src={imageSrc}
            alt={altText}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl will-change-transform [transform:translateZ(0)]"
          />
        )}
        {displayOverlayContent && overlayContent && (
          <m.div className="absolute top-0 left-0 z-2 will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </m.div>
        )}
      </m.div>

      {showTooltip && captionText && (
        <m.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-sm bg-white px-2.5 py-1 text-[10px] text-[#2d2d2d] opacity-0 z-3 hidden sm:block"
          style={{ x, y, opacity, rotate: rotateFigcaption }}
        >
          {captionText}
        </m.figcaption>
      )}
    </figure>
  )
}
