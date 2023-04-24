import * as React from "react";
import { TransProps } from "../types";

/**
 * This object contains the default HTML elements that can be parsed and rendered.
 */
const DEFAULT_ELEMENTS = {
  a: "a",
  b: "b",
  i: "i",
  strong: "strong",
  em: "em",
  p: "p",
  span: "span",
  div: "div",
  ul: "ul",
  ol: "ol",
  li: "li",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  br: "br",
};

/**
 * Trans is a custom translation component that can interpolate variables and parse HTML elements.
 *
 * @param {ReactNode} children - The translation string to be rendered.
 * @param {Record<string, string | ReactNode>} [values] - An object containing values to be interpolated in the translation string.
 * @param {Record<string, ElementType | string>} [components] - An object containing custom React components or HTML tags to be parsed and rendered.
 *
 * @returns {JSX.Element} A React element.
 *
 * @example
 *
 * ```jsx
 * import React from 'react';
 * import { Trans, useLittera } from '@assembless/react-littera';
 *
 * const translations = {
 *   welcome: {
 *     en_US: "Welcome <strong>{name}</strong>!",
 *     de_DE: "Willkommen <strong>{name}</strong>!",
 *     pl_PL: "Witaj <strong>{name}</strong>!",
 *   },
 * };
 *
 * function App() {
 *   const translated = useLittera(translations);
 *
 *   return (
 *     <Trans values={{ name: "Jack" }}>
 *       {translated}
 *     </Trans>
 *   );
 * }
 * ```
 */
const Trans: React.FC<TransProps> = ({ children, values = {}, components = {} }) => {
  /**
   * This function interpolates the given text string with the provided values.
   *
   * @param {string} text - The string to be interpolated.
   *
   * @returns {ReactNode} The interpolated string.
   */
  const interpolate = React.useCallback(
    (text: string): React.ReactNode => {
      let result = text;
      Object.entries(values).forEach(([key, value]) => {
        const pattern = new RegExp(`{${key}}`, "g");
        result = result.replace(pattern, String(value));
      });
      return result;
    },
    [values]
  );

  /**
   * This function takes a child node and returns a parsed React element.
   * If the child is a string, it will interpolate the string and parse any HTML tags found.
   * If the child is a React element, it will parse any child nodes it contains.
   *
   * @param {ReactNode} child - The child node to be parsed.
   *
   * @returns {ReactNode} The parsed child node.
   */
  const renderChild = React.useCallback(
    (child: React.ReactNode): React.ReactNode => {
      if (typeof child === "string") {
        const htmlTagRegex = /(<[^>]*>)/g; // Include the HTML tag in the regex match
        const parts = child.split(htmlTagRegex);

        return parts
          .map((part, index) => {
            if (htmlTagRegex.test(parts[index - 1] || "")) {
              // This part is an HTML tag, so convert it to a React component
              const tagName = parts[index - 1].replace(/<|>/g, "");
              const Component = components[tagName] || DEFAULT_ELEMENTS[tagName];
              if (Component) {
                return <Component key={index}>{interpolate(part)}</Component>;
              }
            }
            // This part is not an HTML tag, so interpolate it
            return interpolate(part);
          })
          .filter((part) => (typeof part === "string" ? !part.match(htmlTagRegex) : true));
      } else if (React.isValidElement(child)) {
        const { type, props } = child;
        const Component =
          typeof type === "string"
            ? components[type.toLowerCase()] ?? DEFAULT_ELEMENTS[type.toLowerCase()]
            : type;
        // Parse the child nodes.
        const childNodes = React.Children.map(props.children, renderChild);
        if (Component) {
          return <Component {...props}>{childNodes}</Component>;
        } else {
          const newProps = { ...props, children: childNodes };
          return React.cloneElement(child, newProps);
        }
      }
      return child;
    },
    [interpolate, components]
  );

  const renderedChildren = React.useMemo(
    () => React.Children.map(children, renderChild),
    [children, renderChild]
  );

  return <>{renderedChildren}</>;
};

export default Trans;
