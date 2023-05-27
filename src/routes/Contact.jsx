import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import Forms from '../components/Forms'
const Contact = ({heading, text}) => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a CHAT" />
      <Forms />
      <Footer />
    </div>
  )
}

export default Contact
