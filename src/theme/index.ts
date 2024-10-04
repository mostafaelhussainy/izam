import { createTheme } from "@mui/material/styles";
import components from "./components";
import typography from "./typography";

const theme = createTheme({
  spacing: 10,
  typography,
  //@ts-ignore
  components,
});

export default theme;
