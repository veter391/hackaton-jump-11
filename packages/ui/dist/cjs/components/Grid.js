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
var Grid_exports = {};
__export(Grid_exports, {
  Grid: () => Grid
});
module.exports = __toCommonJS(Grid_exports);
var import_core = require("@tamagui/core"), import_tamagui = require("tamagui"), import_react = __toESM(require("react")), import_jsx_runtime = require("react/jsx-runtime");
function Grid({ children, columns, itemMinWidth = 200, gap }) {
  if (import_core.isWeb)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          gap,
          display: "grid",
          justifyContent: "stretch",
          // gridTemplateRows: 'repeat(4, 1fr)',
          gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
          // gridTemplateColumns: '1fr 1fr',
        },
        children
      }
    );
  const childrenList = import_react.default.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { alignItems: "center", justifyContent: "center", flexWrap: "wrap", children: childrenList.map((child, i) => child ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.XStack,
    {
      flex: 1,
      minWidth: itemMinWidth,
      marginRight: gap,
      marginBottom: gap,
      children: child
    },
    i
  ) : null) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Grid
});
//# sourceMappingURL=Grid.js.map
