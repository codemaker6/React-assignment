import React from "react";
import photo from "../IMAGES/photo.jpg";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className="data">
        <div className="leftlink">
          <button class="detailbutton">&#9776;</button>
        </div>
        <div className="rightlink">
          <img className="img" src={photo} alt="pic" />
          <p>Aman</p>
          <Link to="/">Home</Link>
          <Link className="admin" to="/admin">Dashboard </Link>
          <Link to="#">Logout</Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
