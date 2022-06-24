import { render, screen } from '@testing-library/react'

import { server } from '../../mock'
import Top from '@/pages/index'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

describe('Top Page', () => {
  it('render top page', () => {
    render(<Top />)

    screen.getByRole('header')
  })
})
