import { Fragment } from "react";
import { H3 } from "tamagui";
const nbspLastWord = (sentence) => {
  if (typeof sentence != "string")
    return sentence;
  const titleWords = sentence.split(" ");
  return titleWords.length === 1 ? sentence : titleWords.map((word, i) => i === titleWords.length - 1 ? <Fragment key={i}>
    {"\xA0"}
    {word}
  </Fragment> : <Fragment key={i}>
    {" "}
    {word}
  </Fragment>);
}, SubTitle = ({ children, ...props }) => {
  if (!children)
    return null;
  const childText = typeof children == "string" ? children : children.props.children;
  return <H3
    pos="relative"
    color="$gray9"
    width="max-content"
    fontFamily="$body"
    size="$8"
    lh="$7"
    ls={-0.5}
    fontWeight="300"
    tag="p"
    mb="$3"
    mt="$0"
    maxWidth="95%"
    $sm={{
      maxWidth: "100%",
      size: "$6"
    }}
    {...props}
  >{nbspLastWord(childText)}</H3>;
};
export {
  SubTitle,
  nbspLastWord
};
//# sourceMappingURL=SubTitle.js.map
