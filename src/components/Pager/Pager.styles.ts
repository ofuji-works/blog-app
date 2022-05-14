import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    backgroundColor: '#000',
    color: '#FFF',
    borderColor: '#000',
  },
}

export const BtnArea = chakra('div', {
  baseStyle: {
    marginTop: 4,
    display: 'flex',
    gap: 0.5,
  },
})

export const PageBtn = chakra(motion.button, {
  baseStyle: {
    fontSize: 'lg',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.150',
    width: '1.5rem',
    height: '1.5rem',
  },
})
