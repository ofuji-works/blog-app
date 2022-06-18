import type { FC } from 'react'

import { FaGithub, FaTwitter } from 'react-icons/fa'

import { Stack, SNS, ExternalLink } from './SNSArea.styles'

/**
 * @typedef {object} SNSType
 * @property {string} icon icon font
 * @property {string} url link url
 */
type SNSType = {
  icon: string
  url: string
}

/**
 * @typedef {object} Props
 * @property {SNSType} sns SNSアイコン
 */
type Props = {
  sns?: SNSType[]
}

export const SNSArea: FC<Props> = ({ sns }) => {
  return (
    <Stack>
      {sns?.map(({ icon, url }) => {
        let as = FaTwitter
        switch (icon) {
          case 'twitter':
            as = FaTwitter
            break
          case 'github':
            as = FaGithub
            break
        }
        return (
          <ExternalLink key={`sns-${icon}`} as="a" href={url} target="_blank">
            <SNS aria-label={icon} as={as} />
          </ExternalLink>
        )
      })}
    </Stack>
  )
}

SNSArea.defaultProps = {
  sns: [
    {
      icon: 'github',
      url: 'https://github.com/ofuji-works/',
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/yuta66510630/',
    },
  ],
}
