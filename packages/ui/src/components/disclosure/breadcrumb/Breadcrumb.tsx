import { FC } from 'react'
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbItemProps,
  BreadcrumbProps,
  BreadcrumbLinkProps,
} from '@chakra-ui/react'
import { MdArrowRight } from 'react-icons/md'

const Separator: FC<BreadcrumbProps> = (props) => {
  return <ChakraBreadcrumb fontSize="sm" fontWeight="medium" {...props} separator={<MdArrowRight />} />
}

const Item: FC<BreadcrumbItemProps> = ({ children, ...rest }) => {
  return <ChakraBreadcrumbItem {...rest}>{children}</ChakraBreadcrumbItem>
}

const Link: FC<BreadcrumbLinkProps> = ({ children, ...rest }) => {
  return <ChakraBreadcrumbLink {...rest}>{children}</ChakraBreadcrumbLink>
}

export const Breadcrumb = {
  Separator,
  Item,
  Link,
}
