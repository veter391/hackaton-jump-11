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
var DefaultLayout_exports = {};
__export(DefaultLayout_exports, {
  DefaultLayout: () => DefaultLayout
});
module.exports = __toCommonJS(DefaultLayout_exports);
var import_Footer = require("./Footer"), import_Header = require("./Header"), import_toast = require("@tamagui/toast"), import_jsx_runtime = require("react/jsx-runtime");
const DefaultLayout = ({
  children,
  header,
  footer,
  headerProps
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_toast.ToastProvider, { swipeDirection: "horizontal", children: [
  header ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Header.CustomHeader, { ...headerProps }),
  children,
  footer ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Footer.CustomFooter, {}),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toast.ToastViewport, { flexDirection: "column-reverse", top: "$2", left: 0, right: 0 }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_toast.ToastViewport,
    {
      multipleToasts: !0,
      name: "viewport-multiple",
      flexDirection: "column-reverse",
      top: "$2",
      left: 0,
      right: 0
    }
  )
] }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultLayout
});
//# sourceMappingURL=DefaultLayout.js.map
