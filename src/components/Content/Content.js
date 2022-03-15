import React from "react";
import { Outlet } from "react-router-dom";

class Content extends React.Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default Content;
