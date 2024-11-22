import { useContext } from "react";
import { CartContext } from "./Home";
import Product from "./Product";

export default function Checkout() {
  const cartValue = useContext(CartContext);
  return (
    <div className="mt-5">
    {cartValue && cartValue.cart.length>0 && <a href="https://pmny.in/PAYUMN/eJ9A79RMErC3" target="_blank" className="btn btn-primary">Make Payment</a>}

    <div className='d-flex justify-content-center flex-wrap'>
      {cartValue && cartValue.cart.length>0 && cartValue.cart.map((product,index)=>(
        <Product product={product} key={index} size={4}/>
      ))}

      {cartValue && cartValue.cart.length===0 && <h1>Your Cart Is Empty!</h1>}
    </div>
    </div>
  )
}
