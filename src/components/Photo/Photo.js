import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

class Photo extends React.Component {
  render() {
    return (
      <Grid container direction="column" item>
        <Grid item container direction="column" display="flex" justify="center">
          <Box
            component="img"
            sx={{
              mt: { xs: 10, lg: 25 },
              justifyContent: "center",
              maxWidth: { xs: 290, lg: "100%" },
            }}
            alt="The house from the offer."
            src="/assets/island.jpg"
          />
          <Typography>
            Fujifilm x-t30 <span className="italic light">35mm f/2 1/4000</span>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Photo;
