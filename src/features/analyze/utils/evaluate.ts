import { NextWebVitalsMetric } from 'next/app'

import { WEB_VITALS } from '@/config'

export const evaluate = ({ name, value }: NextWebVitalsMetric) => {
  const config = WEB_VITALS[name]
  if (name === 'FCP') {
    const { green, orange, red } = config
    if (value >= red.min) {
      return 'red'
    }
    if (value <= orange.max && value >= orange.min) {
      return 'orange'
    }
    if (value <= green.max) {
      return 'green'
    }
  }
}
