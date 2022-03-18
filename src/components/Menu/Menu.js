import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h1">Justin Zhao</Typography>
        <Box
          sx={{
            pt: 5,
          }}
        >
          <nav>
            <Link component={RouterLink} className="link" to="/">
              About
            </Link>
            <br></br>
            <Link component={RouterLink} className="link" to="/Photography">
              Photography
            </Link>
            <br></br>
            <Link component={RouterLink} className="link" to="/Projects">
              Projects
            </Link>
            <br></br>
            <Link component={RouterLink} className="link" to="/Eats">
              Eats
            </Link>
            <br></br>
            <Link component={RouterLink} className="link" to="/Misc">
              Misc
            </Link>
          </nav>
        </Box>
      </div>
    );
  }
}

export default Menu;
