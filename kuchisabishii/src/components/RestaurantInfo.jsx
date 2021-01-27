import { useParams, useHistory, Link } from "react-router-dom";
import "./HomePage.css";

function RestaurantInfo(props) {
  const params = useParams();
  const history = useHistory();
  const foundRestaurant = props.restaurants.find(
    (restaurant) => params.id === restaurant.id
  );

  const filteredReviews = props.review.filter(
    (review) => review.name === foundRestaurant.name
  );

  return (
    <div className="restaurant-infoDiv">
      <main>
        {<h2>{foundRestaurant.fields.name} </h2>};
        <>
          {filteredReviews.map((oneReview) => {
            return <p>{oneReview.fields.review.id}</p>;
          })}
        </>
        <div>
          <Link to={`./AddReview/${foundRestaurant.id}`}>
            <button onClick={() => history.push("/addReview")}>
              {" "}
              add review
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default RestaurantInfo;
