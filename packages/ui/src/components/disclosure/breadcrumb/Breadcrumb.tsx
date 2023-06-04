import { FC } from 'react'
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbItemProps,
  BreadcrumbProps,
} from '@chakra-ui/react'
import { MdArrowRight } from 'react-icons/md'

const Separator: FC<BreadcrumbProps> = (props) => {
  return <ChakraBreadcrumb fontSize="sm" fontWeight="medium" {...props} separator={<MdArrowRight />} />
}

const Item: FC<BreadcrumbItemProps> = ({ children, ...rest }) => {
  return (
    <ChakraBreadcrumbItem {...rest}>
      <ChakraBreadcrumbLink>{children}</ChakraBreadcrumbLink>
    </ChakraBreadcrumbItem>
  )
}

export const Breadcrumb = {
  Separator,
  Item,
}
