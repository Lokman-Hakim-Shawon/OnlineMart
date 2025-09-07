import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/homePage/Home';
import Shop from './pages/ShopPage/Shop';
import Category from './pages/categoryPage/Category';
import NewProduct from './pages/newProductPage/NewProduct';
import FlashSell from './pages/flashSellPage/FlashSell';
import PaymentPage from './pages/homePage/paymentPage/PaymentPage';
import CartPage from './pages/CartPage/CartPage';
import ProductDetailsPage from './pages/productDetailsPage/ProductDetailsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/shop',
        element:<Shop/>,
      },
      {
        path:'/category',
        element:<Category/>,
      },
      {
        path:'/new_product',
        element:<NewProduct/>,
      },
      {
        path:'/flash_sell',
        element:<FlashSell/>,
      },
      {
        path:'/payment/:id',
        element:<PaymentPage/>
      },
      {
        path:'/cart',
        element:<CartPage/>
      },
      {
        path:'/product_detail/:id',
        element:<ProductDetailsPage/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className=''>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
