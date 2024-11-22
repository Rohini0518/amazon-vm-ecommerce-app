export default function Product({ product }) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          <span>{product.name}</span>
          <span>₹{product.price}</span>
        </h5>
        <p className="card-text">
          {product.description}
        </p>
      </div>

      <button className="btn btn-primary">Add To Cart</button>
    </div>
  )
}
