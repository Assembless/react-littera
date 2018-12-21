import React from 'react';
import { mount } from 'enzyme';

describe('LitteraProvider', () => {
  describe('When stacked option is true', () => {
    it('should successfuly set language', () => {
      jest.resetModules();

      // eslint-disable-next-line
      const { default: LitteraProvider, getLanguage, setLanguage } = require('./LitteraProvider');

      // eslint-disable-next-line
      const wrapper = mount(
        <LitteraProvider language="de_DE">
          <div>Test</div>
        </LitteraProvider>,
      );

      expect(getLanguage()).toBe('de_DE');
      setLanguage('pl_PL');
      expect(getLanguage()).toBe('pl_PL');
    });
  });

  it('should render the wrapped component', () => {
    jest.resetModules();

    // eslint-disable-next-line
    const { default: LitteraProvider } = require('./LitteraProvider');

    const wrapper = mount(
      <LitteraProvider language="de_DE">
        <div>Test</div>
      </LitteraProvider>,
    );

    expect(wrapper.html()).toBe('<div>Test</div>');
  });
});
