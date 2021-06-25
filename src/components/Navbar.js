import React from "react";
import photo from "../IMAGES/photo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      <div className="data">
        <div className="leftlink">
          <button className="detailbutton">&#9776;</button>
        </div>
        <div className="rightlink">
          <img className="img" src={photo} alt="pic" />
          <p>Aman</p>
          <div style={{ marginRight: "10px" }}>
            <Link to="/">Home</Link>
            <Link className="admin" to="/admin">
              Dashboard{" "}
            </Link>
          </div>

          {/* <Link to="#">Logout</Link> */}
          <button class="btn-danger btndng" type="submit" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
