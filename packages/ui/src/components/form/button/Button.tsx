import { Button as ChakraButton, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ComponentProps, FC } from 'react'

type Props = ComponentProps<typeof ChakraButton>

export const Button: FC<Props> = (props) => {
  const [isTablet] = useMediaQuery([`(min-width: ${48 * 16})`])

  return (
    <ChakraButton
      as={motion.button}
      whileHover={
        isTablet
          ? {
              boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
            }
          : undefined
      }
      whileTap={
        isTablet
          ? undefined
          : {
              scale: 0.95,
            }
      }
      {...props}
    />
  )
}
