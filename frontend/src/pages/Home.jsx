import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Banner from '../components/Banner'
import Story from '../components/Story'
import Verse from '../components/Verse'
// import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Banner />
      <Story />
      <div className="py-10">
        <Verse />
      </div>
     {/* <Footer/> */}
    </div>
  );
}

export default Home