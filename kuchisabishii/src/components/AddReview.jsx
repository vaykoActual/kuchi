import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddReview(props) {
  const [review, setReview] = useState("");
  const params = useParams();

  // const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      review: review,
      name: params.name,
    };
    console.log(fields);
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Eatery:</label>
          <input
            name="name"
            type="text"
            value={eatery}
            onChange={(e) => setEatery(e.target.value)}
          /> */}
          <label htmlFor="review">Review it!</label>
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

export default AddReview;
