import { FC } from 'react'
import { Avatar, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import { Button } from '@/components'

export const Profile: FC = () => {
  return (
    <VStack
      width="100%"
      alignItems="flex-start"
      gap={{ base: '4', sm: '6' }}
      paddingY={{
        base: '5',
        sm: '6',
      }}
    >
      <HStack
        alignItems="flex-start"
        gap={{
          base: '4',
          sm: '6',
        }}
      >
        <Avatar size={{ base: 'lg', sm: 'xl' }}></Avatar>
        <VStack alignItems="flex-start" gap={{ base: '2', sm: '4' }}>
          <Heading size={{ base: 'md', sm: 'xl' }}>Yuta Okafuji</Heading>
          <Text fontSize={{ base: 'xs', sm: 'md' }} style={{ marginTop: 0 }}>
            Frontend Developer
          </Text>
          <HStack justifyContent="flex-start" style={{ marginTop: 0 }}>
            <Button leftIcon={<FaTwitter />} backgroundColor="blue.500" size={{ base: 'xs', sm: 'sm' }}>
              Twitter
            </Button>
            <Button leftIcon={<FaGithub />} size={{ base: 'xs', sm: 'sm' }}>
              GitHub
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <Text
        fontSize={{
          base: 'xs',
          sm: 'md',
        }}
        style={{ marginTop: 0 }}
      >
        最近はRustを触るのがマイブーム
      </Text>
    </VStack>
  )
}
