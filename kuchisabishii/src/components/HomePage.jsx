import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div>
      Hello
      {props.restaurants.map((restaurant) => (
        <div className="restaurant-list">
          <div className="restaurant-name" key={restaurant.id}>
            {restaurant.fields.name}
          </div>
          <Link to={`/edit/${restaurant.id}`}> add review</Link>
        </div>
      ))}
    </div>
  );
}
export default HomePage;
