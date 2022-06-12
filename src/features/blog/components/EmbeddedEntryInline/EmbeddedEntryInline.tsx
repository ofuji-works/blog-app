import { FC } from 'react'

import { EmbeddedEntryInline as Entries } from '../../queries'

type Props = {
  id: string
  entries: Entries[]
}

export const EmbeddedEntryInline: FC<Props> = ({ id, entries }) => {
  const entry = entries.find((entry) => entry.sys.id === id)
  return <></>
}
