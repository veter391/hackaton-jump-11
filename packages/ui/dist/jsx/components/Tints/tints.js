import { useEffect, useState } from "react";
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
  const [val, setVal] = useState(getTints());
  return useEffect(() => onTintFamilyChange(() => {
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
export {
  getTints,
  onTintFamilyChange,
  setNextTintFamily,
  setTintFamily,
  useTints
};
//# sourceMappingURL=tints.js.map
