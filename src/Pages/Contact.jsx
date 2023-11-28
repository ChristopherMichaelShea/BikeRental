import {
  IconMail,
  IconLocation,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BookBikeBanner from "../components/BookBikeBanner";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Have Questions?</h2>
              <p>
                We value your inquiries and feedback at Halifax Bike Rental. Our
                dedicated team is here to assist you in any way possible.
                Whether you have questions about our mountain bike rental
                options, need assistance with a reservation, or simply want to
                share your biking experiences, we're all ears.
              </p>
              <p>
                Feel free to reach out via the contact form below, and we'll get
                back to you promptly. Your adventure awaits, and we're here to
                ensure it's a seamless and enjoyable ride.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; (123) 456-7869
              </a>
              <a href="/">
                <IconMail /> &nbsp; halifaxbikerental@gmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Halifax, Canada
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder="Your Name"></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Question <b>*</b>
                </label>
                <textarea placeholder="Write Here..."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <BookBikeBanner />
        <Footer />
      </section>
    </>
  );
}

export default Contact;
