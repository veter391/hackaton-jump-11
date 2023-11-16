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
var getDefaultLayout_exports = {};
__export(getDefaultLayout_exports, {
  getDefaultLayout: () => getDefaultLayout
});
module.exports = __toCommonJS(getDefaultLayout_exports);
var import_DefaultLayout = require("./DefaultLayout"), import_jsx_runtime = require("react/jsx-runtime");
const getDefaultLayout = (page, pageProps, path) => {
  const isHome = path === "/", isAuthPage = path.startsWith("/login"), isAccountPage = path.startsWith("/account"), isProductLandingPage = path.startsWith("/takeout") || path.startsWith("/studio"), isBlog = path.startsWith("/blog");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_DefaultLayout.DefaultLayout,
    {
      headerProps: {
        disableNew: isBlog || isAuthPage || isProductLandingPage || isAccountPage,
        minimal: isAuthPage || isProductLandingPage || isAccountPage,
        showAuth: isAuthPage || isProductLandingPage || isAccountPage
      },
      children: page
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDefaultLayout
});
//# sourceMappingURL=getDefaultLayout.js.map
