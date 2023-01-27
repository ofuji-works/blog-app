import type { FC } from 'react'

import { Tab as ChakraTab, Tabs as ChakraTabs, TabList as ChakraTabList } from '@chakra-ui/react'

import type { TabProps, TabsProps, TabListProps } from '@chakra-ui/react'

export const Tabs: FC<TabsProps> = (props) => <ChakraTabs variant="unstyled" {...props} />
export const TabList: FC<TabListProps> = (props) => (
  <ChakraTabList
    justifyContent="center"
    padding={{
      base: '1',
      sm: '3',
    }}
    {...props}
  />
)
export const Tab: FC<TabProps> = (props) => (
  <ChakraTab
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
    {...props}
  />
)
