import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";

import "./App.css";

function App() {
  const [review, setReview] = useState([]);
  useEffect(() => {
    const getReview = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
      setReview(resp.data);
    };
    getReview();
  }, []);

  return (
    <div className="App">
      <h1>Kuchisabishii</h1>
    </div>
  );
}

export default App;
