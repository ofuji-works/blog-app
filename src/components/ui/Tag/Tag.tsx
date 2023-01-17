import type { ComponentProps, FC } from 'react'

import { Tag as ChakraTag, TagLabel, TagLeftIcon, TagRightIcon } from '@chakra-ui/react'

type Props = ComponentProps<typeof ChakraTag> & {
  LeftIcon?: ComponentProps<typeof TagLeftIcon>['as']
  RightIcon?: ComponentProps<typeof TagRightIcon>['as']
}

export const Tag: FC<Props> = ({ children, LeftIcon, RightIcon, ...rest }) => {
  return (
    <ChakraTag {...rest}>
      {LeftIcon && <TagLeftIcon as={LeftIcon} />}
      <TagLabel>{children}</TagLabel>
      {RightIcon && <TagRightIcon as={RightIcon} />}
    </ChakraTag>
  )
}
