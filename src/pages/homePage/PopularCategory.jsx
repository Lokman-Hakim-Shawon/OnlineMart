import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/photos/digital_watch.jpg'
import img2 from '../../assets/photos/braslight.jpg'
import img3 from '../../assets/photos/ring.jpg'
const PopularCategory = () => {
    return (
        <div className='h-full w-full my-4 py-2'>
          <h1 className='text-xl lg:text-2xl font-bold text-white bg-primaryColor text-center py-2 mb-4'>Popular Categories</h1>
            <Swiper
        breakpoints={{
          320: {   // mobile ছোট screen
            slidesPerView: 3,
          },
          768: {   // tablet
            slidesPerView: 4,
          },
          1024: {  // desktop
            slidesPerView: 5,
          },
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-52"
      >
        <SwiperSlide><img src={img1} className='h-full w-full object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img2} className='h-full w-full object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img3} className='h-full w-full object-cover' /></SwiperSlide>
        <SwiperSlide><img src={img1} className='h-full w-full object-cover' /></SwiperSlide>
        <SwiperSlide><img src={img2} className='h-full w-full object-cover' /></SwiperSlide>
        <SwiperSlide><img src={img3} className='h-full w-full object-cover' /></SwiperSlide>
        <SwiperSlide><img src={img1} className='h-full w-full object-cover' /></SwiperSlide>
        <SwiperSlide><img src={img2} className='h-full w-full object-cover' /></SwiperSlide>
        <SwiperSlide><img src={img3} className='h-full w-full object-cover' /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default PopularCategory;