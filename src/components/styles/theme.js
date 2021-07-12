import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  borders: {
    ...chakraTheme.borders,
  },
  colors: {
    ...chakraTheme.colors,
    grey: {
      50: "#F8F9FA",
      100: "#F1F3F5",
      200: "#E9ECEF",
      300: "#DDE2E7",
      400: "#CDD4DB",
      500: "#6d7781",
      600: "#6d7781",
      700: "#475059",
      800: "#333A41",
    },
    white: "#ffffff",
    primary: "#003E73",
    brand: {
      primary: "#003E73",
	    primary_lighter: "#0071BB",
      secondary: "#112E51",
      secondary_lighter: '#24384D',
      primary_darker: "#094D92",
      1: "#094D92",
      2: "#F5CB5C",
      3: "#FE6D73",
      4: "#57A773",
      facebook: "#4267B2",
      instagram: "#fd5949",
      twitter: "#1DA1F2",
      google: "#DB4437"
    },
    semantic: {
      error: "#FF7863",
      warning: "#FFAF02",
      success: "#3FC43A",
    },
  },
  radii: {
    ...chakraTheme.radii,
    lg: "1rem",
    md: "0.5rem",
    default: "0.75rem",
  },
  fontSizes: {
    "6xl": "4rem",
    "5xl": "2.125rem",
    "4xl": "1.5rem",
    "3xl": "1.375rem",
    "2xl": "1.25rem",
    xl: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },
  lineHeights: {
    ...chakraTheme.fontSizes,
    shorter: "1.53",
  },
  zIndices: {
	  ...chakraTheme.zIndices,
	  tooltip: 5,
  },
  fonts: {
    ...chakraTheme.fontSizes,
    body: "Nunito, sans-serif",
    heading: "Nunito, sans-serif",
  },
  shadows: {
    ...chakraTheme.shadows,
    default: "0px 1px 2px rgba(19, 30, 41, 0.04)",
    big: "0px 4px 8px rgba(19, 30, 41, 0.08)",
  },
  space: {
    ...chakraTheme.space,
    2: "0.625rem",
  },
  icons: {
    ...chakraTheme.icons
  },
};

export default theme;
