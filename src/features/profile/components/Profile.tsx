import { FC } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import { Avatar, Card, Name, Description, Role, SNS, SNSArea } from './Profile.styles'

/**
 * @typedef {object} SNS
 * @property {string} icon icon font
 * @property {string} url link url
 */
type SNS = {
  icon: string
  url: string
}

/**
 * @typedef {object} Props
 * @property {string} src プロフィール画像
 * @property {string} name 名前
 * @property {string} role 肩書き
 * @property {string} description 説明
 * @property {SNS} sns SNSアイコン
 */
type Props = {
  src?: string
  name?: string
  role?: string
  description?: string
  sns?: SNS[]
}

export const Profile: FC<Props> = ({ src, name, role, description, sns }) => {
  const snsLinkHandler = () => {
    console.log('profile')
  }

  return (
    <Card src={src}>
      <Avatar size="xl" name={''} />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Description>{description}</Description>
      <SNSArea>
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
          return <SNS key={`sns-${icon}`} aria-label={icon} onClick={snsLinkHandler} as={as} />
        })}
      </SNSArea>
    </Card>
  )
}

Profile.defaultProps = {
  src: undefined,
  name: 'Yuta Okafuji',
  role: 'Frontend developer',
  description: `神戸Sier会社勤務。フロントエンド領域を中心に活動しています。
    React / React Native / Vue / TypeScript / PHP`,
  sns: [
    {
      icon: 'twitter',
      url: '',
    },
    {
      icon: 'github',
      url: 'https://github.com/ofuji-works',
    },
  ],
}
