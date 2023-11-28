import { useState } from "react";
import Bike from "./Bike";
import { BIKE_DATA } from "./BikeData";

function SelectBike() {
  const [active, setActive] = useState("FirstBike");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section" id="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Bike Models</h3>
              <h2>Our rental selection</h2>
              <p>
                Choose from a variety of our amazing bikes to rent for your next
                adventure
              </p>
            </div>
            <div className="pick-container__bike-content">
              {/* pick Bike */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("FirstBike");
                    btnID("btn1");
                  }}
                >
                  High Timber
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("SecondBike");
                    btnID("btn2");
                  }}
                >
                  Mythique 29 VRX
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdBike");
                    btnID("btn3");
                  }}
                >
                  Nakamura Monster
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthBike");
                    btnID("btn4");
                  }}
                >
                  High Tower
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthBike");
                    btnID("btn5");
                  }}
                >
                  Marlin 5
                </button>
              </div>

              {active === "FirstBike" && <Bike data={BIKE_DATA} bikeID={0} />}
              {active === "SecondBike" && <Bike data={BIKE_DATA} bikeID={1} />}
              {active === "ThirdBike" && <Bike data={BIKE_DATA} bikeID={2} />}
              {active === "FourthBike" && <Bike data={BIKE_DATA} bikeID={3} />}
              {active === "FifthBike" && <Bike data={BIKE_DATA} bikeID={4} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectBike;
