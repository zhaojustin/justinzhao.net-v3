import React from "react";

import Content from "../Content/Content";
import Menu from "../Menu/Menu";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

class Wrapper extends React.Component {
  render() {
    return (
      <Container maxWidth="xlg">
        <Box
          sx={{
            m: 6,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Menu />
            </Grid>
            <Grid item xs={8}>
              <Content />
            </Grid>
          </Grid>

          {/*
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
        </Grid> */}
        </Box>
      </Container>
    );
  }
}

export default Wrapper;
