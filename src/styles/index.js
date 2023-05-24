import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF6722",
  dangerDark: "#ff4e22",
  warning: "rgb(203, 151, 68)",
  warningDark: "rgb(203, 141, 68)",
  dark: "#3c3c3c", 
  orange: "#D3A863",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#F7F3F0",
  white: "#fff",
  bgFooter: "#FCD5CD",
  black: "#45423E",
  svg: "#ff8e31"
};

// TODO: define overrides object to create theme

// TODO: use overrides object to create theme

const overrides = {
  MuiIconButton: {
    root: {
      "&:hover": {
        backgroundColor: Colors.primary,
      },
    },
  },
  MuiButton: {
    root: {
      borderRadius: 8,
      textTransform: "none",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: Colors.primary,
      },
    },
    containedPrimary: {
      backgroundColor: Colors.primary,
      color: Colors.white,
      "&:hover": {
        backgroundColor: Colors.dark,
      },
    },
  },
  // Add more overrides as needed
};

const myTheme = createTheme({
  palette: {
    primary: {
      main: Colors.white,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    fontFamily: "Sanchez, serif",
  },
  text: {
    primary: Colors.black,
  },
 
});

export default myTheme;

// export default theme;
