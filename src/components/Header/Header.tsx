import { FC, useEffect, useRef } from 'react'
import { useAnimation } from 'framer-motion'

import { framerVariants, Header as Container, Title } from './Header.styles'

export const Header: FC = () => {
  const controls = useAnimation()
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    const animateHander = () => {
      if (window.scrollY && window.scrollY > 0) {
        controls.start(framerVariants.start)
      } else {
        controls.start(framerVariants.stop)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', animateHander)
    }
    return () => {
      window.removeEventListener('scroll', animateHander)
    }
  }, [])

  return (
    <Container animate={controls} ref={header}>
      <Title>Portfolio</Title>
    </Container>
  )
}
