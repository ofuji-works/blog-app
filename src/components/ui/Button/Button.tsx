import { ComponentProps, FC } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { useBreakPoints } from '@/hooks'

type Props = ComponentProps<typeof ChakraButton>

export const Button: FC<Props> = (props) => {
  const { isTablet } = useBreakPoints()

  return (
    <ChakraButton
      as={motion.button}
      whileHover={
        !isTablet
          ? {
              boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
            }
          : undefined
      }
      whileTap={
        isTablet
          ? {
              scale: 0.95,
            }
          : undefined
      }
      {...props}
    />
  )
}
