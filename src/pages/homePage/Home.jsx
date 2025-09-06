import React from 'react';
import Banner from './Banner';
import PopularCategory from './PopularCategory';
import ProductSection from './ProductSection';

const Home = () => {
    return (
        <div className='h-full mt-12'>
          <Banner/>
          <PopularCategory/>
          <ProductSection/>
        </div>
    );
};

export default Home;