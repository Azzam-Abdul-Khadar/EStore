import React from 'react'
import HeroSection from './components/Home/HeroSection'
import RecentlyAdded from './components/Home/RecentlyAdded'
import FeaturedProducts from './components/Home/FeaturedProducts'

const page = () => {
  return (
    <>
      <HeroSection/>
      <RecentlyAdded/>
      <FeaturedProducts/>
    </>
  )
}

export default page