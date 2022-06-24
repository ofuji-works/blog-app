import { FC } from 'react'

import { BlogType } from '../../queries'

type Props = {
  id: string
  entries: BlogType[]
}

export const EmbeddedEntryInline: FC<Props> = ({ id, entries }) => {
  const entry = entries.find((entry) => entry.sys.id === id)
  console.log(entry)
  return <></>
}
