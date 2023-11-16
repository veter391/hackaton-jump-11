var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var AnimatedTintLogo_exports = {};
__export(AnimatedTintLogo_exports, {
  AnimatedTintLogo: () => AnimatedTintLogo
});
module.exports = __toCommonJS(AnimatedTintLogo_exports);
var import_useTint = require("./Tints/useTint"), import_react = __toESM(require("react")), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const AnimatedTintLogo = import_react.default.forwardRef(
  ({
    text = "",
    downscale = 1,
    animated,
    ...props
  }, ref) => {
    const Tint = (0, import_useTint.useTint)(), { tintIndex: index, tint } = Tint, tints = Tint.tints.map((t) => `var(--${t}9)`), [hovered, setHovered] = (0, import_react.useState)(!1), [mounted, setMounted] = (0, import_react.useState)("start");
    (0, import_react.useEffect)(() => {
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
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_tamagui.XStack,
      {
        ref,
        onHoverIn: () => setHovered(!0),
        onHoverOut: () => setHovered(!1),
        paddingVertical: "$2",
        marginVertical: "$-2",
        position: "relative",
        ...props,
        children: [
          animated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Circle,
            {
              animation: "quick",
              position: "absolute",
              top: 5,
              left: [3, 3, 0, 1, 0, 0, 0][index],
              y: mounted === "start" ? -30 : -3,
              x,
              size: 4,
              backgroundColor: "$color9"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { fontWeight: "bold", fontSize: "$8", children: text.split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Text, { onMouseEnter: () => Tint.setTintIndex(i % 7), color: getColor(i % 7), children: c }, i)) })
        ]
      }
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedTintLogo
});
//# sourceMappingURL=AnimatedTintLogo.js.map
