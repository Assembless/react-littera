import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Trans from './Trans'
import { expect, describe, it } from "bun:test";

describe('<Trans />', () => {
  // it('renders the translation string', () => {
  //   const { baseElement } = render(<Trans>{'Welcome to our website!'}</Trans>)
  //   expect(screen.getByText('Welcome to our website!')).toBeTruthy();
  //   expect(baseElement).toMatchSnapshot()
  // })

  // it('interpolates the provided values', () => {
  //   const { baseElement } = render(
  //     <Trans values={{ name: 'John' }}>{'Hello {name}!'}</Trans>
  //   )
  //   expect(screen.getByText('Hello John!')).toBeTruthy();
  //   expect(baseElement).toMatchSnapshot();
  // })

  // it('parses HTML tags in translation strings', () => {
  //   const { container } = render(
  //     <p>
  //       <Trans>{'Hello <strong>World</strong>!'}</Trans>
  //     </p>
  //   )
  //   expect(container.children[0]).toMatchSnapshot()
  //   expect(container.querySelector('strong')).toBeTruthy();
  // })

  // it('parses HTML tags from nodes', () => {
  //   const { container } = render(
  //     <p>
  //       <Trans values={{ name: 'Jack' }}>
  //         Hello <strong>{`{name}`}</strong>!
  //       </Trans>
  //     </p>
  //   )
  //   expect(container.children[0]).toMatchSnapshot()
  //   expect(container.querySelector('strong')).toBeTruthy();
  // })

  // it('renders custom React components', () => {
  //   const CustomComponent = ({ children }: any) => (
  //     <span data-testid='custom'>{children}</span>
  //   )
  //   const { container } = render(
  //     <Trans components={{ custom: CustomComponent }}>
  //       {'<custom>Hello World!</custom>'}
  //     </Trans>
  //   )
  //   expect(screen.getByText('Hello World!')).toBeTruthy();
  //   expect(screen.getByTestId('custom')).toBeTruthy();
  //   expect(container.children[0]).toMatchSnapshot()
  // })
})
