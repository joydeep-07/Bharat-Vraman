import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Banner />
    </div>
  );
}

export default Home