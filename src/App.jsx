import { Home } from "./components/Home/Home";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./context/Theme/Theme";
import { Container } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
