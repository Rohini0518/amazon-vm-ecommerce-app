import { useContext } from "react";
import { CartContext } from "./Home";
import Product from "./Product";

export default function Checkout() {
  const cartValue = useContext(CartContext);
  return (
    <div className='d-flex justify-content-center flex-wrap mt-5'>
      {cartValue.cart.length>0 && cartValue.cart.map((product,index)=>(
        <Product product={product} key={index} size={4}/>
      ))}

      {cartValue.cart.length===0 && <h1>Your Cart Is Empty!</h1>}
    </div>
  )
}
