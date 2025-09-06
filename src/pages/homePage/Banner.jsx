import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/banner/banner1.jpg'
import img2 from '../../assets/banner/banner2.jpg'
import img3 from '../../assets/banner/banner3.jpg'
const Banner = () => {
    return (
        <div className='h-64 lg:h-[30%] w-full border-2 pt-4 '>
               <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} dynamicHeight={true} className='h-64 lg:h-full'>
                <div className='h-64 lg:h-full'>
                    <img src={img1} className='h-full w-full object-cover'/>
                </div>
                <div className='h-64 lg:h-full'>
                    <img src={img2} className='h-full w-full object-cover'/>
                </div>
                <div className='h-64 lg:h-full'>
                    <img src={img3} className='h-full w-full object-cover'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;