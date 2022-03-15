import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
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
  );
}

export default App;
