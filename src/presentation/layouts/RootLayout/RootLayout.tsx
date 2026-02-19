import type { ReactNode } from 'react'
import { MotionProvider } from '@infrastructure/framerMotion'

interface RootLayoutProps {
  readonly children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <MotionProvider>
      <div className="min-h-dvh flex flex-col bg-navy-950 text-white antialiased">
        {children}
      </div>
    </MotionProvider>
  )
}