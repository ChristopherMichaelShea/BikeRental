import TestimonialImage1 from "../images/testimonials/testimonial-image-1.png";
import TestimonialImage2 from "../images/testimonials/testimonial-image-2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Explore the positive influence we've had on our clients by
                delving into their testimonials. Having personally encountered
                our service and witnessed the results, they are enthusiastic
                about sharing their positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <p>
                  "We chose to rent a mountain bike from this website and had an
                  incredible experience! The booking process was seamless!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={TestimonialImage1} alt="user_img" />
                    <span>
                      <h4>Christopher Shea</h4>
                      <p>Halifax</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <p>
                  "The mountain bike was in excellent condition, enhancing our
                  trip significantly. Highly recommend using this bike rental
                  website!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={TestimonialImage2} alt="user_img" />
                    <span>
                      <h4>Michael</h4>
                      <p>Dartmouth</p>
                    </span>
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

export default Testimonials;
