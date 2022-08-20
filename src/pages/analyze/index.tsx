import { NextPage } from 'next'
import { NextWebVitalsMetric } from 'next/app'
import dynamic from 'next/dynamic'

const ReportList = dynamic(() => import('@/features/analyze/ReportList'))

const Analyze: NextPage = () => {
  return <></>
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default Analyze
