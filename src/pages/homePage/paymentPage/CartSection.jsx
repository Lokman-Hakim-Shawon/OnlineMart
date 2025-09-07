import React from 'react';

const CartSection = ({cart}) => {
    console.log('data of cart',cart.id)
    if(!cart){
        return <p>loading ....</p>
    }
    return (
        <div>
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
                <tr>
                    <td className='border-2 h-24 w-24'><img src={cart.img} alt="image" /></td>
                    <td className='border-2'>{cart.product_name}</td>
                    <td className='border-2'>{cart.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CartSection;