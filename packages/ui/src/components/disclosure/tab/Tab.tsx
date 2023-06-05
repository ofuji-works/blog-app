import React from 'react'
import {
  Tab as ChakraTab,
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  TabPanel as ChakraTabPanel,
  TabPanels as ChakraTabPanels,
  TabIndicator as ChakraTabIndicator,
  TabProps,
  TabListProps,
  TabsProps,
  TabPanelProps,
  TabPanelsProps,
  TabIndicatorProps,
} from '@chakra-ui/react'

export const Provider: React.FC<TabsProps> = (props) => <ChakraTabs variant="unstyled" {...props} />

export const Lists: React.FC<TabListProps> = (props) => <ChakraTabList justifyContent="center" gap="8px" {...props} />

export const List: React.FC<TabProps> = (props) => (
  <ChakraTab
    fontWeight="semibold"
    fontSize={{
      base: 'sm',
      sm: 'md',
    }}
    paddingY={1}
    {...props}
  />
)

export const Indicator: React.FC<TabIndicatorProps> = (props) => (
  <ChakraTabIndicator height="2px" bg="gray.700" mt="-2px" {...props} />
)

export const Panel: React.FC<TabPanelProps> = (props) => <ChakraTabPanel {...props} />

export const Panels: React.FC<TabPanelsProps> = (props) => <ChakraTabPanels {...props} />

export const Tab = {
  Provider,
  Lists,
  List,
  Indicator,
  Panels,
  Panel,
}
