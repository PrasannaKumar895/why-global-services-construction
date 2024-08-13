import React from 'react'
import { ImageSlider } from '../Components/ImageSlide'
import { Services } from '../Components/Services'
import Project from '../Components/Projects'
import { About } from '../Components/AboutUs'
import { Testimonials } from '../Components/Testiimonials'

const Home = () => {
  return (
    <div>
      <ImageSlider/>
      <About/>
      <Project/> 
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default Home
