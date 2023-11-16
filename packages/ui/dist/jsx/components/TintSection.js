import { useOnIntersecting } from "./useOnIntersecting";
import { getTints } from "./Tints/tints";
import { useTint } from "./Tints/useTint";
import { useEffect, useMemo, useRef } from "react";
import { XStack, YStack, styled } from "tamagui";
const numIntersectingAtSection = getTints().tints.map((_) => 0), TintSection = ({ children, index, themed, zIndex, ...props }) => {
  const top = useRef(null), bottom = useRef(null), mid = useRef(null), { tint, tints, setTintIndex } = useTint();
  return useOnIntersecting(
    useMemo(() => [top, mid, bottom], []),
    (entries) => {
      const count = entries.reduce((a, b) => a + (b?.isIntersecting ? 1 : 0), 0);
      if (count < 2)
        return;
      numIntersectingAtSection[index] = count;
      let topIndex = -1, topStr = -1;
      if (numIntersectingAtSection.forEach((str, index2) => {
        str >= topStr && (topIndex = index2, topStr = str);
      }), topIndex === index && topIndex !== current) {
        const tintIndex = topIndex <= 1 ? 3 : topIndex % tints.length;
        setTintIndex(tintIndex), current = index, listeners.forEach((cb) => cb(topIndex, count));
      }
    },
    {
      threshold: 0.1
    }
  ), <YStack zIndex={zIndex} pos="relative">
    {useMemo(() => <>
      <XStack ref={top} pos="absolute" t="10%" l={0} r={0} h={10} o={0} pe="none" />
      <XStack ref={mid} pos="absolute" t="50%" l={0} r={0} h={10} o={0} pe="none" />
      <XStack
        ref={bottom}
        pos="absolute"
        b="10%"
        l={0}
        r={0}
        h={10}
        o={0}
        pe="none"
      />
    </>, [top, mid, bottom])}
    <HomeSection theme={themed ? tint : null} {...props}>{useMemo(() => children, [children])}</HomeSection>
  </YStack>;
};
let current = 0;
const listeners = /* @__PURE__ */ new Set(), useTintSectionIndex = (cb) => {
  useEffect(() => (listeners.add(cb), () => {
    listeners.delete(cb);
  }), []);
}, HomeSection = styled(YStack, {
  name: "Section",
  pos: "relative",
  py: "$14",
  zi: 2,
  variants: {
    below: {
      true: {
        zi: 1
      }
    }
  }
}), SectionTinted = ({
  children,
  gradient,
  extraPad,
  bubble,
  noBorderTop,
  ...props
}) => {
  const { tint } = useTint(), childrenMemo = useMemo(() => children, [children]);
  return <YStack
    zi={2}
    contain="paint"
    pos="relative"
    py="$14"
    elevation="$2"
    {...bubble && {
      maw: 1400,
      br: "$6",
      bw: 1,
      boc: `$${tint}4`,
      als: "center",
      width: "100%"
    }}
    {...props}
  >
    <YStack
      fullscreen
      className="all ease-in ms1000"
      zi={-1}
      o={0.4}
      bc={gradient ? `$${tint}2` : null}
      {...!bubble && {
        btw: noBorderTop ? 0 : 1,
        bbw: 1,
        boc: `$${tint}3`
      }}
    />
    {childrenMemo}
  </YStack>;
};
export {
  HomeSection,
  SectionTinted,
  TintSection,
  useTintSectionIndex
};
//# sourceMappingURL=TintSection.js.map
