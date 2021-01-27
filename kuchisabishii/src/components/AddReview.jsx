import { useState } from "react";
import { reviewBaseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import "./HomePage.css";

function AddReview(props) {
  const [review, setReview] = useState("");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      review: review,
      Restaurants: [params.id],
    };
    await axios.post(reviewBaseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
  };

  return (
    <main>
      <div className="addReview-div">
        <form onSubmit={handleSubmit}>
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
        <Footer />
      </div>
    </main>
  );
}

export default AddReview;
