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
var RainbowText_exports = {};
__export(RainbowText_exports, {
  default: () => RainbowText_default
});
module.exports = __toCommonJS(RainbowText_exports);
var import_jsx_runtime = require("react/jsx-runtime");
const RainbowText = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "all ease-in ms250 rainbow clip-text", children });
var RainbowText_default = RainbowText;
//# sourceMappingURL=RainbowText.js.map
