import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

class About extends React.Component {
  render() {
    return (
      <Fade in={true}>
        <Grid container>
          {/* HEADER */}
          <Box>
            <Typography variant="h1">About Me</Typography>
          </Box>
          {/* CONTENT */}
          <Box>
            <Typography variant="p"></Typography>
          </Box>
        </Grid>
      </Fade>
    );
  }
}

export default About;
