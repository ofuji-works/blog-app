import { VFC } from 'react'
import { MdCode } from 'react-icons/md'

import { Button, Icon, IconBg, Span } from './TagLink.styles'

type Props = {
  label: string
}

export const TagLink: VFC<Props> = (props) => {
  const { label } = props
  return (
    <Button>
      <IconBg>
        <Icon as={MdCode} />
      </IconBg>
      <Span>{label}</Span>
    </Button>
  )
}
