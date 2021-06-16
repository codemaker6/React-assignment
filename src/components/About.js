import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import PoolIcon from "@material-ui/icons/Pool";
import SpaIcon from "@material-ui/icons/Spa";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalCarWashIcon from "@material-ui/icons/LocalCarWash";
import HotTubIcon from "@material-ui/icons/HotTub";
import Location from "./Location";

function About() {
  return (
    <>
      <div className="heading">
        <h6>About Hotel</h6>
      </div>
      <section className="descriptionsection">
        <div className="website">
          <DescriptionIcon></DescriptionIcon>
          <h6>Description</h6>
        </div>
        <p className="test">test</p>
        <hr />
        <h6>Popular Amenities</h6>
        <div className="Amenities">
          <div className="website1">
            <PoolIcon></PoolIcon>
            <h6 className="pool">pool</h6>
          </div>
          <div className="website1">
            <SpaIcon></SpaIcon>
            <h6 className="pool">Spa</h6>
          </div>
          <div className="website1 mr-5">
            <DirectionsBikeIcon></DirectionsBikeIcon>
            <h6 className="pool">Gym</h6>
          </div>
        </div>
        <div className="Amenities mt-2">
          <div className="website1">
            <FreeBreakfastIcon></FreeBreakfastIcon>
            <h6 className="pool">Breakfast Available</h6>
          </div>
          <div className="website1">
            <LocalCarWashIcon></LocalCarWashIcon>
            <h6 className="pool">24x7/Front Desk</h6>
          </div>
          <div className="website1 mr-4">
            <HotTubIcon></HotTubIcon>
            <h6 className="pool">Hot Tub</h6>
          </div>
        </div>
        <hr />
        <Location></Location>
      </section>
    </>
  );
}
export default About;
