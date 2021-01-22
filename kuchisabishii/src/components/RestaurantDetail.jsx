import { useParams } from "react-router-dom";

function RestaurantDetail(props) {
  const params = useParams();
  const foundRestaurant = props.restaurants.find(
    (restaurant) => params.id === restaurant.id
  );
  console.log(foundRestaurant);

  return <div>hello{foundRestaurant.fields.name}</div>;
}

export default RestaurantDetail;
