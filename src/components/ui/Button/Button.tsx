import { ComponentProps, FC, ReactNode } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { useBreakPoints } from '@/hooks'

type Props = {
  // Required
  children: ReactNode
  // Options
  isLoading?: boolean
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
} & Pick<ComponentProps<typeof ChakraButton>, 'leftIcon' | 'variant'>

export const Button: FC<Props> = ({ children, leftIcon, isLoading, onClick, type, variant }) => {
  const { isTablet } = useBreakPoints()

  return (
    <ChakraButton
      as={motion.button}
      variant={variant}
      leftIcon={leftIcon}
      isLoading={isLoading}
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
      type={type}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  )
}
