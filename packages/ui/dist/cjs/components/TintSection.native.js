var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var TintSection_exports = {};
__export(TintSection_exports, {
  HomeSection: () => HomeSection,
  SectionTinted: () => SectionTinted,
  TintSection: () => TintSection,
  useTintSectionIndex: () => useTintSectionIndex
});
module.exports = __toCommonJS(TintSection_exports);
var import_useOnIntersecting = require("./useOnIntersecting"), import_tints = require("./Tints/tints"), import_useTint = require("./Tints/useTint"), import_react = require("react"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const numIntersectingAtSection = (0, import_tints.getTints)().tints.map((_) => 0), TintSection = ({ children, index, themed, zIndex, ...props }) => {
  const top = (0, import_react.useRef)(null), bottom = (0, import_react.useRef)(null), mid = (0, import_react.useRef)(null), { tint, tints, setTintIndex } = (0, import_useTint.useTint)();
  return (0, import_useOnIntersecting.useOnIntersecting)(
    (0, import_react.useMemo)(() => [top, mid, bottom], []),
    (entries) => {
      const count = entries.reduce((a, b) => a + (b != null && b.isIntersecting ? 1 : 0), 0);
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
  ), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { zIndex, pos: "relative", children: [
    (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { ref: top, pos: "absolute", t: "10%", l: 0, r: 0, h: 10, o: 0, pe: "none" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { ref: mid, pos: "absolute", t: "50%", l: 0, r: 0, h: 10, o: 0, pe: "none" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_tamagui.XStack,
        {
          ref: bottom,
          pos: "absolute",
          b: "10%",
          l: 0,
          r: 0,
          h: 10,
          o: 0,
          pe: "none"
        }
      )
    ] }), [top, mid, bottom]),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeSection, { theme: themed ? tint : null, ...props, children: (0, import_react.useMemo)(() => children, [children]) })
  ] });
};
let current = 0;
const listeners = /* @__PURE__ */ new Set(), useTintSectionIndex = (cb) => {
  (0, import_react.useEffect)(() => (listeners.add(cb), () => {
    listeners.delete(cb);
  }), []);
}, HomeSection = (0, import_tamagui.styled)(import_tamagui.YStack, {
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
  const { tint } = (0, import_useTint.useTint)(), childrenMemo = (0, import_react.useMemo)(() => children, [children]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_tamagui.YStack,
    {
      zi: 2,
      contain: "paint",
      pos: "relative",
      py: "$14",
      elevation: "$2",
      ...bubble && {
        maw: 1400,
        br: "$6",
        bw: 1,
        boc: `$${tint}4`,
        als: "center",
        width: "100%"
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.YStack,
          {
            fullscreen: !0,
            className: "all ease-in ms1000",
            zi: -1,
            o: 0.4,
            bc: gradient ? `$${tint}2` : null,
            ...!bubble && {
              btw: noBorderTop ? 0 : 1,
              bbw: 1,
              boc: `$${tint}3`
            }
          }
        ),
        childrenMemo
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HomeSection,
  SectionTinted,
  TintSection,
  useTintSectionIndex
});
//# sourceMappingURL=TintSection.js.map
