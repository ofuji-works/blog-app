import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { VStack } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'

import { TagLink } from '../TagLink'
import { GET_TAGS_QUERY, TagsQuery } from '../../queries'

import { Bg, FilterButton, FilterBox, framerVariant, TagBox } from './SearchTagLinks.styles'

import { useBreakPoints } from '@/hooks'

export const SearchTagLinks: FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('All')
  const categories = ['React']
  const { push } = useRouter()
  const { isTablet } = useBreakPoints()
  const { data, loading } = useQuery<TagsQuery>(GET_TAGS_QUERY, {
    variables: {
      preview: false,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }

  const clickHandler = (tagId: string) => {
    push(`/blog?tag=${tagId}`)
  }

  return (
    <Bg id="search-tag-links">
      <VStack mb={{ base: 2, sm: 4 }} id="category-filters">
        <FilterBox>
          <>
            <FilterButton
              key="btn-all"
              aria-label="btn-all"
              variants={framerVariant}
              data-active={'All' === filterStatus ? 'true' : undefined}
              _active={{
                bgColor: 'gray.100',
              }}
              whileHover={!isTablet ? 'hover' : undefined}
              whileTap={isTablet ? 'tap' : undefined}
              onClick={() => {
                setFilterStatus('All')
              }}
            >
              All
            </FilterButton>
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
          </>
        </FilterBox>
      </VStack>
      <TagBox id="tag-links">
        {data &&
          data.tagCollection.items[0].contentfulMetadata.tags.map((tag) => (
            <TagLink key={`tag-${tag.id}`} {...tag} onClick={clickHandler} />
          ))}
      </TagBox>
    </Bg>
  )
}
