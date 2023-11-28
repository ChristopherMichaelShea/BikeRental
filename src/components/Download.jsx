import AppleAppStoreButton from "../images/download/appstore.svg";
import GooglePlayStoreButton from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
              Renting the bike that you need has never been more convinient!
              Download the Halifax Bike Rental mobile app now and book your
              ride!
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={GooglePlayStoreButton} />
              <img alt="download_img" src={AppleAppStoreButton} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
