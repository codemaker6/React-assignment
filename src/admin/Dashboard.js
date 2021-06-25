import React from "react";
import { Link } from "react-router-dom";
import admin from "../IMAGES/admin.jpg";
import user from "../IMAGES/user.jpg";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <h3 className="dashhead">Dashboard</h3>
        <div className="myadmin">
          <div className="admin1">
            <Link to="/admin/userlogin">
              {" "}
              <img src={user} alt="admin" className="adminimg" />
            </Link>
            <Link className="uselink" to="/admin/userlogin">
              {" "}
              <h5>Click above image or on link to go user login</h5>
            </Link>
          </div>
          <div className="admin2">
            <Link to="/admin/adminlogin">
              {" "}
              <img src={admin} alt="admin" className="adminimg" />{" "}
            </Link>
            <Link className="uselink" to="/admin/adminlogin">
              {" "}
              <h5>Click above image or on link to go Admin login</h5>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
