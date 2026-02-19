export const COLOR = {
  ELECTRIC_400: '#60a5fa',
  ELECTRIC_500: '#3b82f6',
  ELECTRIC_600: '#1d4ed8',
  NAVY_800: '#0f1566',
  NAVY_900: '#080b3d',
  NAVY_950: '#040621',
  ACCENT_400: '#fbbf24',
  ACCENT_500: '#f59e0b',
  WHITE: '#ffffff',
} as const

export const DURATION_MS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 800,
} as const

export const BREAKPOINT_PX = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const

export const Z_INDEX = {
  BELOW: -1,
  BASE: 0,
  RAISED: 10,
  DROPDOWN: 100,
  STICKY: 200,
  OVERLAY: 300,
  MODAL: 400,
  TOAST: 500,
} as const
