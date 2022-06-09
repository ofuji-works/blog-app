import { FC } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import type { Document } from '@contentful/rich-text-types'

type Props = {
  document: Document
}

export const Blog: FC<Props> = ({ document }) => {
  return <>{documentToReactComponents(document)}</>
}
