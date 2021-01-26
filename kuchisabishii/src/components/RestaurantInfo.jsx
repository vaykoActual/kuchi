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
  console.log(foundRestaurant);

  return (
    <div>
      <main>
        {<h2>{foundRestaurant.fields.name} </h2>};
        <>
          {filteredReviews.map((oneReview) => {
            return <p>{oneReview.fields.review}</p>;
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
        {/* <img src="https://i.imgur.com/SOQQuOk.jpg" /> */}
      </main>
    </div>
  );
}

export default RestaurantInfo;
