import type { FC } from 'react'

import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react'

export const Avatar: FC<AvatarProps> = (props) => <ChakraAvatar {...props} />
