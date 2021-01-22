import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div>
      <h1>When you’re not hungry, but your mouth is lonely.</h1>
      <img src="https://i.imgur.com/Va2oKwd.jpg" />
      {props.restaurants.map((restaurant) => (
        <div className="restaurant-list">
          <div className="restaurant-name" key={restaurant.id}>
            <h2>{restaurant.fields.name}:</h2>
            <h4>{restaurant.fields.review}</h4>
          </div>
          {/* <Link to={`/edit/${restaurant.id}`}> add review</Link> */}
        </div>
      ))}
    </div>
  );
}
export default HomePage;
