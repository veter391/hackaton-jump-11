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
var heroState_exports = {};
__export(heroState_exports, {
  useHeroHovered: () => useHeroHovered
});
module.exports = __toCommonJS(heroState_exports);
var import_useTint = require("./Tints/useTint"), import_react = require("react"), import_tamagui = require("tamagui");
const listeners = /* @__PURE__ */ new Set(), useHeroHovered = () => {
  const { tintIndex, setTintIndex } = (0, import_useTint.useTint)(), update = (0, import_tamagui.useForceUpdate)();
  return (0, import_react.useEffect)(() => (listeners.add(update), () => {
    listeners.delete(update);
  }), [update]), [
    tintIndex - 2,
    (0, import_react.useCallback)((next) => {
      setTintIndex(next + 2);
    }, [])
  ];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useHeroHovered
});
//# sourceMappingURL=heroState.js.map
