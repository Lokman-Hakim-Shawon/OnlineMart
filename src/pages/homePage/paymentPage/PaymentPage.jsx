import React from 'react';
import PaymentAddress from './PaymentAddress';

const PaymentPage = () => {
    return (
        <div className='mt-8 pt-8 grid grid-1'>
            <div className='flex flex-col lg:flex-row justify-between items-center space-x-8'>
                <div className='flex-1 border-2 border-primaryColor lg:h-[80vh]'><PaymentAddress/></div>
                <div className='flex-1 border-2 h-[80vh]'>section 2</div>
            </div>
            <div> row 2</div> 
        </div>
    );
};

export default PaymentPage;