import { FC, useState } from 'react'
import { VStack } from '@chakra-ui/react'

import { TagLink } from '../TagLink'

import { Bg, FilterButton, FilterBox, framerVariant, TagBox } from './SearchTagLinks.styles'

import { useBreakPoints } from '@/hooks/index'

type Props = {
  categories: string[]
  tags: string[]
}

export const SearchTagLinks: FC<Props> = ({ categories, tags }) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL')
  const { isTablet } = useBreakPoints()
  return (
    <Bg>
      <VStack mb={4}>
        <FilterBox>
          {categories.map((filter) => (
            <FilterButton
              key={`btn-${filter}`}
              variants={framerVariant}
              data-active={filter === filterStatus ? 'true' : undefined}
              _active={{
                bgColor: 'gray.100',
              }}
              whileHover={!isTablet ? 'hover' : undefined}
              whileTap={isTablet ? 'tap' : undefined}
              onClick={() => {
                setFilterStatus(filter)
              }}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterBox>
      </VStack>
      <TagBox>
        {tags.map((tag) => (
          <TagLink key={`tag-${tag}`} label={tag} onClick={() => console.log(tag)} />
        ))}
      </TagBox>
    </Bg>
  )
}
