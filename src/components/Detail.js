import React from "react";
import img6 from "../IMAGES/hotel6.jpg";
import LanguageIcon from "@material-ui/icons/Language";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import About from "./About";
import Setting from "./Setting";
import Revenue from "./Revenue";
function Detail() {
  return (
    <>
      <section className="information">
        <section className="mysection">
          <div className="detail">
            <img src={img6} alt="" />
          </div>
          <hr />
          <h5>Hyatt Regency</h5>
          <hr />
          <div className="website">
            <LanguageIcon></LanguageIcon>
            <h6>Website</h6>
          </div>
          <div>
            <a href="#">www:hyatt.com</a>
          </div>
          <hr />
          <div className="website">
            <LocationOnIcon></LocationOnIcon>
            <h6>Location</h6>
          </div>
          <div className="city">
            <h6>
              City:<span>San Diego</span>
            </h6>
            <h6>
              Zipcode:<span>12234</span>
            </h6>
          </div>
          <hr />
          <div className="website">
            <EditIcon></EditIcon>
            <h6>Contact Person</h6>
          </div>
          <div className="city">
            <h6>
              Contact Name:<span>test</span>
            </h6>
            <h6>
              Contact Email:<span className="email">test@gmail.com</span>
            </h6>
            <h6>
              Contact Number:<span className="email">(987)654-3210</span>
            </h6>
          </div>
          <hr />
          <button class="btn">Add Travel Code</button>
          <hr />
        </section>
        <section className="section2">
          <About></About>
        </section>
      </section>
      <section className="information">
        <section className="mysection1"></section>
        <section className="section12">
          <Setting></Setting>
          <Revenue></Revenue>
        </section>
      </section>
    </>
  );
}
export default Detail;
