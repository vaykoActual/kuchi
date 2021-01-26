import { useParams, useHistory, Link } from "react-router-dom";

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
      {<h2>{foundRestaurant.fields.name} </h2>};
      <>
        {filteredReviews.map((oneReview) => {
          return <p>{oneReview.fields.review}</p>;
        })}
      </>
      <Link to={`./AddReview/${foundRestaurant.id}`}>
        <button onClick={() => history.push("/addReview")}> add review</button>
      </Link>
    </div>
  );
}

export default RestaurantInfo;
