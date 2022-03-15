import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <nav>
          <Link component={RouterLink} to="/">
            Home
          </Link>
          <Link component={RouterLink} to="/Photography">
            Photography
          </Link>
        </nav>
      </div>
    );
  }
}

export default Menu;
