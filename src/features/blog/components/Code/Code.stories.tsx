import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Code } from './Code'

const meta: ComponentMeta<typeof Code> = {
  title: 'features/Blogs/Code',
  component: Code,
}

export const TypeScript: ComponentStoryObj<typeof Code> = {
  name: 'syntax hightlight for TypeScript',
  args: {
    code: `typescript
import { server } from './mock'
import { render } from './utils'
import { screen } from '@testing-library/react'
import SsrPage from '@/pages/ssr'

beforeAll(() => { server.listen() })
beforeEach(() => { server.resetHandlers() })
afterAll(() => { server.close() })
describe('getServerSideProps tests', () => {
  it('render title', async () => {
    render(<SsrPage />)
    expect(awaitscreen.findByText('graphql sample')).toBeInTheDocument()
  })
})`,
  },
}

export const Rust: ComponentStoryObj<typeof Code> = {
  name: 'syntax hightlight for Rust',
  args: {
    code: `rust
use std::io::stdin;

fn main () {
  let mut input = String::new();
  stdin().read_line(&mut input).unwrap(); 
  let S = input.trim();
  println!("{}", S);
}`,
  },
}

export default meta
