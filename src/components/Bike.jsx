import { useState } from "react";

function Bike({ data, bikeID }) {
  const [bikeLoad, setBikeLoad] = useState(true);
  return (
    <>
      {data[bikeID].map((bike, id) => (
        <div key={id} className="box-bikes">
          {/* bike */}
          <div className="pick-bike">
            {bikeLoad && <span className="loader"></span>}
            <img
              style={{ display: bikeLoad ? "none" : "block" }}
              src={bike.img}
              alt="bike_img"
              onLoad={() => setBikeLoad(false)}
            />
          </div>
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${bike.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{bike.model}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Brand</span>
                <span>{bike.brand}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Wheel Size</span>
                <span>{bike.wheel_size}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Frame</span>
                <span>{bike.frame}</span>
              </div>
              <div className="pick-description__table__col">
                <span>Weight</span>
                <span>{bike.weight}</span>
              </div>
            </div>
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bike;
