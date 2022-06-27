import Link from 'next/link'
import { FC, useEffect, useRef, useCallback } from 'react'
import { useAnimation } from 'framer-motion'

import { framerVariants, Header as Container, Title } from './Header.styles'

export const Header: FC = () => {
  const controls = useAnimation()
  const header = useRef<HTMLElement>(null)

  const animateHander = useCallback(() => {
    if (window.scrollY && window.scrollY > 0) {
      controls.start(framerVariants.start)
    } else {
      controls.start(framerVariants.stop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', animateHander)
    return () => {
      window.removeEventListener('scroll', animateHander)
    }
  }, [animateHander])

  return (
    <Container animate={controls} ref={header}>
      <h1>
        <Link href="/" passHref>
          <Title>Ofuji Portfolio</Title>
        </Link>
      </h1>
    </Container>
  )
}
