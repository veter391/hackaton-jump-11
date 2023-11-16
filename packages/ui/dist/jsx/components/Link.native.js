import NextLink from "next/link";
import React from "react";
import { Paragraph, SizableText } from "tamagui";
import { Button } from "tamagui";
const Link = ({
  href = "",
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) => <NextLink href={href} replace={replace} scroll={scroll} shallow={shallow} locale={locale}><SizableText cursor="pointer" tag="span" {...props}>{children}</SizableText></NextLink>, ParagraphLink = ({
  href = "",
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) => {
  const allChildrenStrings = React.Children.toArray(children).every(
    (x) => typeof x == "string"
  );
  return <NextLink href={href} replace={replace} scroll={scroll} shallow={shallow} locale={locale} target="_blank"><Paragraph
    className="paragraph-link"
    cursor="pointer"
    tag="span"
    color="$color"
    hoverStyle={{ color: "$color" }}
    {...props}
  >{children}</Paragraph></NextLink>;
}, ButtonLink = ({
  href = "",
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) => {
  const linkProps = { href, replace, scroll, shallow, locale };
  return <NextLink style={{ textDecoration: "none" }} {...linkProps}><Button tag="span" {...props}>{children}</Button></NextLink>;
};
export {
  ButtonLink,
  Link,
  ParagraphLink
};
//# sourceMappingURL=Link.js.map
