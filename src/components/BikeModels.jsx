import {
  IconBike,
  IconStar,
  IconStarFilled,
  IconCircleDashed,
} from "@tabler/icons-react";

const StarRating = ({ rating }) => {
  // Ensure that the rating is between 0 and 5
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  // Create an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < normalizedRating) {
      return <IconStarFilled key={index} width={15} height={15} />;
    } else {
      return <IconStar key={index} width={15} height={15} />;
    }
  });

  return <span>{stars}</span>;
};

function BikeModels({ data, bikeID }) {
  return (
    <>
      {data[bikeID].map((bike, id) => (
        <div key={id} className="models-div__box">
          <div className="models-div__box__img">
            <img src={bike.img} alt="bike_img" />
            <div className="models-div__box__descr">
              <div className="models-div__box__descr__name-price">
                <div className="models-div__box__descr__name-price__name">
                  <p>{bike.model}</p>
                  <span>
                    <StarRating rating={bike.rating} />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__price">
                  <h4>${bike.price}</h4>
                  <p>per day</p>
                </div>
              </div>
              <div className="models-div__box__descr__name-price__details">
                <span>
                  <IconBike /> &nbsp; Brand
                </span>
                <span style={{ textAlign: "right" }}>{bike.brand}</span>
                <span>
                  <IconCircleDashed /> &nbsp; Wheel Size
                </span>
                <span style={{ textAlign: "right" }}>{bike.wheel_size}</span>
              </div>
              <div className="models-div__box__descr__name-price__btn">
                <a href="/">Book Ride</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BikeModels;
