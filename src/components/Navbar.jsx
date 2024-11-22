import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./Home";

export default function Navbar() {
  const cartValue = useContext(CartContext);

  const cartTotal = cartValue.cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">E-Commerce Application</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/checkout">Checkout</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/home/checkout">
                <button className="btn btn-primary">
                  <i className="fa fa-shopping-cart text-white" /> <sup>
                    {cartTotal}</sup>
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-success" type="submit">Login</button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
