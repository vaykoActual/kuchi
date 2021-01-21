import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <header>
      <h1 className="title">Kuchisabishii</h1>
      <h3>Cuisine</h3>
      <h4>
        <Link to="/New">Submit a Review</Link>
      </h4>
      <div className="Reviews">
        {props.cuisineArray.map((cuisine) => {
          return (
            <div className="bird">
              <Link to={`${cuiosine.name}`}>
                <img src={cuisine.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </header>
  );
}
export default HomePage;
