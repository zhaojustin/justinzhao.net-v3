import React from "react";

import Content from "../Content/Content";
import Menu from "../Menu/Menu";
import Photo from "../Photo/Photo.js";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

class Wrapper extends React.Component {
  render() {
    return (
      <Box
        sx={{
          p: { sm: 3, md: 7 },
          m: 6,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Menu />
          </Grid>
          <Grid item xs={4}>
            <Photo />
          </Grid>
          <Grid item xs={4}>
            <Content />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Wrapper;
