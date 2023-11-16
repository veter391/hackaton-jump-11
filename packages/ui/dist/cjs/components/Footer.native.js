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
var Footer_exports = {};
__export(Footer_exports, {
  CustomFooter: () => CustomFooter
});
module.exports = __toCommonJS(Footer_exports);
var import_tamagui = require("tamagui"), import_Container = require("./Container"), import_ExternalIcon = require("./ExternalIcon"), import_Link = require("./Link"), import_jsx_runtime = require("react/jsx-runtime");
const CustomFooter = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { tag: "footer", pos: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Container.ContainerLarge, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { py: "$7", $sm: { flexDirection: "column", ai: "center" }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_tamagui.YStack,
    {
      ai: "flex-start",
      $sm: { ai: "center" },
      py: "$5",
      flex: 2,
      mt: "$-1",
      mb: "$2",
      px: "$4",
      space: "$4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Text,
          {
            className: "clip-invisible",
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            children: "homepage"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Paragraph, { mt: "$2", size: "$3", children: [
          "by",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_Link.ParagraphLink,
            {
              fontSize: "inherit",
              href: "https://github.com/gerarddomenechcobos1998?tab=repositories",
              target: "_blank",
              children: "gerard"
            }
          )
        ] })
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_tamagui.YStack,
    {
      ai: "flex-start",
      $sm: { ai: "center" },
      px: "$4",
      py: "$5",
      flex: 1.5,
      space: "$3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { mb: "$3", size: "$5", children: "Social" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { space: "$1", ai: "center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Link.ParagraphLink, { target: "_blank", href: "https://github.com/Sixedge-es/software_Arquitecture", children: "Blog" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { space: "$1", ai: "center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Link.ParagraphLink, { target: "_blank", href: "https://github.com/gerarddomenechcobos1998?tab=repositories", children: "GitHub" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ExternalIcon.ExternalIcon, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { space: "$1", ai: "center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Link.ParagraphLink, { href: "/", target: "_blank", children: "Discord" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ExternalIcon.ExternalIcon, {})
        ] })
      ]
    }
  )
] }) }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomFooter
});
//# sourceMappingURL=Footer.js.map
