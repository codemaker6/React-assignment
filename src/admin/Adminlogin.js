import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admindata from "../APIDATA/Admindata";
import { Alert } from "react-bootstrap";

const Adminlogin = () => {
  const [adminemaillog, setAdminemaillog] = useState(" ");
  const [adminpasswordlog, setAdminpasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  function handlelogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("adminemail").replace(/"/g, "");
    let pass = localStorage.getItem("adminpassword").replace(/"/g, "");
    if (!adminemaillog || !adminpasswordlog) {
      setFlag(true);
      console.log("empty field");
    } else if (adminpasswordlog !== pass || adminemaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <>
      {home ? (
        <section className="adminlogin">
          <h4 style={{ color: "white", paddingTop: "10px" }}>
            Please Login As Admin
          </h4>
          <div className="contentform">
            <div className="text">Admin Login Form</div>
            <form onSubmit={handlelogin}>
              <div className="fielddata">
                <span className="fa fa-user"></span>
                <input
                  type="email"
                  placeholder="Email Id"
                  required
                  onChange={(event) => setAdminemaillog(event.target.value)}
                />
              </div>
              <div className="fielddata">
                <span className="fa fa-lock"></span>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setAdminpasswordlog(event.target.value)}
                />
              </div>
              {/* <!-- exter links--> */}
              <div className="forgot-pass">
                <Link to="/admin/adminsignup">
                  click here to go Admin Sign Up
                </Link>
              </div>
              <button className="log">Login Now</button>
              {flag && (
                <Alert color="primary" variant="warning">
                  Fill correct Info else keep trying.
                </Alert>
              )}
            </form>
          </div>
        </section>
      ) : (
        <Admindata />
      )}
    </>
  );
};
export default Adminlogin;
