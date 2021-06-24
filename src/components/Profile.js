import React from "react";
import Cards from "./Cards";
import Detail from "./Detail";
import {Link} from "react-router-dom"

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="leftsec">
          <h4 className="ml-2">Profile</h4>
        </div>
        <div className="rightsec">
          <Link className="hotel" to="/hotel">
            Hotel Profile
          </Link>
        </div>
      </div>
      <Cards></Cards>
      <Detail></Detail>
    </>
  );
}
export default Profile;
