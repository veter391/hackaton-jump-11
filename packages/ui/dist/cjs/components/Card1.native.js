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
var Card1_exports = {};
__export(Card1_exports, {
  Card1: () => Card1
});
module.exports = __toCommonJS(Card1_exports);
var import_lucide_icons = require("@tamagui/lucide-icons"), import_react = require("react"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const Card1 = (0, import_react.memo)(
  (props) => {
    const {
      theme,
      alt,
      onHoverSection,
      pointerEvents,
      pointerEventsControls,
      ...cardProps
    } = props, tint = alt ? `alt${alt}` : null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.YStack,
      {
        display: "flex",
        alignItems: "stretch",
        contain: "strict",
        minWidth: 330,
        minHeight: 222,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Theme, { name: tint, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_tamagui.YStack,
          {
            overflow: "visible",
            borderWidth: 1,
            borderColor: "$borderColor",
            backgroundColor: "$color1",
            br: "$7",
            pointerEvents,
            p: 0,
            ai: "stretch",
            mb: 40,
            ...cardProps,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { ai: "center", p: "$4", space: "$5", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { als: "center", y: -3, miw: 165, jc: "center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { fontWeight: "700", children: "Billie Jean" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { color: "$color11", size: "$3", children: "Michael Jackson" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { color: "$color11", o: 0.65, size: "$3", children: "Thriller" })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Separator, { mb: -1 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_tamagui.XStack,
                {
                  zi: 1e3,
                  w: "100%",
                  px: "$6",
                  py: "$4",
                  bc: "$backgroundHover",
                  bbrr: 17,
                  bblr: 17,
                  ai: "center",
                  space: "$5",
                  jc: "center",
                  pointerEvents,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_icons.Rewind, { size: 20 }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_tamagui.Button,
                      {
                        bordered: !0,
                        hoverStyle: {
                          elevation: "$6",
                          scale: 1.025
                        },
                        my: "$-7",
                        icon: import_lucide_icons.Pause,
                        size: "$8",
                        circular: !0,
                        elevation: "$2",
                        accessibilityLabel: "Pause",
                        pointerEvents: pointerEventsControls
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_icons.FastForward, { size: 20 })
                  ]
                }
              )
            ]
          }
        ) })
      }
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card1
});
//# sourceMappingURL=Card1.js.map
