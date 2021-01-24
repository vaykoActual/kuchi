function Review(props) {
  const params = useParams();

  const review = props.reviews.find((review) => review.id === params.id);

  if (!review) {
    return (
      <div className="review">
        <h4>Loading...</h4>
      </div>
    );
  }

  let rating = "";

  for (let i = 0; i < review.fields.rating; i++) {
    rating += "⭐️";
  }

  return (
    <div className="review">
      <h4>{review.fields.name}</h4>
      <h5>
        <em>{review.fields.review}</em>
      </h5>
      <p>{rating}</p>
    </div>
  );
}

export default Review;
