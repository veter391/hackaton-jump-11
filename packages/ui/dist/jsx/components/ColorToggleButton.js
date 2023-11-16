import { useTint } from "./Tints/useTint";
import { Button, Circle, TooltipSimple } from "tamagui";
const ColorToggleButton = (props) => {
  const { tint, setNextTint } = useTint();
  return <TooltipSimple groupId="header-actions-color" label="Next theme"><Button size="$3" onPress={setNextTint} {...props} aria-label="Next theme"><Circle
    bw={1}
    boc="var(--color9)"
    m={2}
    size={12}
    backgroundColor={tint}
  /></Button></TooltipSimple>;
};
export {
  ColorToggleButton
};
//# sourceMappingURL=ColorToggleButton.js.map
