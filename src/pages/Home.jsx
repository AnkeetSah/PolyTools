import React from 'react';
import Hero from '../components/Home/Hero';
import PopularTools from '../components/Home/PopularTools';
import Reason from '../components/Home/Reason';

const Home = () => {
  return (
    <main className=" w-full  bg-gray-50 pt-4 pb-8 px-4">
      <Hero/>
      <PopularTools/>
      <Reason/>
    </main>
  );
};

export default Home;
