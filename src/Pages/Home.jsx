import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Products from '../Components/Products'
import CallToAction from '../Components/CallToAction'
import Blog from '../Components/Blog'
import Brands from '../Components/Brands'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Products/>
      <CallToAction/>
      <Blog/>
      <Brands/>
      <NewsLetter/>
    </div>
  )
}

export default Home