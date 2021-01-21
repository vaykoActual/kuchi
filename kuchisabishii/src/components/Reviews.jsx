import axios from "axios";
import { baseURL, config } from "../services/index";
import { Link } from "react-router-dom";

function Review(props) {
  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.review.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
  };
  const { cuisines, ratings, locations } = props.review.fields;

  return (
    <div>
      <h3>{cuisines}</h3>
      <h4>{ratings}</h4>
      <ul>{locations}</ul>
      <Link to={`/edit/${props.review.id}`}>
        <button>Submit Review</button>
      </Link>
      <button onClick={handleDelete}>SelfDestruct</button>
    </div>
  );
}
export default Review;
