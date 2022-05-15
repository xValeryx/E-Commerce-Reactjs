export const Product = (props) => {
  const title = props.title;
  const image = props.image;
  const price = props.price;

  return (
    <div className="card-wrapper">
      <article className="card">
        <img className="image" src={image} alt="product-image" />
        <h2> {title} </h2>
        <p>Prezzo: {price}€</p>
        <button className="button"> Add to Cart</button>
      </article>
    </div>
  );
};
