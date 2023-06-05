import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { MyProfile, getProfile } from '@/features/profile'

import { Profile } from 'graphql/graphql'
import { PROFILE_ID } from 'config/accounts'

export const ProfileArea: FC = () => {
  const { data, loading, error } = useQuery<{ profile: Profile }>(getProfile, {
    variables: {
      id: PROFILE_ID,
    },
  })

  if (error) {
    throw new Error()
  }

  return (
    <MyProfile
      isLoading={loading}
      name={data?.profile.profileName}
      image={data?.profile.profileImage}
      tweet={data?.profile.tweet}
      job={data?.profile.job}
    />
  )
}
