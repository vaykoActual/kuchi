import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div>
      <h1>Lonely Mouth Reviews</h1>
      {props.restaurants.map((restaurant) => (
        <div className="restaurant-list">
          <div className="restaurant-name" key={restaurant.id}>
            <h2>{restaurant.fields.name}:</h2>
            <h3>{restaurant.fields.review}</h3>
          </div>
          <Link to={`/edit/${restaurant.id}`}> add review</Link>
        </div>
      ))}
    </div>
  );
}
export default HomePage;
