import type { WebVitals } from './types'

/**
 * @summary twitter account ID
 * @type {string}
 */
export const TWITTER_ID = 'yuta66510630'

/**
 * breakpoint
 * @typedef {object}
 * @property {string} sm SP
 * @property {string} md Tablet
 */
export const BREAK_POINTS = {
  sm: '428px',
  md: '1024px',
}

/**
 * colors
 * @typedef {object}
 * @property {string}
 */
export const COLORS = {
  black: '#000',
  gray: {
    50: '#FAFAFA',
    100: '#E5E5E5',
    150: '#D6D6D6',
    200: '#979797',
  },
  white: '#FFF',
  /* blog style */
  code: '#1D1F21',
  thumnail: 'radial-gradient(#DDDDDD, #ffffff)',
  /* analyze color */
  green: '#0CCE6B',
  orange: '#F6A418',
  red: '#FA4845',
}

/**
 * @summary web vital 閾値
 * https://web.dev/performance-scoring/
 */
export const WEB_VITALS: WebVitals = {
  FCP: {
    label: 'First Contentful Paint',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
  LCP: {
    label: 'Largest Contentful Paint',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
  CLS: {
    label: 'Cumulative Layout Shift',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
  FID: {
    label: 'First Input Delay',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
  TTFB: {
    label: 'Time to First Byte',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },

  'Next.js-hydration': {
    label: 'Next.js-hydration',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
  'Next.js-route-change-to-render': {
    label: 'Next.js-route-change-to-render',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
  'Next.js-render': {
    label: 'Next.js-render',
    // fast
    // 0–1.8
    green: {
      min: 0,
      max: 1.8,
    },
    // moderate
    // 1.8–3
    orange: {
      min: 1.8,
      max: 3,
    },
    // slow
    // Over 3
    red: {
      min: 3,
      max: Infinity,
    },
    sign: 's',
  },
}
