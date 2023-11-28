import MainImage from "../images/chooseUs/choose-us-main-image.png";
import SavingsImage from "../images/chooseUs/savings-icon.png";
import HiddenFeeImage from "../images/chooseUs/hidden-fee-icon.png";
import CrossCountryImage from "../images/chooseUs/cross-country-icon.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImage}
              alt="bike_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Explore unmatched bargains on our mountain bike rentals that
                  promise unparalleled value. Committed to delivering optimal
                  quality without straining your budget, we ensure a top-notch
                  experience without compromise. Seize the opportunity to save
                  significantly with our exclusive deals for an extraordinary
                  renting experience.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={CrossCountryImage} alt="bike-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Ride</h4>
                    <p>
                      Take your riding experience to the next level with our
                      bikes for your cross country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={SavingsImage} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={HiddenFeeImage} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
