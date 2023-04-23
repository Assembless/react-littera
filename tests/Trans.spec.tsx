import * as React from 'react';
import { mount } from 'enzyme';
import Trans from '../src/Trans';

describe('<Trans />', () => {
  it('renders the translation string', () => {
    const wrapper = mount(
      <Trans>
        {"Welcome to our website!"}
      </Trans>,
    );
    expect(wrapper.text()).toEqual('Welcome to our website!');
  });

  it('interpolates the provided values', () => {
    const wrapper = mount(
      <Trans values={{ name: 'John' }}>
        {"Hello {name}!"}
      </Trans>
    );
    expect(wrapper.text()).toEqual('Hello John!');
  });

  it('parses HTML tags', () => {
    const wrapper = mount(
      <Trans>
        {"Hello <strong>World</strong>!"}
      </Trans>
    );
    expect(wrapper.find('strong')).toHaveLength(1);
  });

  it('renders custom React components', () => {
    const CustomComponent = ({ children }: { children: React.ReactNode }) => <span>{children}</span>;
    const wrapper = mount(
      <Trans components={{ custom: CustomComponent }}>
        {"<custom>Hello World!</custom>"}
      </Trans>
    );
    expect(wrapper.find(CustomComponent)).toHaveLength(1);
  });
});