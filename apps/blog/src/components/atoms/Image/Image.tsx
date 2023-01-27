import type { FC, ComponentProps } from 'react'

import NextImage, { ImageProps } from 'next/image'
import { chakra } from '@chakra-ui/react'

type Props = {
  src: ImageProps['src']
  alt: ImageProps['alt']
  blurDataURL: ImageProps['blurDataURL']
} & ComponentProps<typeof Figure>

export const Image: FC<Props> = ({ src, alt, blurDataURL, ...figureProps }) => {
  return (
    <Figure {...figureProps}>
      <StyledImage src={src} alt={alt} blurDataURL={blurDataURL} layout="fill" objectFit="contain" placeholder="blur" />
    </Figure>
  )
}

const Figure = chakra('figure', {
  baseStyle: {
    position: 'relative',
    borderRadius: 'base',
  },
})
const StyledImage = chakra(NextImage, {
  baseStyle: {
    borderRadius: 'base',
  },
  shouldForwardProp: () => true,
})
