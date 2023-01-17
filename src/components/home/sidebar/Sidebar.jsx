import React from "react";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  return <div>
    <div className="side-bar">Sidebar</div>
    <div>{children}</div>
  </div>;
};

export default Sidebar;
