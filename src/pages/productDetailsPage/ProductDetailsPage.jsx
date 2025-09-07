import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const {id}=useParams()
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch('/ProductSectionData.json')
        .then(res=>res.json())
        .then(value=>{
            const items=value.find(item=>item.id==id)
            setData(items)
        })
    },[])
    console.log(data,'product details')
    return (
        <div className='mt-8 py-8 h-full px-4'>
            <div className='flex justify-center'><img src={data?.img} className='lg:h-[70vh] h-full w-[80$] lg:w-1/2 border-2' /></div>
            <div>
                <p className='text-5xl text-center pt-12'>{data?.product_name}</p>
                <p className='text-xl text-center py-4'>Title: {data?.title}</p>
                <p>The Smart Digital Wrist Watch is a modern wearable gadget designed for both style and functionality. With its sleek design and advanced technology, it is more than just a timepiece – it’s your everyday smart companion.</p>
                <h3 className='font-bold text-2xl py-4'>Key Features : </h3>
                <ul className='text-black'>
                    <li className=''>Time & Date – Shows accurate time, alarms, and reminders.</li>
                    <li>Fitness Tracking – Tracks steps, distance, calories burned, and workout modes.</li>
                    <li>Heart Rate & Health Monitoring – Measures heart rate, SpO₂ (blood oxygen), sleep quality, and sometimes even ECG.</li>
                    <li>Notifications – Displays calls, messages, emails, and app notifications directly on the wrist.</li>
                    <li>GPS & Navigation – Helps track running, cycling, and outdoor activities with location accuracy.</li>
                    <li>Music Control – Lets you play/pause songs or control music from your phone.</li>
                    <li>Customization – Change watch faces, wallpapers, and strap styles.</li>
                    <li>Water Resistance – Many smart watches are splash-proof or even waterproof, useful for swimming.</li>
                </ul>
                <h3 className='font-bold text-2xl py-4'>Advantages : </h3>
                <ul>
                    <li>Keeps you connected without holding your phone.</li>
                    <li>Helps you maintain a healthy lifestyle.</li>
                    <li>Saves time by giving quick access to notifications.</li>
                    <li>Stylish and fashionable accessory.</li>
                </ul>
                <p className='py-4'>This smart digital wrist watch is perfect for fitness enthusiasts, professionals, and anyone who values health and style. It helps you stay connected, monitor your well-being, and manage your daily tasks efficiently. 👉 Whether you’re going to the gym, office, or a casual outing, this smartwatch complements your lifestyle.</p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;