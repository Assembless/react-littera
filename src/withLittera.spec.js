import React from 'react';
import { mount } from 'enzyme';
import withLittera from './withLittera';

const mockTranslations = {
  'unique.example': {
    en_US: 'Example',
    pl_PL: 'Przykład',
    de_DE: 'Beispiel',
  },
};

const mockLanguage = 'en_US';
const mockOptions = {
  stacked: true,
};

jest.mock('./LitteraProvider', () => ({
  getLanguage: jest.fn(() => mockLanguage),
  getOptions: jest.fn(() => mockOptions),
  getGlobals: jest.fn(() => {}),
}));

const prepareTest = () => {
  const TestComponent = () => <div>Test</div>;
  const TestComponentWithLittera = withLittera(mockTranslations)(TestComponent);
  const wrapper = mount(<TestComponentWithLittera />);

  return {
    TestComponent,
    TestComponentWithLittera,
    wrapper,
  };
};

describe('withLittera', () => {
  it('should be a function', () => {
    expect(typeof withLittera).toBe('function');
  });

  describe('When a react component is passed as a parameter', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should render the wrapped component', () => {
      const { wrapper } = prepareTest();
      expect(wrapper.html()).toBe('<div>Test</div>');
    });
  });
});
