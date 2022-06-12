import { FC } from 'react'

import { Stack, Title, Date } from './BlogTitle.styles'

import { getDayjs } from '@/libs'

type Props = {
  title: string
  date: string
}

const dayjs = getDayjs()

export const BlogTitle: FC<Props> = ({ title, date }) => {
  return (
    <Stack>
      <Title>{title}</Title>
      <Date>{`${dayjs(date).format('YYYY.MM.DD')} 公開`}</Date>
    </Stack>
  )
}
