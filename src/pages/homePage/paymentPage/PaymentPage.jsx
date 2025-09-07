import React, { useEffect, useState } from 'react';
import PaymentAddress from './PaymentAddress';
import CartSection from './CartSection';
import { useParams } from 'react-router-dom';

const PaymentPage = () => {
    const {id} =useParams()
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch('/ProductSectionData.json')
        .then(res=>res.json())
        .then(data=>{
            const selected=data.find(item=>item.id == id)
            setData(selected)
        })
    },[])
    if(!data){
        return <p>loading ....</p>
    }
    console.log(data)
    
    return (
        <div className='mt-8 pt-8 grid grid-1'>
            <div className='flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8'>
                <div className='flex-1 border-2 border-primaryColor lg:h-[80vh]'><PaymentAddress/></div>
                <div className='flex-1 border-2 border-primaryColor h-[80vh] w-full'><CartSection cart={data} /></div>
            </div>
            <div> row 2</div> 
        </div>
    );
};

export default PaymentPage;