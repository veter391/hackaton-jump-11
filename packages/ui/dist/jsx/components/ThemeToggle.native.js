import { Monitor, Moon, Sun } from "@tamagui/lucide-icons";
import { useThemeSetting } from "@tamagui/next-theme";
import { useState } from "react";
import { Button, TooltipSimple, useIsomorphicLayoutEffect } from "tamagui";
const icons = {
  system: Monitor,
  light: Sun,
  dark: Moon
}, ThemeToggle = (props) => {
  const themeSetting = useThemeSetting(), [clientTheme, setClientTheme] = useState("light");
  useIsomorphicLayoutEffect(() => {
    var _a;
    themeSetting.resolvedTheme !== "system" && ((_a = document.querySelector("#theme-color")) == null || _a.setAttribute(
      "content",
      themeSetting.resolvedTheme === "light" ? "#fff" : "#050505"
    )), setClientTheme(themeSetting.current || "light");
  }, [themeSetting.current, themeSetting.resolvedTheme]);
  const Icon = icons[clientTheme];
  return <TooltipSimple
    groupId="header-actions-theme"
    label={`Switch theme (${themeSetting.current})`}
  ><Button
    size="$3"
    onPress={themeSetting.toggle}
    {...props}
    aria-label="Toggle light/dark color scheme"
    icon={Icon}
  >{
    /* {theme === 'light' ? <Moon size={12} /> : <SunIcon />} */
  }</Button></TooltipSimple>;
};
export {
  ThemeToggle
};
//# sourceMappingURL=ThemeToggle.js.map
