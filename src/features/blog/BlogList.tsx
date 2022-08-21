import { ComponentProps, FC } from 'react'

import { EnhancedBlogList } from './container'

type Props = ComponentProps<typeof EnhancedBlogList>

const BlogList: FC<Props> = (props) => <EnhancedBlogList {...props} />

export default BlogList
