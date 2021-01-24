import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import "./Form.css";

function Form(props) {
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name: cuisine,
      rating: rating,
      review: review,
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
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <label htmlFor="rating">Ratings:</label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.valueAsNumber)}
          />
          <label htmlFor="review">Review</label>
          <input
            name="review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </main>
  );
}

export default Form;
