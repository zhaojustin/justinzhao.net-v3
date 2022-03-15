import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Photography">Photography</Link>
        </nav>
      </div>
    );
  }
}

export default Menu;
