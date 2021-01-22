import { useParams } from "react-router-dom";

function RestaurantInfo(props) {
  const params = useParams();
  const foundRestaurant = props.restaurants.find(
    (restaurant) => params.id === restaurant.id
  );
  console.log(foundRestaurant);

  return <div>{foundRestaurant.fields.name}</div>;
}

export default RestaurantInfo;
