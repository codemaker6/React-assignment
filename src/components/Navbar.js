import React from "react";
import photo from "../IMAGES/photo.jpg";
function Navbar() {
  return (
    <>
      <div className="data">
        <div className="leftlink">
          <button class="detailbutton">&#9776;</button>
        </div>
        <div className="rightlink">
          <img className="img" src={photo} alt="photo" />
          <p>Aman</p>
          <a href="#">Logout</a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
