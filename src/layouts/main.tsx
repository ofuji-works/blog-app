import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { Box, Container, Tab, Tabs, TabList, VStack } from '@chakra-ui/react'
import map from 'lodash/map'

import { Profile } from '@/features/profile'
import { ROUTES } from '@/config'

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  const router = useRouter()
  const linkHandler = (url: string) => {
    router.push(url)
  }
  return (
    <VStack backgroundColor="gray.50">
      <Box backgroundColor="white" width="100%" boxShadow="base">
        <Container maxW="900px">
          <Profile />
          <Tabs variant="unstyled">
            <TabList
              justifyContent="center"
              padding={{
                base: '1',
                sm: '3',
              }}
            >
              {map(ROUTES, (route) => {
                return (
                  <Tab
                    key={`key-${route.path}`}
                    onClick={() => linkHandler(route.path)}
                    borderRadius="full"
                    fontWeight="semibold"
                    fontSize={{
                      base: 'sm',
                      sm: 'md',
                    }}
                    paddingY={{
                      base: '1',
                      sm: '2',
                    }}
                    _selected={{
                      bg: 'black',
                      color: 'white',
                    }}
                  >
                    Blogs
                  </Tab>
                )
              })}
            </TabList>
          </Tabs>
        </Container>
      </Box>
      <Container maxW="900px">
        <Box
          paddingY={{
            base: '8',
            sm: '16',
          }}
        >
          {children}
        </Box>
      </Container>
    </VStack>
  )
}
