import { useParams } from "react-router-dom";

function RestaurantInfo(props) {
  const params = useParams();
  const foundRestaurant = props.restaurants.find(
    (restaurant) => params.id === restaurant.id
  );
  console.log(foundRestaurant);

  return (
    <div>
      <h2>{foundRestaurant.fields.name}: </h2>
      <h4>{foundRestaurant.fields.review}</h4>
    </div>
  );
}

export default RestaurantInfo;
