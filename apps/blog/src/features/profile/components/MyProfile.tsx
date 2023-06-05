import { FC } from 'react'
import { Avatar, Heading, HStack, Text, VStack, SkeletonCircle, Skeleton } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import { Button } from '@packages/ui'

import { Profile } from 'graphql/graphql'

type Props = {
  image: Profile['profileImage']
  name: Profile['profileName']
  job: Profile['job']
  tweet: Profile['tweet']
  isLoading: boolean
}
export const MyProfile: FC<Props> = ({ image, name, job, tweet, isLoading }) => {
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
        {!isLoading && image?.url ? (
          <Avatar size="xl" src={image.url}></Avatar>
        ) : (
          <SkeletonCircle width="96px" height="96px" />
        )}
        <VStack alignItems="flex-start" gap={{ base: '2', sm: '4' }}>
          {!isLoading && name ? (
            <Heading size={{ base: 'lg', sm: 'xl' }}>{name}</Heading>
          ) : (
            <Skeleton
              width="100%"
              height={{
                base: '24px',
                sm: '36px',
              }}
            />
          )}
          {!isLoading && job ? (
            <Text fontSize={{ base: 'sm', sm: 'md' }} style={{ marginTop: 0 }}>
              {job}
            </Text>
          ) : (
            <Skeleton
              width="100%"
              height={{
                base: '16px',
                sm: '14px',
              }}
            />
          )}
          <HStack justifyContent="flex-start" style={{ marginTop: 0 }}>
            <Button leftIcon={<FaTwitter />} backgroundColor="blue.500" size="sm">
              Twitter
            </Button>
            <Button leftIcon={<FaGithub />} size="sm">
              GitHub
            </Button>
          </HStack>
        </VStack>
      </HStack>
      {!isLoading && tweet ? (
        <Text
          fontSize={{
            base: 'xs',
            sm: 'md',
          }}
          style={{ marginTop: 0 }}
        >
          {tweet}
        </Text>
      ) : (
        <Skeleton
          width="100%"
          height={{
            base: '16px',
            sm: '12px',
          }}
        />
      )}
    </VStack>
  )
}
