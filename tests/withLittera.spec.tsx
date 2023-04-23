import * as React from "react";
import withLittera from '../src/withLittera'

const mockTranslations = {
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  },
  hello: (name: string) => ({
    de_DE: `Hallo ${name}`,
    pl_PL: `Cześć ${name}`,
    en_US: `Hello ${name}`
  })
};

const mockTranslated = {
  simple: "Simple",
  hello: `Hello Mike`
};

const Component = withLittera(mockTranslations)(({translated}) => {
  return <div>{translated.simple}</div>
});

const ComponentWithVar = withLittera(mockTranslations)(({translated}) => {
  return <div>{translated.hello("Mike")}</div>
});

describe('withLittera', () => {
  it('should be a function', () => {
    expect(typeof withLittera).toBe('function')
  })
})
