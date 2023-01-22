import type { FC } from 'react'

import { HStack } from '@chakra-ui/react'
import { MdCode } from 'react-icons/md'

import type { Tag } from '../../types'

import { Button } from '@/components'

type Props = {
  items: Tag[]
}
export const TagList: FC<Props> = ({ items }) => (
  <HStack flexWrap="wrap" justifyContent="flex-start" gap="4px">
    {items.map((item) => (
      <Button key={item.id} variant="primary" size="xs" leftIcon={<MdCode />} style={{ margin: '0' }}>
        {item.name}
      </Button>
    ))}
  </HStack>
)
