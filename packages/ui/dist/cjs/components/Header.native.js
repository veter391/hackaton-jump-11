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
var Header_exports = {};
__export(Header_exports, {
  CustomHeader: () => CustomHeader,
  HeaderContents: () => HeaderContents
});
module.exports = __toCommonJS(Header_exports);
var import_ThemeToggle = require("./ThemeToggle"), import_useTint = require("./Tints/useTint"), import_react = __toESM(require("react")), import_tamagui = require("tamagui"), import_ColorToggleButton = require("./ColorToggleButton"), import_Container = require("./Container"), import_NextLink = require("./NextLink"), import_jsx_runtime = require("react/jsx-runtime");
function CustomHeader(props) {
  const [isScrolled, setIsScrolled] = import_react.default.useState(!1);
  return import_tamagui.isClient && import_react.default.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    return window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.XStack,
      {
        pos: "fixed",
        top: 0,
        left: 0,
        right: 0,
        ai: "center",
        jc: "center",
        zi: 5e4,
        $gtSm: {
          px: "$4"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { width: "100%", maw: 1120, pos: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_tamagui.XStack,
            {
              className: `ease-out all ms200 ${isScrolled ? "blur-medium hover-highlights " : ""}`,
              bbc: "$borderColor",
              py: "$1",
              y: 3,
              ov: "hidden",
              contain: "paint",
              width: "100%",
              bw: 1,
              boc: "transparent",
              br: "$10",
              $sm: {
                br: 0,
                y: 0,
                py: "$2"
              },
              ...isScrolled && {
                $gtSm: {
                  py: "$2",
                  y: 5,
                  boc: "$borderColor"
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { o: isScrolled ? 0.75 : 0, fullscreen: !0, bc: "$background" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Container.ContainerLarge, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_useTint.ThemeTint, { children: import_react.default.useMemo(
                  () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderContents, { floating: !0, ...props }),
                  [props]
                ) }) })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.XStack,
            {
              className: "ease-out all ms200",
              zi: -1,
              br: "$10",
              fullscreen: !0,
              ...isScrolled && {
                $gtSm: {
                  py: "$2",
                  y: 5,
                  elevation: "$3",
                  boc: "$borderColor"
                }
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { height: 54, w: "100%" })
  ] });
}
const tooltipDelay = { open: 500, close: 150 }, HeaderContents = import_react.default.memo((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  import_tamagui.XStack,
  {
    ai: "center",
    position: "relative",
    tag: "header",
    jc: "space-between",
    pos: "relative",
    py: props.floating ? 0 : "$2",
    zi: 5e4,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { ai: "center", space: "$4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.TooltipGroup, { delay: tooltipDelay, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XGroup, { boc: "$color2", bw: 1, mah: 32, bc: "transparent", ai: "center", size: "$3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ThemeToggle.ThemeToggle, { borderWidth: 0, chromeless: !0 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ColorToggleButton.ColorToggleButton, { borderWidth: 0, chromeless: !0 }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_tamagui.XStack,
        {
          h: 40,
          jc: "flex-end",
          miw: 160,
          $xs: { miw: 130 },
          pointerEvents: "auto",
          tag: "nav",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { ai: "center", space: "$3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_NextLink.NextLink, { target: "_blank", href: "https://github.com/gerarddomenechcobos1998", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.TooltipSimple, { delay: 0, restMs: 25, label: "Check my Github!", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { p: "$2", opacity: 0.7, hoverStyle: { opacity: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Text, { children: "Github" }) }) }) }) }) })
        }
      )
    ]
  }
));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomHeader,
  HeaderContents
});
//# sourceMappingURL=Header.js.map
