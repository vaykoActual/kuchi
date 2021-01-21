import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState({});
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="cuisine">Cuisine:</label>
      <input
        name="cuisine"
        type="text"
        value={"help"}
        onChange={(e) => setCuisine(e.target.value)}
      />
      <label htmlFor="rating">Ratings:</label>
      <input
        name="rating"
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <label htmlFor="location">Locations</label>
      <input
        name="locations"
        type="text"
        value={Location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default Form;
