import SelectBike from "../images/plan/bike-icon.png";
import Contact from "../images/plan/operator-icon.png";
import Ride from "../images/plan/ride-icon.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your adventure now</h3>
              <h2>Quick & easy bike rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectBike} alt="icon_img" />
                <h3>Select Bike</h3>
                <p>
                  We offers a large range of mountian bikes suitable for any
                  adventure
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Ride} alt="icon_img" />
                <h3>Let's Ride</h3>
                <p>
                  Whether you are an experienced rider or a beginner, we've got
                  you covered with our wide range of bikes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
