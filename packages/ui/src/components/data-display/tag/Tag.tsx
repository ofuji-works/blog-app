import React from 'react'
import { Tag as ChakraTag, TagLabel as ChakraTagLabel, TagLeftIcon, TagRightIcon } from '@chakra-ui/react'

type TagProps = {
  children: React.ReactNode
  variant: 'forBlog'
}
const TagProvider: React.FC<TagProps> = ({ children, variant }) => {
  return <ChakraTag variant={variant}>{children}</ChakraTag>
}

type TagLabelProps = {
  children: React.ReactNode
}
const TagLabel: React.FC<TagLabelProps> = ({ children }) => {
  return <ChakraTagLabel>{children}</ChakraTagLabel>
}

type LeftIconProps = {
  as: React.ComponentProps<typeof TagLeftIcon>['as']
}
const LeftIcon: React.FC<LeftIconProps> = ({ as }) => {
  return <TagLeftIcon as={as} />
}

type RightIconProps = {
  as: React.ComponentProps<typeof TagRightIcon>['as']
}
const RightIcon: React.FC<RightIconProps> = ({ as }) => {
  return <TagRightIcon as={as} />
}

export const Tag = { TagProvider, TagLabel, LeftIcon, RightIcon }
