import { useTint } from "./Tints/useTint";
import { useCallback, useEffect } from "react";
import { useForceUpdate } from "tamagui";
const listeners = /* @__PURE__ */ new Set(), useHeroHovered = () => {
  const { tintIndex, setTintIndex } = useTint(), update = useForceUpdate();
  return useEffect(() => (listeners.add(update), () => {
    listeners.delete(update);
  }), [update]), [
    tintIndex - 2,
    useCallback((next) => {
      setTintIndex(next + 2);
    }, [])
  ];
};
export {
  useHeroHovered
};
//# sourceMappingURL=heroState.js.map
