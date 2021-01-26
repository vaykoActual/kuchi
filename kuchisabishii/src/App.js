import axios from "axios";
import { baseURL, config } from "./services";
import { useEffect, useState, React } from "react";
import { Route, useHistory } from "react-router-dom";

import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AddRestaurant from "./components/AddRestaurant";
import RestaurantInfo from "./components/RestaurantInfo";
import AddReview from "./components/AddReview";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [review, setReview] = useState([]);
  const [title, setTitle] = useState([]);
  // const [image, setImage] = useState([]);
  // const [search, setSearch] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getRestaurants = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
      setRestaurants(resp.data.records);
      // const reviewResp = await axios.get(reviewBaseURL, config);a
      // setReview(reviewResp.data.records);
      history.push("/");
    };
    getRestaurants();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <HomePage restaurants={restaurants} />
      </Route>
      <Route path="/new-restaurant">
        <AddRestaurant
          restaurants={restaurants}
          review={review}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route path="/RestaurantInfo/:id">
        <RestaurantInfo restaurants={restaurants} review={review} />
      </Route>
      <Route path="/AddReview/:id">
        <AddReview review={review} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/Footer/blockquote-footer">
        <Footer title={title} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
