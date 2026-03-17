import type { ReactNode } from 'react'

interface PageLayoutProps {
  readonly children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main id="main-content" className="flex-1 w-full">
      {children}
    </main>
  )
}
