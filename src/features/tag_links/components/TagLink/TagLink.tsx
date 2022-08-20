import { FC } from 'react'
import { MdCode } from 'react-icons/md'

import { Tag } from '../../types'

import { Button, Icon, IconBg, Span, framerVariant } from './TagLink.styles'

import { useBreakPoints } from '@/hooks'

type Props = {
  onClick: (tagId: string) => void
} & Tag

export const TagLink: FC<Props> = ({ id, name, onClick }) => {
  const { isTablet } = useBreakPoints()

  const clickHandler = () => {
    onClick(id)
  }

  return (
    <Button
      variants={framerVariant}
      whileHover={!isTablet ? 'hover' : undefined}
      whileTap={isTablet ? 'tap' : undefined}
      onClick={clickHandler}
    >
      <IconBg>
        <Icon as={MdCode} />
      </IconBg>
      <Span>{name}</Span>
    </Button>
  )
}
