import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
function Form(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [author, setAuthor] = useState("Anonymous");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a creature object
    // creature object have all the properties from state
    const fields = {
      name,
      rating,
      author,
    };
    // axios call to POST the new creature
    await axios.post(baseURL, { fields }, config);
    // toggling our GET request
    console.log("success!");
    props.setToggleFetch((prev) => !prev);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Make a New Creature!</h4>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Cuttlefish!</button>
    </form>
  );
}
export default Form;
