import React from "react";

import Content from "../Content/Content";
import Menu from "../Menu/Menu";

import Box from "@mui/material/Box";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
          }}
        >
          <Menu />
          <Content />
        </Box>
      </div>
    );
  }
}

export default Wrapper;
