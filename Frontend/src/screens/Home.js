import React from 'react';
import '../../src/components/Main.css';

import HeroSection from '../components/Home/HeroSection';
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
    </>
  );
}

export default Home;
