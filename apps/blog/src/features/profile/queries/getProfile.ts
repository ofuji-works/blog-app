import { gql } from '@apollo/client'

export const getProfile = gql`
  query GetProfile($id: String!) {
    profile(id: $id) {
      profileImage {
        title
        url
      }
      profileName
      tweet
      job
    }
  }
`
