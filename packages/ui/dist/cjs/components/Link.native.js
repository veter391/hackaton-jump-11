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
var Link_exports = {};
__export(Link_exports, {
  ButtonLink: () => ButtonLink,
  Link: () => Link,
  ParagraphLink: () => ParagraphLink
});
module.exports = __toCommonJS(Link_exports);
var import_link = __toESM(require("next/link")), import_react = __toESM(require("react")), import_tamagui = require("tamagui"), import_tamagui2 = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const Link = ({
  href = "",
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href, replace, scroll, shallow, locale, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.SizableText, { cursor: "pointer", tag: "span", ...props, children }) }), ParagraphLink = ({
  href = "",
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) => {
  const allChildrenStrings = import_react.default.Children.toArray(children).every(
    (x) => typeof x == "string"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href, replace, scroll, shallow, locale, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.Paragraph,
    {
      className: "paragraph-link",
      cursor: "pointer",
      tag: "span",
      color: "$color",
      hoverStyle: { color: "$color" },
      ...props,
      children
    }
  ) });
}, ButtonLink = ({
  href = "",
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { style: { textDecoration: "none" }, ...{ href, replace, scroll, shallow, locale }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui2.Button, { tag: "span", ...props, children }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonLink,
  Link,
  ParagraphLink
});
//# sourceMappingURL=Link.js.map
