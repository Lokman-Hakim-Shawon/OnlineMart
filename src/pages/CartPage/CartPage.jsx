import React from 'react';
import CartSection from '../homePage/paymentPage/CartSection';
import { Link, useOutletContext } from 'react-router-dom';

const CartPage = () => {
    const {array}=useOutletContext()
    console.log('cart page',array)
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-bold p-2 bg-primaryColor text-white text-center'>Cart Details</h1>
            <table className='w-full text-center'>
                <thead className=''>
                <tr className="">
                    <th className='border-2'>Image</th>
                    <th className='border-2'>Name</th>
                    <th className='border-2'>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    array.map((cart,index)=><tr key={index}>
                        <td className='border-2 h-24 w-24'><img src={cart.img} alt="image" /></td>
                        <td className='border-2'>{cart.product_name}</td>
                        <td className='border-2'>{cart.price}</td>
                        <td className='border-2'> 
                          <Link to={`/payment/${cart.id}`}>
                             <button  className="btn bg-primaryColor text-white">Order Now</button>
                          </Link>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
           
        </div>
    );
};

export default CartPage;