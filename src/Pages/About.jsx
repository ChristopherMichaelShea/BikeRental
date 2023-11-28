import BookBikeBanner from "../components/BookBikeBanner";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMainImage from "../images/about/about-us-image.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMainImage}
              alt="bike-renting"
            />
            <div className="about-main__text">
              <h3>About Our Company</h3>
              <h2>Grab a bike and start your adventure</h2>
              <p>
                At Halifax Bike Rental, we are passionate about providing
                adventurers like you with an exceptional riding experience. With
                a commitment to customer satisfaction, we strive to make the
                rental process seamless and affordable. Whether you're a
                seasoned rider or a novice eager to embark on a biking
                adventure, we have the perfect bike for you. Discover the joy of
                cycling through scenic landscapes, and let Halifax Bike Rental
                be your trusted companion on your biking journey.
              </p>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <BookBikeBanner />
      <Footer />
    </>
  );
}

export default About;
