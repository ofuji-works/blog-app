import '../../mock/matchMedia'
import { screen } from '@testing-library/react'
import { server } from '../../mock/server'
import { render } from '../../utils/provider-wrapper'

import Home from '@/pages/index'

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
  it('render top page', async () => {
    const { getByRole } = render(<Home />)
    screen.getByText('Ofuji Portfolio')

    expect(await screen.findByText('モック記事')).toBeInTheDocument()
  })
})
