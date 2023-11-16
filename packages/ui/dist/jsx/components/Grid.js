import { isWeb } from "@tamagui/core";
import { XStack } from "tamagui";
import React from "react";
function Grid({ children, columns, itemMinWidth = 200, gap }) {
  if (isWeb)
    return <div
      style={{
        gap,
        display: "grid",
        justifyContent: "stretch",
        // gridTemplateRows: 'repeat(4, 1fr)',
        gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
        // gridTemplateColumns: '1fr 1fr',
      }}
    >{children}</div>;
  const childrenList = React.Children.toArray(children);
  return <XStack alignItems="center" justifyContent="center" flexWrap="wrap">{childrenList.map((child, i) => child ? <XStack
    key={i}
    flex={1}
    minWidth={itemMinWidth}
    marginRight={gap}
    marginBottom={gap}
  >{child}</XStack> : null)}</XStack>;
}
export {
  Grid
};
//# sourceMappingURL=Grid.js.map
