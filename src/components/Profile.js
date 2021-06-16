import React from "react";
import Cards from "./Cards";
import Detail from "./Detail";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="leftsec">
          <h4>Profile</h4>
        </div>
        <div className="rightsec">
          <a href="#">
            Home<span class="slash">/</span>
          </a>
          <a className="hotel" href="#">
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
