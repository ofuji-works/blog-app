import { render, RenderOptions } from '@testing-library/react'
import type { FC, ReactNode, ReactElement } from 'react'
import { PageProps } from '@/libs'
import { RootProvider } from '@/providers'

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  // 仮データ
  const pageProps: PageProps = { __APOLLO_STATE__: {} }
  return <RootProvider pageProps={pageProps}>{children}</RootProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
