import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BookBikeBanner from "../components/BookBikeBanner";
import { BIKE_DATA } from "../components/BikeData";
import BikeModels from "../components/BikeModels";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Bike Models" />
        <div className="container">
          <div className="models-div">
            <BikeModels data={BIKE_DATA} bikeID={0} />
            <BikeModels data={BIKE_DATA} bikeID={1} />
            <BikeModels data={BIKE_DATA} bikeID={2} />
            <BikeModels data={BIKE_DATA} bikeID={3} />
            <BikeModels data={BIKE_DATA} bikeID={4} />
          </div>
        </div>
        <BookBikeBanner />
        <Footer />
      </section>
    </>
  );
}

export default Models;
