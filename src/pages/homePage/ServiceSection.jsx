import React from 'react';

const ServiceSection = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 items-center space-y-4 py-4 lg:border-t-2 border-gray-400 my-4 ml-12 lg:mx-8'>
            <div>
                <h1 className='font-bold'>Free Delivery</h1>
                <p>On all order above BDT 5000</p>
            </div>
            <div>
                <h1 className='font-bold'>Easy 7 days return</h1>
                <p>7 days Easy return Guaranty</p>
            </div>
            <div>
                <h1 className='font-bold'>International Warranty</h1>
                <p>1 year official warranty</p>
            </div>
            <div>
                <h1 className='font-bold'>00% secure checkout</h1>
                <p>COD/Mobile banking/visa</p>
            </div>
        </div>
    );
};

export default ServiceSection;