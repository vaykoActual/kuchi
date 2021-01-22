import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import styled from "styled-components";

function Form(props) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState(null);
  const params = useParams();
  const Button = styled.button``;

  useEffect(() => {
    const foundRestaurant = props.restaurants.find(
      (restaurant) => params.id === restaurant.id
    );
    setRestaurant(foundRestaurant);
    // if (props.review.length > 0 && params.id) {
    //   const foundCuisine = props.review.find(
    //     (review) => params.id === review.id
    //   );
    setName(foundRestaurant.fields.name);
    //   setRating(foundCuisine.fields.rating);
    //   setLocation(foundCuisine.fields.location);
    // }
  }, [params.id, props.restaurants]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      review,
      rating,
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
      <h1>Lonely Mouth Reviews</h1>;
      {/* <h1>{restaurant !== null && restaurant.fields.name}</h1> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">Review:</label>
        <Button
          name="review"
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        {/* <label htmlFor="location">Locations</label> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
