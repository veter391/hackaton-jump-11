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
var DataTable_exports = {};
__export(DataTable_exports, {
  DataTable: () => DataTable
});
module.exports = __toCommonJS(DataTable_exports);
var import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
function DataTable({
  schema,
  title = "Data",
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_tamagui.YStack,
    {
      borderWidth: 1,
      borderColor: "$borderColor",
      f: 1,
      my: "$4",
      br: "$4",
      ov: "hidden",
      mx: "$-4",
      $sm: {
        mx: 0
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { ai: "center", py: "$2", px: "$4", backgroundColor: "$borderColor", children: schema.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { ai: "center", f: 1, children: key }, index)) }),
        data.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.ListItem, { p: 0, children: schema.map((key) => (console.log("Item", item, "KEY: ", key, "VAL: ", item[key]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { f: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_tamagui.XStack,
          {
            ai: "center",
            f: 1,
            pos: "relative",
            py: "$2",
            bc: "$backgroundStrong",
            px: "$4",
            $sm: { flexDirection: "column" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { fullscreen: !0, backgroundColor: "$background", zi: -1, o: 0.5 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { miw: "30%", ai: "center", space: !0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_tamagui.H4,
                {
                  ta: "center",
                  color: "$color",
                  fow: "700",
                  textTransform: "none",
                  size: "$4",
                  width: 200,
                  children: item[key]
                }
              ) })
            ]
          }
        ) }))) }, i))
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataTable
});
//# sourceMappingURL=index.js.map
