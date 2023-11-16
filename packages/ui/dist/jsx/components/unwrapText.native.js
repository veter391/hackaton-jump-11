import React from "react";
function unwrapText(children) {
  return React.Children.toArray(children).map((x) => {
    var _a;
    return (_a = x == null ? void 0 : x.props) != null && _a.children ? x.props.children : x;
  });
}
export {
  unwrapText
};
//# sourceMappingURL=unwrapText.js.map
