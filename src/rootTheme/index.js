import { createTheme } from "@mui/material";
import { RedC, YellowC } from "../colors/colors";
import { red, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: red[800],
    },
    typography: {
      fontFamily: "vazir, roboto",
    },
  },
});

export default theme;
