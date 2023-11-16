import { useTint } from "./Tints/useTint";
import { memo, useMemo, useState } from "react";
import { YStack, isClient, useDebounce } from "tamagui";
import { useTintSectionIndex } from "./TintSection";
const PageGlow = memo(() => {
  const { tints, tint, name, tintIndex } = useTint(), [index, setIndex] = useState(0), [scrollTop, setScrollTopRaw] = useState(0), setScrollTop = useDebounce(setScrollTopRaw, 200), scale = 1;
  isClient && useTintSectionIndex((index2) => {
    setIndex(index2);
    const sy = document.documentElement?.scrollTop ?? 0;
    setScrollTop(sy + 100);
  });
  const glows = useMemo(() => <>{tints.map((cur, i) => {
    const active = cur === tint;
    return <YStack
      key={`${cur}${i}`}
      overflow="hidden"
      h="100vh"
      w={1e3}
      theme={cur}
      o={active ? 0.3 : 0}
      fullscreen
      left="calc(50vw - 500px)"
      x={0}
      scale={scale}
      className="hero-blur"
    />;
  })}</>, [scale, tint, tints]);
  return <YStack
    pos="absolute"
    t={0}
    l={0}
    contain="layout"
    pe="none"
    animation="quick"
    key={0}
    zi={-1}
    x={0}
    y={scrollTop}
  >{glows}</YStack>;
});
export {
  PageGlow
};
//# sourceMappingURL=PageGlow.js.map
