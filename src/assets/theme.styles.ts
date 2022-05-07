import { BREAK_POINTS, COLORS } from '@/config/index'

// テーマカラー設定
export const colors = {
  /* colors */
  colors: {
    black: COLORS.black,
    gray: {
      50: COLORS.gray[50],
      100: COLORS.gray[100],
      150: COLORS.gray[150],
      200: COLORS.gray[200],
    },
    white: COLORS.white,
  },
}

export const typography = {
  /* typography */
  fonts: {},
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
  fontWeight: {
    bold: '700',
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    base: '1.25rem',
  },
  letterSpacing: {
    normal: '0',
    wide: '0.05em',
  },
}

export const breakpoints = {
  breakpoints: {
    /* breakpoints */
    sm: BREAK_POINTS.sm, // SP
    md: BREAK_POINTS.md, // タブレット
  },
}

export const spacing = {
  space: {
    /* spacing */
    0.375: '0.375rem',
    0.5: '0.5rem',
    0.75: '0.75rem',
    1: '1rem',
    1.5: '1.5rem',
    2: '2rem',
    3.5: '3.5rem',
    4: '4rem',
    7.5: '7.5rem',
  },
}

export const borderRadius = {
  radii: {
    /* border-radius */
    base: '0.375rem',
    half: '50%',
  },
}
