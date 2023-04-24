/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Trans from '../src/Trans';

describe('<Trans />', () => {
  it('renders the translation string', () => {
    const { container } = render(<Trans>{"Welcome to our website!"}</Trans>);
    expect(screen.getByText('Welcome to our website!')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('interpolates the provided values', () => {
    const { container } = render(<Trans values={{ name: 'John' }}>{"Hello {name}!"}</Trans>);
    expect(screen.getByText('Hello John!')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('parses HTML tags in translation strings', () => {
    const { container } = render(<p><Trans>{"Hello <strong>World</strong>!"}</Trans></p>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelector('strong')).toBeInTheDocument();
  });

  it('parses HTML tags from nodes', () => {
    const { container } = render(<p><Trans values={{ name: "Jack" }}>Hello <strong>{`{name}`}</strong>!</Trans></p>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelector('strong')).toBeInTheDocument();
  });

  it('renders custom React components', () => {
    const CustomComponent = ({ children }) => <span data-testid="custom">{children}</span>;
    const { container } = render(
      <Trans components={{ custom: CustomComponent }}>
        {"<custom>Hello World!</custom>"}
      </Trans>
    );
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
    expect(screen.getByTestId('custom')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});