import React from "react";
import img1 from "../IMAGES/hotel1.jpg";
import img2 from "../IMAGES/hotel2.jpg";
import img3 from "../IMAGES/hotel3.jpg";
import img4 from "../IMAGES/hotel4.jpg";
import img5 from "../IMAGES/hotel5.jpg";

function Cards() {
  return (
    <>
      <section className="section">
        <div className="card1">
          <img className="hotelimg1" src={img1} alt="img1" />
        </div>
        <div className="card2">
          <div className="mycard ">
            <div className="carddetail1">
              <img className="hotelimg2" src={img2} alt="img2" />
            </div>
            <div className="carddetail1">
              <img className="hotelimg2" src={img3} alt="img3" />
            </div>
          </div>
          <div className="mycard carding">
            <div className="carddetail1">
              <img className="hotelimg3" src={img4} alt="img4" />
            </div>
            <div className="carddetail1">
              <img className="hotelimg3" src={img5} alt="img5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cards;
