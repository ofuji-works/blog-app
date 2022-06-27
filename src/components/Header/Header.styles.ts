import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariants = {
  start: { boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)' },
  stop: { boxShadow: '0 0 0 rgba(0, 0, 0, 0)', transition: { duration: 0 } },
}

export const Header = chakra(motion.header, {
  baseStyle: {
    margin: '0 auto',
    marginTop: 0.5,
    height: '4rem',
    width: {
      base: '95vw',
      sm: '960px',
    },
    borderWidth: 1,
    borderColor: 'gray.150',
    borderRadius: 'base',
    position: 'sticky',
    top: 0.5,
    zIndex: 100,
    bgColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'start',
    paddingLeft: 1,
  },
})

export const Title = chakra('a', {
  baseStyle: {
    fontSize: '2xl',
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: '1.75em',
  },
})
