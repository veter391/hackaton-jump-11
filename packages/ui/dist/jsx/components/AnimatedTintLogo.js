import { useTint } from "./Tints/useTint";
import React, { useEffect, useState } from "react";
import {
  Text,
  XStack,
  Circle,
  Paragraph
} from "tamagui";
const AnimatedTintLogo = React.forwardRef(
  ({
    text = "",
    downscale = 1,
    animated,
    ...props
  }, ref) => {
    const Tint = useTint(), { tintIndex: index, tint } = Tint, tints = Tint.tints.map((t) => `var(--${t}9)`), [hovered, setHovered] = useState(!1), [mounted, setMounted] = useState("start");
    useEffect(() => {
      (window.requestIdleCallback || setTimeout)(() => {
        setTimeout(() => {
          setMounted("animate");
        }, 50), setTimeout(() => {
          setMounted("done");
        }, 1500);
      });
    }, []);
    const getColor = (i) => {
      const isActive = mounted !== "start" && i === index;
      return mounted !== "done" || hovered ? isActive ? "var(--color)" : tints[index] : hovered && isActive ? "var(--color)" : tints[i];
    }, x = Math.round(
      index * 15 + 18 / 2 * (index / tints.length) + 3 + (index === 6 ? -3 : 0)
    ), finetunningOffset = [3, 3, 0, 1, 0, 0, 0];
    return <XStack
      ref={ref}
      onHoverIn={() => setHovered(!0)}
      onHoverOut={() => setHovered(!1)}
      paddingVertical="$2"
      marginVertical="$-2"
      position="relative"
      {...props}
    >
      {animated && <Circle
        animation="quick"
        position="absolute"
        top={5}
        left={finetunningOffset[index]}
        y={mounted === "start" ? -30 : -3}
        x={x}
        size={4}
        backgroundColor="$color9"
      />}
      <Paragraph fontWeight="bold" fontSize="$8">{text.split("").map((c, i) => <Text key={i} onMouseEnter={() => Tint.setTintIndex(i % 7)} color={getColor(i % 7)}>{c}</Text>)}</Paragraph>
    </XStack>;
  }
);
export {
  AnimatedTintLogo
};
//# sourceMappingURL=AnimatedTintLogo.js.map
