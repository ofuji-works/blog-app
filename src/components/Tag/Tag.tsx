import { VFC } from 'react'
import { MdCode } from 'react-icons/md'

import { Bg, IconBg, Icon, Span } from './Tag.styles'

type Props = {
  label: string
}

export const Tag: VFC<Props> = ({ label }) => {
  return (
    <Bg>
      <IconBg>
        <Icon as={MdCode} />
      </IconBg>
      <Span>{label}</Span>
    </Bg>
  )
}
