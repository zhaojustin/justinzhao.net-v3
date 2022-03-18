import "./App.css";

import theme from "./theme.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Wrapper from "./components/Wrapper/Wrapper";
import Box from "@mui/material/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "",
            }}
          >
            <Wrapper />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
