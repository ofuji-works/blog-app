type Range = {
  min: number
  max: number
}

type WebVitalProp = {
  label: string
  green: Range
  orange: Range
  red: Range
  sign: string
}

export type WebVitals = {
  FCP: WebVitalProp
  LCP: WebVitalProp
  CLS: WebVitalProp
  FID: WebVitalProp
  TTFB: WebVitalProp
  'Next.js-hydration': WebVitalProp
  'Next.js-route-change-to-render': WebVitalProp
  'Next.js-render': WebVitalProp
}
