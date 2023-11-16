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
var SubTitle_exports = {};
__export(SubTitle_exports, {
  SubTitle: () => SubTitle,
  nbspLastWord: () => nbspLastWord
});
module.exports = __toCommonJS(SubTitle_exports);
var import_react = require("react"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const nbspLastWord = (sentence) => {
  if (typeof sentence != "string")
    return sentence;
  const titleWords = sentence.split(" ");
  return titleWords.length === 1 ? sentence : titleWords.map((word, i) => i === titleWords.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
    "\xA0",
    word
  ] }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
    " ",
    word
  ] }, i));
}, SubTitle = ({ children, ...props }) => {
  if (!children)
    return null;
  const childText = typeof children == "string" ? children : children.props.children;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.H3,
    {
      pos: "relative",
      color: "$gray9",
      width: "max-content",
      fontFamily: "$body",
      size: "$8",
      lh: "$7",
      ls: -0.5,
      fontWeight: "300",
      tag: "p",
      mb: "$3",
      mt: "$0",
      maxWidth: "95%",
      $sm: {
        maxWidth: "100%",
        size: "$6"
      },
      ...props,
      children: nbspLastWord(childText)
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SubTitle,
  nbspLastWord
});
//# sourceMappingURL=SubTitle.js.map
