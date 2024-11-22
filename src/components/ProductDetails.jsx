import { useParams } from "react-router-dom"
import Product from "./Product";
import { products } from "../utils/products";

export default function ProductDetails() {
  const {id}=useParams();

  const product=products.find((product)=>product.id==id);
  return (
    <div>
      <Product product={product} size={12} moreInfo={true}/>
    </div>
  )
}
