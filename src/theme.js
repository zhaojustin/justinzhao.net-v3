import { createTheme } from "@mui/material/styles";

import { cyan, teal } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Space Mono",
    h1: {
      fontSize: "3.5rem",
    },
  },
  components: {
    //Link
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Space Mono",
          fontSize: "1.5rem",
          textDecoration: "none",
          color: "rgb(70,70,70)",
        },
      },
    },
    //
  },
  palette: {
    primary: cyan,
    secondary: teal,
  },
});

export default theme;
