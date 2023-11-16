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
var ColorToggleButton_exports = {};
__export(ColorToggleButton_exports, {
  ColorToggleButton: () => ColorToggleButton
});
module.exports = __toCommonJS(ColorToggleButton_exports);
var import_useTint = require("./Tints/useTint"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const ColorToggleButton = (props) => {
  const { tint, setNextTint } = (0, import_useTint.useTint)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.TooltipSimple, { groupId: "header-actions-color", label: "Next theme", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Button, { size: "$3", onPress: setNextTint, ...props, "aria-label": "Next theme", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.Circle,
    {
      bw: 1,
      boc: "var(--color9)",
      m: 2,
      size: 12,
      backgroundColor: tint
    }
  ) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorToggleButton
});
//# sourceMappingURL=ColorToggleButton.js.map
