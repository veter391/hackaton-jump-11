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
var FancyCard_exports = {};
__export(FancyCard_exports, {
  FancyCard: () => FancyCard,
  OuterSubtleBorder: () => OuterSubtleBorder
});
module.exports = __toCommonJS(FancyCard_exports);
var import_tamagui = require("tamagui");
const FancyCard = (0, import_tamagui.styled)(import_tamagui.YStack, {
  name: "Card",
  f: 1,
  className: "transition all ease-in ms100",
  borderRadius: "$6",
  // backgroundColor: '$background',
  flexShrink: 1,
  hoverStyle: {
    borderColor: "rgba(150,150,150,0.4)",
    elevation: "$6",
    y: "$-1"
  }
}), OuterSubtleBorder = (0, import_tamagui.styled)(import_tamagui.YStack, {
  className: "transition all ease-in ms100",
  borderWidth: 5,
  flex: 1,
  borderColor: "rgba(150,150,150,0.05)",
  borderRadius: "$7"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FancyCard,
  OuterSubtleBorder
});
//# sourceMappingURL=FancyCard.js.map
