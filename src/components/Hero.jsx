import { Link } from "react-router-dom";
import BackgroundShape from "../images/hero/hero-background.png";
import HeroBike from "../images/hero/hightimber-hero.png";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const pickBtn = () => {
    document
      .querySelector("#pick-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BackgroundShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your adventure now</h4>
              <h1>
                Save <span>big</span> with our bike rental
              </h1>
              <p>
                Rent the bike of your dreams. Unbeatable prices, unlimited
                usage, flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride &nbsp; <IconCircleCheck />
                </Link>
                <Link
                  onClick={pickBtn}
                  className="hero-content__text__btns__learn-more"
                  to="/"
                >
                  Learn More &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>

            <img
              src={HeroBike}
              alt="bike-img"
              className="hero-content__bike-img"
            />
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;
