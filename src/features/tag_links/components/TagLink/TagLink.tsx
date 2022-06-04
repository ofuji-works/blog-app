import { FC, MouseEventHandler } from 'react'
import { MdCode } from 'react-icons/md'

import { Button, Icon, IconBg, Span, framerVariant } from './TagLink.styles'

import { useBreakPoints } from '@/hooks'

type Props = {
  /**
   * @type {string} label
   */
  label: string
  /**
   * @type {MouseEventHandler<HTMLButtonElement>}
   */
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const TagLink: FC<Props> = ({ label, onClick }) => {
  const { isTablet } = useBreakPoints()
  return (
    <Button
      variants={framerVariant}
      whileHover={!isTablet ? 'hover' : undefined}
      whileTap={isTablet ? 'tap' : undefined}
      onClick={onClick}
    >
      <IconBg>
        <Icon as={MdCode} />
      </IconBg>
      <Span>{label}</Span>
    </Button>
  )
}
