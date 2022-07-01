import { NextWebVitalsMetric } from 'next/app'
import { FC } from 'react'

import { evaluate } from '../../utils'

import { Card, Label, Range, Value, Sign, LabelBox, ValueBox, RangeBox, SignText } from './Report.styles'

import { WEB_VITALS } from '@/config'

type Props = NextWebVitalsMetric
export const Report: FC<Props> = (props) => {
  const { name, value } = props
  const config = WEB_VITALS[name]
  return (
    <Card>
      <LabelBox>
        <Label as="h2">{config.label}</Label>
        <SignText>(in seconds)</SignText>
        <RangeBox>
          <Range color={'green'}>{`${config.green.min} - ${config.green.max} fast`}</Range>
          <Range color={'orange'}>{`${config.orange.min} - ${config.orange.max} moderate`}</Range>
          <Range color={'red'}>{`over ${config.red.min} slow`}</Range>
        </RangeBox>
      </LabelBox>
      <ValueBox>
        <Value color={evaluate(props)}>{value}</Value>
        <Sign>{config.sign}</Sign>
      </ValueBox>
    </Card>
  )
}
