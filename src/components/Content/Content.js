import React from "react";
import { Outlet } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

class Content extends React.Component {
  render() {
    return (
      <Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-start"
        >
          <Outlet />
        </Grid>
      </Grid>
    );
  }
}

export default Content;
