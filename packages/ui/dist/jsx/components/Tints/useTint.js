import { startTransition, useMemo, useSyncExternalStore } from "react";
import { Theme } from "tamagui";
import { getTints, setNextTintFamily, useTints } from "./tints";
const initialTint = 3;
let current = initialTint;
const listeners = /* @__PURE__ */ new Set(), onTintChange = (listener) => (listeners.add(listener), () => {
  listeners.delete(listener);
}), numTints = getTints().tints.length, setTintIndex = (next) => {
  const val = next % numTints;
  val !== current && (current = val, startTransition(() => {
    listeners.forEach((x) => x(val));
  }));
}, useTint = () => {
  const index = useSyncExternalStore(
    onTintChange,
    () => current,
    () => initialTint
  ), tintsContext = useTints(), { tints } = tintsContext;
  return {
    ...tintsContext,
    tints: tintsContext.tints,
    tintIndex: index,
    tint: tints[index],
    setTintIndex,
    setNextTintFamily,
    setNextTint: () => {
      setTintIndex(index + 1);
    }
  };
}, ThemeTint = (props) => {
  const curTint = useTint().tint;
  return <Theme name={props.disable ? null : curTint}>
    {
      /*  */
    }
    {useMemo(() => props.children, [props.children])}
  </Theme>;
}, ThemeTintAlt = ({
  children,
  disable,
  offset = 2
}) => {
  const tint = useTint(), curTint = tint.tints[(tint.tintIndex + offset) % tint.tints.length];
  return <Theme name={disable ? null : curTint}>
    {
      /*  */
    }
    {useMemo(() => children, [children])}
  </Theme>;
};
export {
  ThemeTint,
  ThemeTintAlt,
  initialTint,
  onTintChange,
  setTintIndex,
  useTint
};
//# sourceMappingURL=useTint.js.map
