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
var PageGlow_exports = {};
__export(PageGlow_exports, {
  PageGlow: () => PageGlow
});
module.exports = __toCommonJS(PageGlow_exports);
var import_useTint = require("./Tints/useTint"), import_react = require("react"), import_tamagui = require("tamagui"), import_TintSection = require("./TintSection"), import_jsx_runtime = require("react/jsx-runtime");
const PageGlow = (0, import_react.memo)(() => {
  const { tints, tint, name, tintIndex } = (0, import_useTint.useTint)(), [index, setIndex] = (0, import_react.useState)(0), [scrollTop, setScrollTopRaw] = (0, import_react.useState)(0), setScrollTop = (0, import_tamagui.useDebounce)(setScrollTopRaw, 200), scale = 1;
  import_tamagui.isClient && (0, import_TintSection.useTintSectionIndex)((index2) => {
    var _a;
    setIndex(index2);
    const sy = ((_a = document.documentElement) == null ? void 0 : _a.scrollTop) ?? 0;
    setScrollTop(sy + 100);
  });
  const glows = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tints.map((cur, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.YStack,
    {
      overflow: "hidden",
      h: "100vh",
      w: 1e3,
      theme: cur,
      o: cur === tint ? 0.3 : 0,
      fullscreen: !0,
      left: "calc(50vw - 500px)",
      x: 0,
      scale,
      className: "hero-blur"
    },
    `${cur}${i}`
  )) }), [scale, tint, tints]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.YStack,
    {
      pos: "absolute",
      t: 0,
      l: 0,
      contain: "layout",
      pe: "none",
      animation: "quick",
      zi: -1,
      x: 0,
      y: scrollTop,
      children: glows
    },
    0
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PageGlow
});
//# sourceMappingURL=PageGlow.js.map
