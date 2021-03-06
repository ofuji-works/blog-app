import { BREAK_POINTS, COLORS } from '@/config'

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
    code: COLORS.code,
    thumnail: COLORS.thumnail,
    green: COLORS.green,
    orange: COLORS.orange,
    red: COLORS.red,
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
    '4xl': '4rem',
    /* blog style */
    h1: '1.75rem',
    h2: '1.5rem',
    p: '1rem',
  },
  fontWeight: {
    bold: '700',
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    base: '1.25rem',
    /* blog style */
    h1: '2em',
    h2: '1.8rem',
    p: '1.50rem',
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
    0.25: '0.25rem',
    0.375: '0.375rem',
    0.5: '0.5rem',
    0.75: '0.75rem',
    1: '1rem',
    1.25: '1.25rem',
    1.5: '1.5rem',
    2: '2rem',
    2.5: '2.5rem',
    3.5: '3.5rem',
    4: '4rem',
    4.5: '4.5rem',
    5.5: '5.5rem',
    6.5: '6.5rem',
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
