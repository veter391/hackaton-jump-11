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
var tints_exports = {};
__export(tints_exports, {
  getTints: () => getTints,
  onTintFamilyChange: () => onTintFamilyChange,
  setNextTintFamily: () => setNextTintFamily,
  setTintFamily: () => setTintFamily,
  useTints: () => useTints
});
module.exports = __toCommonJS(tints_exports);
var import_react = require("react");
const familiesValues = {
  tamagui: ["orange", "yellow", "green", "blue", "purple", "pink", "red"]
}, familiesNames = Object.keys(familiesValues), families = familiesValues;
let fam = "tamagui";
function getTints() {
  return {
    name: fam || "tamagui",
    tints: families[fam] || families.tamagui,
    families
  };
}
function useTints() {
  const [val, setVal] = (0, import_react.useState)(getTints());
  return (0, import_react.useEffect)(() => onTintFamilyChange(() => {
    setVal(getTints());
  }), []), val;
}
const setTintFamily = (next) => {
  if (!families[next])
    throw "impossible";
  fam = next, listeners.forEach((l) => l(next));
}, setNextTintFamily = () => {
  setTintFamily(familiesNames[(familiesNames.indexOf(fam) + 1) % familiesNames.length]);
}, listeners = /* @__PURE__ */ new Set(), onTintFamilyChange = (cb) => (listeners.add(cb), () => {
  listeners.delete(cb);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getTints,
  onTintFamilyChange,
  setNextTintFamily,
  setTintFamily,
  useTints
});
//# sourceMappingURL=tints.js.map
