import React from "react";
function unwrapText(children) {
  return React.Children.toArray(children).map((x) => x?.props?.children ? x.props.children : x);
}
export {
  unwrapText
};
//# sourceMappingURL=unwrapText.js.map
