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
var Card_exports = {};
__export(Card_exports, {
  CustomCard: () => CustomCard
});
module.exports = __toCommonJS(Card_exports);
var import_tamagui = require("tamagui");
const CustomCard = (0, import_tamagui.styled)(import_tamagui.YStack, {
  name: "Card",
  className: "transition all ease-in ms100",
  borderRadius: "$2",
  borderWidth: 2,
  borderColor: "transparent",
  backgroundColor: "$background",
  flexShrink: 1,
  elevation: "$1",
  hoverStyle: {
    backgroundColor: "$backgroundHover",
    elevation: "$3",
    y: -4
  },
  pressStyle: {
    backgroundColor: "$backgroundPress",
    elevation: "$0",
    y: 0
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomCard
});
//# sourceMappingURL=Card.js.map
