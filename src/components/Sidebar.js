import React from "react";
import Faviconlist from "./Faviconlist";
import logo from "../IMAGES/logo2.jpg";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img className="img1" src={logo} alt="logo" />
        </div>
        <div className="favicon">
          <Faviconlist></Faviconlist>
        </div>
        <div className="fav">
          <Faviconlist></Faviconlist>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
