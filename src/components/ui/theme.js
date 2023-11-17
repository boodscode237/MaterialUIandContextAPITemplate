import { createTheme } from "@mui/material/styles";

// import styled from "@emotion/styled";

// const useStyles = styled((theme) => ({
//   root: {
//     //Your styling rules
//   },
// }));
let theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#F44336",
    },
    background: {
      paper: "#121212",
      default: "#212121",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#878787",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#03a9f4",
    },
    success: {
      main: "#4caf50",
    },
    common: {},
  },
  typography: {},
  overrides: {},
});

export default theme;
