import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [cuisine, setCuisine] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState(null);
  const params = useParams();

  useEffect(() => {
    const foundRestaurant = props.restaurants.find(
      (restaurant) => params.id === restaurant.id
    );
    setRestaurant(foundRestaurant);
    // if (props.review.length > 0 && params.id) {
    //   const foundCuisine = props.review.find(
    //     (review) => params.id === review.id
    //   );
    //   setCuisine(foundCuisine.fields.cuisine);
    //   setRating(foundCuisine.fields.rating);
    //   setLocation(foundCuisine.fields.location);
    // }
  }, [params.id, props.restaurants]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      cuisine,
      rating,
      location,
    };
    if (params.id) {
      const recordURL = `${baseURL}/${params.id}`;
      await axios.put(recordURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
  };

  return (
    <div>
      <div>{restaurant !== null && restaurant.fields.name}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">Review:</label>
        <input
          name="review"
          type="text"
          value={"review"}
          onChange={(e) => setReview(e.target.value)}
        />
        <label htmlFor="rating">Ratings:</label>
        <input
          name="rating"
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="location">Locations</label>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
