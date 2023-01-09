import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import { Container, Tab, Tabs, TabList, TabPanels, TabPanel, VStack } from '@chakra-ui/react'
import map from 'lodash/map'

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
    <Container>
      <VStack>
        <Tabs>
          <TabList>
            {map(ROUTES, (route) => {
              return <Tab onClick={() => linkHandler(route.path)}>Blogs</Tab>
            })}
          </TabList>
        </Tabs>
        {children}
      </VStack>
    </Container>
  )
}
