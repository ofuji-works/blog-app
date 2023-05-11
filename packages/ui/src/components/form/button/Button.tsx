import { Button as ChakraButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ComponentProps, FC } from 'react'

type Props = ComponentProps<typeof ChakraButton>

export const Button: FC<Props> = (props) => {
  return (
    <ChakraButton
      as={motion.button}
      whileHover={{
        boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
      }}
      whileTap={{
        scale: 0.95,
      }}
      {...props}
    />
  )
}
