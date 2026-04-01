import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Banner from '../components/Banner'
import Footer from '../Layouts/Footer'
import Story from '../components/Story'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Banner />
      <Story/>
      <Footer/>
    </div>
  );
}

export default Home