import { useParams, useHistory } from "react-router-dom";

function RestaurantInfo(props) {
  const params = useParams();
  const history = useHistory();
  const foundRestaurant = props.restaurants.find(
    (restaurant) => params.id === restaurant.id
  );

  const filteredReviews = props.review.filter(
    (review) => review.name === foundRestaurant.name
  );
  console.log(filteredReviews);

  return (
    <div>
      <h2>{foundRestaurant.fields.name}: </h2>
      <h4>{foundRestaurant.fields.review}</h4>
      <>
        {filteredReviews.map((oneReview) => {
          return <p>{oneReview.fields.review}</p>;
        })}
      </>
      <button onClick={() => history.push("/addReview")}>add review</button>
    </div>
  );
}

export default RestaurantInfo;
