import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { Box, Container, VStack } from '@chakra-ui/react'
import map from 'lodash/map'

import { ProfileArea } from '@/features/profile'
import { ROUTES } from '@/config'

import { Tab } from '@packages/ui'

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
          <ProfileArea />
          <Tab.Provider>
            <Tab.Lists
              justifyContent="flex-start"
              paddingY={{
                base: '1',
                sm: '3',
              }}
            >
              {map(ROUTES, (route) => {
                return (
                  <Tab.List key={`key-${route.path}`} onClick={() => linkHandler(route.path)}>
                    Blog
                  </Tab.List>
                )
              })}
            </Tab.Lists>
            <Tab.Indicator />
          </Tab.Provider>
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
