import { useEffect, useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Review from "./components/Review";

import "./App.css";

function App() {
  const [review, setReview] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getReview = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setReview(resp.data.records);
      history.push("/");
    };
    getReview();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        {review.map((review) => (
          <Review
            key={review.id}
            review={review}
            setToggleFetch={setToggleFetch}
          />
        ))}
      </Route>
      <Route path="/new">
        <Form review={review} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form review={review} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
