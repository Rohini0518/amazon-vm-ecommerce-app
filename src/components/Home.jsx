import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function Home() {
  const [cart,setCart]=useState([]);

  const handleAddToCart=(product)=>{
    const updatedCart=[...cart];
    const isExist = updatedCart.find(cart=>cart.id===product.id);
    if(!isExist){
      updatedCart.push({...product,quantity:1});
    } else if(isExist){
      const index = updatedCart.findIndex(cart=>cart.id===product.id);
      updatedCart[index].quantity+=1;
    }
    setCart(updatedCart);
  }

  return (
    <div>
      <CartContext.Provider value={{handleAddToCart,cart}}>
      <Navbar/>
      <Outlet/>
      </CartContext.Provider>
    </div>
  )
}
