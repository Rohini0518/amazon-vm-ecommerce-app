import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

function App() {
  const isLoggedIn=true;

  return (
    <>
      {/* E-Commerce application */}

      {/* TODO-1: Homepage with Navbar */}
      {/* TODO-2: Products */}
      {/* TODO-3: ProductDetails */}
      {/* TODO-4: AddToCart */}
      {/* TODO-5: Checkout */}
      {/* TODO-6: Payment Integration */}
      {/* TODO-7: Authentication */}

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        {isLoggedIn && <Route path="home" element={<Home />}>
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
