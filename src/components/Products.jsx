import {products} from '../utils/products';
import Product from './Product';

export default function Products() {
  return (
    <div className='d-flex justify-content-center flex-wrap mt-5'>
      {products.map((product,index)=>(
        <Product product={product} key={index}/>
      ))}
    </div>
  )
}
