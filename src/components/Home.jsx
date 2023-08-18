import React from 'react'
import Hero from './Hero'
import Individual from './Individual'
import ContForm from './ContForm'
import Footer from './common/Footer'
import Payment from './Payment'
import HowItWorks from './HowItWorks'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Individual/>
      <HowItWorks/>
      <Payment/>
      <ContForm/>
      <Footer/>
    </div>
  )
}

export default Home
