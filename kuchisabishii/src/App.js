import { useEffect, useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Form from "./components/Form";
// import Review from "./components/Review";
import HomePage from "./components/HomePage";
import AddRestaurant from "./components/AddRestaurant";

import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [review, setReview] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getRestaurants = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
      setRestaurants(resp.data.records);
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
      <Route path="/new">
        <Form review={review} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new-restaurant">
        <AddRestaurant review={review} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form
          restaurants={restaurants}
          review={review}
          setToggleFetch={setToggleFetch}
        />
      </Route>
    </div>
  );
}

export default App;
