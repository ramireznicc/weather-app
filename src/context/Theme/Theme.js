import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff2c55",
    },
    secondary: {
      main: "#c41e3d",
    },
    background: {
      default: "#595959",
      paper: "#e8e8e8",
    },
    text: {
      primary: "#595959",
      light: "#e8e8e8",
    },
  },
  typography: {
    fontFamily: "Instrument Sans",
  },
});
