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
var ThemeToggle_exports = {};
__export(ThemeToggle_exports, {
  ThemeToggle: () => ThemeToggle
});
module.exports = __toCommonJS(ThemeToggle_exports);
var import_lucide_icons = require("@tamagui/lucide-icons"), import_next_theme = require("@tamagui/next-theme"), import_react = require("react"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const icons = {
  system: import_lucide_icons.Monitor,
  light: import_lucide_icons.Sun,
  dark: import_lucide_icons.Moon
}, ThemeToggle = (props) => {
  const themeSetting = (0, import_next_theme.useThemeSetting)(), [clientTheme, setClientTheme] = (0, import_react.useState)("light");
  (0, import_tamagui.useIsomorphicLayoutEffect)(() => {
    var _a;
    themeSetting.resolvedTheme !== "system" && ((_a = document.querySelector("#theme-color")) == null || _a.setAttribute(
      "content",
      themeSetting.resolvedTheme === "light" ? "#fff" : "#050505"
    )), setClientTheme(themeSetting.current || "light");
  }, [themeSetting.current, themeSetting.resolvedTheme]);
  const Icon = icons[clientTheme];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.TooltipSimple,
    {
      groupId: "header-actions-theme",
      label: `Switch theme (${themeSetting.current})`,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_tamagui.Button,
        {
          size: "$3",
          onPress: themeSetting.toggle,
          ...props,
          "aria-label": "Toggle light/dark color scheme",
          icon: Icon
        }
      )
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeToggle
});
//# sourceMappingURL=ThemeToggle.js.map
