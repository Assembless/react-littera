import * as React from "react";
import withLittera from '../src/withLittera'
import { mount, shallow } from "enzyme";
import { LitteraProvider } from "../src";
import { LitteraProps } from "../types";

const mockTranslations = {
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  }
};

const mockTranslated = {
  simple: "Simple"
};

const Component = withLittera(mockTranslations)(({translated}: LitteraProps) => {
  return <div>{translated.simple}</div>
});

describe('withLittera', () => {
  it('should be a function', () => {
    expect(typeof withLittera).toBe('function')
  })

  it('should render the component with translated text', () => {
    const wrapper = mount(
      <Component />, 
      {
        wrappingComponent: LitteraProvider, 
        wrappingComponentProps: {locales: ["en_US"], initialLocale: "en_US"}
      });

    expect(wrapper.find("div").props().children).toBe(mockTranslated.simple);
  });
})
