import React from "react";
import Cards from "./Cards";
import Detail from "./Detail";
import Routing from "../Routing/Routing";
import {Link} from "react-router-dom"

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="leftsec">
          <h4 className="ml-2">Profile</h4>
        </div>
        <div className="rightsec">
          <a className="hotel" href="/hotel">
            Hotel Profile
          </a>
        </div>
      </div>
      <Cards></Cards>
      <Detail></Detail>
    </>
  );
}
export default Profile;
