import React from "react";
import { Link } from "react-router-dom";
import Adminlogin from "./Adminlogin";
import { Alert } from "react-bootstrap";
import { useState } from "react";
const Adminsignup = () => {
  const [adminemail, setAdminemail] = useState("");
  const [adminpassword, setAdminpassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [adminlogin, setAdminlogin] = useState(true);
  function handleformsubmit(e) {
    e.preventDefault();
    if (!adminemail || !adminpassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("adminemail", JSON.stringify(adminemail));
      localStorage.setItem("adminpassword", JSON.stringify(adminpassword));
      console.log("saved data in local storage");
      setAdminlogin(!adminlogin);
    }
  }
  return (
    <>
      {adminlogin ? (
        <section className="adminlogin">
          <h4 style={{ color: "white", paddingTop: "10px" }}>
            Please SignUp As Admin
          </h4>
          <div className="contentform">
            <div className="text">Admin SignUp Form</div>
            <form onSubmit={handleformsubmit}>
              <div className="fielddata">
                <span className="fa fa-user"></span>
                <input
                  type="email"
                  placeholder="Email Id"
                  required
                  onChange={(event) => setAdminemail(event.target.value)}
                />
              </div>
              <div className="fielddata">
                <span className="fa fa-lock"></span>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setAdminpassword(event.target.value)}
                />
              </div>
              {/* <!-- exter links--> */}
              <div className="forgot-pass">
                <Link to="/admin/adminlogin">
                  click here to go Admin Login In
                </Link>
              </div>
              <button className="log">Register</button>
              {flag && (
                <Alert color="primary" variant="danger">
                  All Field are mandatory!
                </Alert>
              )}
            </form>
          </div>
        </section>
      ) : (
        <Adminlogin />
      )}
    </>
  );
};
export default Adminsignup;
