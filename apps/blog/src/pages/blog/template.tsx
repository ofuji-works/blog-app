import type { ComponentProps, FC } from 'react'

import { BlogList } from '@/features/blog'

type Props = ComponentProps<typeof BlogList>

const Template: FC = () => <BlogList />

export default Template
