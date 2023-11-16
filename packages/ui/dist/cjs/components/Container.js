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
var Container_exports = {};
__export(Container_exports, {
  Container: () => Container,
  ContainerLarge: () => ContainerLarge,
  ContainerXL: () => ContainerXL
});
module.exports = __toCommonJS(Container_exports);
var import_tamagui = require("tamagui");
const variants = {
  hide: {
    true: {
      pointerEvents: "none",
      opacity: 0
    }
  }
}, Container = (0, import_tamagui.styled)(import_tamagui.YStack, {
  mx: "auto",
  px: "$4",
  width: "100%",
  $gtSm: {
    maxWidth: 700,
    pr: "$2"
  },
  $gtMd: {
    maxWidth: 740,
    pr: "$2"
  },
  $gtLg: {
    maxWidth: 800,
    pr: "$10"
  },
  variants
}), ContainerLarge = (0, import_tamagui.styled)(import_tamagui.YStack, {
  mx: "auto",
  px: "$4",
  width: "100%",
  $gtSm: {
    maxWidth: 980
  },
  $gtMd: {
    maxWidth: 1140
  },
  variants
}), ContainerXL = (0, import_tamagui.styled)(import_tamagui.YStack, {
  mx: "auto",
  px: "$4",
  width: "100%",
  $gtSm: {
    maxWidth: 980
  },
  $gtMd: {
    maxWidth: 1240
  },
  $gtLg: {
    maxWidth: 1440
  },
  variants
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Container,
  ContainerLarge,
  ContainerXL
});
//# sourceMappingURL=Container.js.map
