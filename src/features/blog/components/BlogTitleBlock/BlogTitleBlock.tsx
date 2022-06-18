import { FC } from 'react'

import { Figure, Image, Stack, Title, Date } from './BlogTitleBlock.styles'

import { getDayjs } from '@/libs'
import { SNSArea } from '@/components'

type Props = {
  title: string
  date: string
  thumnail: {
    title: string
    url: string
  }
}

const dayjs = getDayjs()

export const BlogTitleBlock: FC<Props> = ({ title, date, thumnail }) => {
  return (
    <Stack>
      <Figure>
        <Image src={thumnail.url} alt={thumnail.title} />
      </Figure>
      <Title>{title}</Title>
      <Date>{`${dayjs(date).format('YYYY.MM.DD')} 公開`}</Date>
      <SNSArea />
    </Stack>
  )
}
