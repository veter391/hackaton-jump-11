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
var useTint_exports = {};
__export(useTint_exports, {
  ThemeTint: () => ThemeTint,
  ThemeTintAlt: () => ThemeTintAlt,
  initialTint: () => initialTint,
  onTintChange: () => onTintChange,
  setTintIndex: () => setTintIndex,
  useTint: () => useTint
});
module.exports = __toCommonJS(useTint_exports);
var import_react = require("react"), import_tamagui = require("tamagui"), import_tints = require("./tints"), import_jsx_runtime = require("react/jsx-runtime");
const initialTint = 3;
let current = initialTint;
const listeners = /* @__PURE__ */ new Set(), onTintChange = (listener) => (listeners.add(listener), () => {
  listeners.delete(listener);
}), numTints = (0, import_tints.getTints)().tints.length, setTintIndex = (next) => {
  const val = next % numTints;
  val !== current && (current = val, (0, import_react.startTransition)(() => {
    listeners.forEach((x) => x(val));
  }));
}, useTint = () => {
  const index = (0, import_react.useSyncExternalStore)(
    onTintChange,
    () => current,
    () => initialTint
  ), tintsContext = (0, import_tints.useTints)(), { tints } = tintsContext;
  return {
    ...tintsContext,
    tints: tintsContext.tints,
    tintIndex: index,
    tint: tints[index],
    setTintIndex,
    setNextTintFamily: import_tints.setNextTintFamily,
    setNextTint: () => {
      setTintIndex(index + 1);
    }
  };
}, ThemeTint = (props) => {
  const curTint = useTint().tint;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Theme, { name: props.disable ? null : curTint, children: (0, import_react.useMemo)(() => props.children, [props.children]) });
}, ThemeTintAlt = ({
  children,
  disable,
  offset = 2
}) => {
  const tint = useTint(), curTint = tint.tints[(tint.tintIndex + offset) % tint.tints.length];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Theme, { name: disable ? null : curTint, children: (0, import_react.useMemo)(() => children, [children]) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeTint,
  ThemeTintAlt,
  initialTint,
  onTintChange,
  setTintIndex,
  useTint
});
//# sourceMappingURL=useTint.js.map
