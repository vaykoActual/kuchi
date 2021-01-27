import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { reviewBaseURL, baseURL, config } from "../services";
import Footer from "./Footer";
import "./HomePage.css";

function Form(props) {
  const [eatery, setEatery] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //add restaurant name and rating
    const fields = {
      name: eatery,
      rating: rating,
    };
    if (params.id) {
      const recordURL = `${baseURL}/${params.id}`;
      await axios.put(recordURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    //Get last restaurant added
    const allRestaurants = await axios(baseURL, config);
    const rests = allRestaurants.data.records; //array of restaurant objects
    let num = 0;
    await rests.sort((a, b) => {
      return a.fields.ID - b.fields.ID;
    });
    //Add review to new restaurant
    const newReview = {
      review: review,
      Restaurants: [rests[rests.length - 1].id],
    };
    const resp = await axios.post(reviewBaseURL, { fields: newReview }, config);
    props.setToggleFetch((prev) => !prev);
  };
  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Eatery:</label>
          <input
            name="name"
            type="text"
            value={eatery}
            onChange={(e) => setEatery(e.target.value)}
          />
          <label htmlFor="rating">Rate it!:</label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.valueAsNumber)}
          />
          <label htmlFor="review">Review it!</label>
          <input
            name="review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
        <img src="https://i.imgur.com/Uc45Pnk.jpeg" alt="Still Hungry?" />
      </div>
      <Footer />
    </main>
  );
}

export default Form;
