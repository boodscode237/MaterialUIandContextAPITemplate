import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const RootWrapper = ({ element }) => (
  <ThemeProvider theme={theme}> {element} </ThemeProvider>
);
export default RootWrapper;
