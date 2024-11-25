import About from '@/components/about'
import LandingPage from '@/components/LandingPage'
import React from 'react'

const Home = () => {
  return (
    <div className='px-4 lg:px-6 max-w-7xl mx-auto'>
      <LandingPage />
      <About />
    </div>
  )
}

export default Home