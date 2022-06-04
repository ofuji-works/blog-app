import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    backgroundColor: '#000',
    color: '#FFF',
    borderColor: '#000',
  },
  tap: {
    scale: 0.95,
  },
}

export const ListWrapper = chakra('div', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      base: 1,
      sm: 1.5,
    },
  },
})

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

export const PageBtnSP = chakra(motion.button, {
  baseStyle: {
    width: '100%',
    fontSize: 'md',
    color: 'white',
    bgColor: 'black',
    paddingY: 0.75,
    borderRadius: 'base',
  },
})
