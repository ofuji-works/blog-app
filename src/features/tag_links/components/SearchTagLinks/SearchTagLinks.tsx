import { FC, useState } from 'react'
import { VStack } from '@chakra-ui/react'

import { TagLink } from '../TagLink'

import { Bg, FilterButton, FilterBox, framerVariant, TagBox } from './SearchTagLinks.styles'

import { useBreakPoints } from '@/hooks'

type Props = {
  categories: string[]
  tags: string[]
}

export const SearchTagLinks: FC<Props> = ({ categories, tags }) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL')
  const { isTablet } = useBreakPoints()
  return (
    <Bg id="search-tag-links">
      <VStack mb={4} id="category-filters">
        <FilterBox>
          {categories.map((filter) => (
            <FilterButton
              key={`btn-${filter}`}
              aria-label={filter}
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
      <TagBox id="tag-links">
        {tags.map((tag) => (
          <TagLink key={`tag-${tag}`} label={tag} onClick={() => console.log(tag)} />
        ))}
      </TagBox>
    </Bg>
  )
}
