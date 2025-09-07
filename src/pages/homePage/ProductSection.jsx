import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const ProductSection = () => {
  const {calculate}=useOutletContext()
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch('/ProductSectionData.json')
        .then(res=>res.json())
        .then(data=>{
            setDatas(data)
            console.log(data)
        })
        
    },[])
    return (
        <div className='pt-12 lg:pt-8'>
          <div className='text-center my-8 bg-primaryColor text-white py-4'>
            <h1 className="uppercase font-bold text-xl lg:text-2xl">all categories</h1>
            <p>-------- 24 hours and 7 days open --------</p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                datas.map((data,index)=><div key={index} className="card bg-base-100 h-80 lg:h-96 w-full shadow-xl">
                <figure className='h-full '>
                  <img
                    src={data.img}
                    alt="Shoes" className='object-cover h-44 lg:h-64   w-full border-2'/>
                </figure>
                <div className="card-body w-full px-1 pt-0 h-36 lg:h-32">
                  <h2 className="card-title text-lg ">{data.product_name}</h2>
                  <p className='text-xm'>{data.title}</p>
                  <div className="card-actions justify-center my-0">
                    <Link to={`/payment/${data.id}`}>
                    <button onClick={calculate} className="btn bg-primaryColor text-white w-full mt-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default ProductSection;