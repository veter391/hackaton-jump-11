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
var useOnIntersecting_exports = {};
__export(useOnIntersecting_exports, {
  useIsIntersecting: () => useIsIntersecting,
  useOnIntersecting: () => useOnIntersecting
});
module.exports = __toCommonJS(useOnIntersecting_exports);
var import_react = require("react"), import_tamagui = require("tamagui");
function useIsIntersecting(refs, { once, ...opts } = {}) {
  const [values, setValues] = (0, import_react.useState)([]);
  return import_tamagui.isWeb && useOnIntersecting(
    refs,
    (entries) => {
      const intersecting = entries.some((x) => x == null ? void 0 : x.isIntersecting);
      once && !intersecting || setValues((prev) => {
        const next = entries.map((e) => (e == null ? void 0 : e.isIntersecting) ?? !1);
        return prev.length === next.length && prev.every((e, i) => e === next[i]) ? prev : next;
      });
    },
    opts
  ), Array.isArray(refs) ? values : values[0];
}
function useOnIntersecting(refsIn, incomingCbRaw, { threshold = 0, root, rootMargin } = {}, mountArgs = []) {
  const onIntersectEvent = (0, import_tamagui.useEvent)(incomingCbRaw);
  (0, import_react.useEffect)(() => {
    const refs = Array.isArray(refsIn) ? refsIn : [refsIn];
    if (!refs.length)
      return;
    let dispose = null, currentEntries = [];
    const options = {
      threshold,
      root,
      rootMargin
    }, io = new IntersectionObserver((entries) => {
      currentEntries = refs.map((ref, index) => entries.find((x) => x.target === ref.current) ?? currentEntries[index] ?? null), dispose == null || dispose(), dispose = onIntersectEvent(currentEntries) || null;
    }, options);
    for (const ref of refs)
      ref.current && io.observe(ref.current);
    return () => {
      dispose == null || dispose(), io.disconnect();
    };
  }, [
    onIntersectEvent,
    refsIn,
    root,
    rootMargin,
    threshold,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...mountArgs
  ]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useIsIntersecting,
  useOnIntersecting
});
//# sourceMappingURL=useOnIntersecting.js.map
