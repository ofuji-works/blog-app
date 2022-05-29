import { FC } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import { Avatar, Card, Name, Description, Role, SNS, SNSArea } from './Profile.styles'

import { useBreakPoints } from '@/hooks/index'

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
  const { isSP } = useBreakPoints()

  const snsLinkHandler = () => {
    console.log('profile')
  }

  return (
    <Card maxW={isSP ? '100%' : '22.5rem'} src={src}>
      <Avatar size="xl" name={name} />
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