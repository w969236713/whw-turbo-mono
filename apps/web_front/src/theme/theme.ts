import { createContext, useState, useMemo } from "react";
import {
  createTheme,
  PaletteMode,
  Theme,
  ThemeOptions,
} from "@mui/material";

//颜色token值
export const tokens = (mode: PaletteMode) => ({
  ...(mode === "light"
    ? {
        cyanRamp: {
          50: "#e1f6fc",
          100: "#e1f6fc",
          200: "#85dcf1",
          300: "#85dcf1",
          400: "#85dcf1",
          500: "#85dcf1",
          600: "#85dcf1",
          700: "#85dcf1",
          800: "#85dcf1",
          900: "#85dcf1",
        },
        orangeRamp: {
          50: "#f7e9e8",
          100: "#f8ccc0",
          200: "#f4ab99",
          300: "#f18b71",
          400: "#ef7254",
          500: "#ee5c39",
          600: "#ee5c39",
          700: "#d64f31",
          800: "#c74a2d",
          900: "#c74a2d",
        },
        greenRamp: {
          50: "#e0f3ed",
          100: "#b3e2d1",
          200: "#82cfb4",
          300: "#4fbb97",
          400: "#27ac82",
          500: "#009d6f",
          600: "#008f63",
          700: "#007f55",
          800: "#006f47",
          900: "#00532d",
        },
        blueRamp: {
          50: "#e5f4ff",
          100: "#bfe2ff",
          200: "#98d1ff",
          300: "#70bfff",
          400: "#53b0ff",
          500: "#3da2ff",
          600: "#3994f1",
          700: "#3381de",
          800: "#2f70cc",
          900: "#2751ac",
        },
        purpleBlueRamp: {
          50: "#ede7f7",
          100: "#d1c4ed",
          200: "#b39ee1",
          300: "#7d57cc",
          400: "#653ac3",
          500: "#653ac3",
          600: "#5b35bd",
          700: "#4d2db4",
          800: "#3f27ac",
          900: "#271b9f",
        },
        purpleRamp: {
          50: "#f7e5f1",
          100: "#eabede",
          200: "#dc93c9",
          300: "#cc67b3",
          400: "#c044a4",
          500: "#b32095",
          600: "#a61b90",
          700: "#941389",
          800: "#850d81",
          900: "#690374",
        },
      }
    : {
        cyanRamp: {
          50: "#85dcf1",
          100: "#85dcf1",
          200: "#85dcf1",
          300: "#85dcf1",
          400: "#85dcf1",
          500: "#85dcf1",
          600: "#85dcf1",
          700: "#85dcf1",
          800: "#e1f6fc",
          900: "#e1f6fc",
        },
        orangeRamp: {
          50: "#c74a2d",
          100: "#c74a2d",
          200: "#d64f31",
          300: "#ee5c39",
          400: "#ee5c39",
          500: "#ef7254",
          600: "#f4ab99",
          700: "#f18b71",
          800: "#f8ccc0",
          900: "#f7e9e8",
        },
        greenRamp: {
          50: "#00532d",
          100: "#006f47",
          200: "#007f55",
          300: "#008f63",
          400: "#009d6f",
          500: "#27ac82",
          600: "#4fbb97",
          700: "#82cfb4",
          800: "#b3e2d1",
          900: "#e0f3ed",
        },
        blueRamp: {
          50: "#2751ac",
          100: "#2f70cc",
          200: "#3381de",
          300: "#3994f1",
          400: "#3da2ff",
          500: "#53b0ff",
          600: "#70bfff",
          700: "#98d1ff",
          800: "#bfe2ff",
          900: "#e5f4ff",
        },
        purpleBlueRamp: {
          50: "#271b9f",
          100: "#3f27ac",
          200: "#4d2db4",
          300: "#5b35bd",
          400: "#653ac3",
          500: "#653ac3",
          600: "#7d57cc",
          700: "#b39ee1",
          800: "#d1c4ed",
          900: "#ede7f7",
        },
        purpleRamp: {
          50: "#690374",
          100: "#850d81",
          200: "#941389",
          300: "#a61b90",
          400: "#b32095",
          500: "#c044a4",
          600: "#cc67b3",
          700: "#dc93c9",
          800: "#eabede",
          900: "#f7e5f1",
        },
      }),
});

export const themeSetting = (mode: PaletteMode): ThemeOptions => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.blueRamp["800"],
            },
            secondary: {
              main: colors.orangeRamp["800"],
            },
            background: {
              default: "#fcfcfc",
            },
          }
        : {
            primary: {
              main: colors.blueRamp["500"],
            },
            secondary: {
              main: colors.orangeRamp["500"],
            },
            background: {
              default: "#222",
            },
          }),
    },
  };
};

interface IColorModeContext {
  toggleColorMode: VoidFunction;
}
export const ColorModeContext = createContext<IColorModeContext>(
  {} as IColorModeContext
);

export const useColoMode = (): [Theme, IColorModeContext] => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo<IColorModeContext>(
    () => ({
      toggleColorMode: () => {
        setMode((prevState) => (prevState === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
  return [theme, colorMode];
};
