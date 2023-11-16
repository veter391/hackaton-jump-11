import { useEffect, useState } from "react";
import { isWeb, useEvent } from "tamagui";
function useIsIntersecting(refs, { once, ...opts } = {}) {
  const [values, setValues] = useState([]);
  return isWeb && useOnIntersecting(
    refs,
    (entries) => {
      const intersecting = entries.some((x) => x?.isIntersecting);
      once && !intersecting || setValues((prev) => {
        const next = entries.map((e) => e?.isIntersecting ?? !1);
        return prev.length === next.length && prev.every((e, i) => e === next[i]) ? prev : next;
      });
    },
    opts
  ), Array.isArray(refs) ? values : values[0];
}
function useOnIntersecting(refsIn, incomingCbRaw, { threshold = 0, root, rootMargin } = {}, mountArgs = []) {
  const onIntersectEvent = useEvent(incomingCbRaw);
  useEffect(() => {
    const refs = Array.isArray(refsIn) ? refsIn : [refsIn];
    if (!refs.length)
      return;
    let dispose = null, currentEntries = [];
    const options = {
      threshold,
      root,
      rootMargin
    }, io = new IntersectionObserver((entries) => {
      currentEntries = refs.map((ref, index) => entries.find((x) => x.target === ref.current) ?? currentEntries[index] ?? null), dispose?.(), dispose = onIntersectEvent(currentEntries) || null;
    }, options);
    for (const ref of refs)
      ref.current && io.observe(ref.current);
    return () => {
      dispose?.(), io.disconnect();
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
export {
  useIsIntersecting,
  useOnIntersecting
};
//# sourceMappingURL=useOnIntersecting.js.map
