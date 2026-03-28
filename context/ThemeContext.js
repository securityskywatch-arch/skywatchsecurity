"use client";
import { jsx } from "react/jsx-runtime";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme
} from "next-themes";
function ThemeContextProvider({
  children
}) {
  return /* @__PURE__ */ jsx(
    NextThemesProvider,
    {
      attribute: "class",
      defaultTheme: "dark",
      enableSystem: true,
      disableTransitionOnChange: false,
      children
    }
  );
}
function useThemeContext() {
  return useNextTheme();
}
export {
  ThemeContextProvider,
  useThemeContext
};
