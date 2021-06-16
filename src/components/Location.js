import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
function Location() {
  return (
    <>
      <div className="Location mt-2">
        <div className="website12">
          <RoomIcon></RoomIcon>
          <h6>Whats Nearby</h6>
        </div>
        <div className="website12 restaurant">
          <RestaurantMenuIcon></RestaurantMenuIcon>
          <h6>Restaurants</h6>
        </div>
      </div>
      <div className="Location mt-2">
        <div className="website12 ">
          <p className="para">
            Hilton Los Angeles Airport,West Century Boulevard,Los Angeles,CA,USA
            3 Miles
          </p>
        </div>
        <div className="website12">
          <p className="para">
            Gordon Ramsay Hell's Kitchen, Las Vegas Boulevrad South,Las
            Vegas,(onsite)-3 Miles
          </p>
        </div>
      </div>
      <div className="website12">
        <p className="para">
          Westfield UTC, La jolla, Village Drive,CAN Deigo,CA, USA -1 Miles
        </p>
      </div>
      <hr />
      <div className="website1">
        <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
        <h6>Nearby Airport</h6>
      </div>
      <div className="mt-2">
        <p className="para">Southwest Georgia Regional Airport (ABY) 3miles</p>
        <p className="para">Aberdeen Regional Airport (ABY) 3miles</p>
      </div>
    </>
  );
}
export default Location;
