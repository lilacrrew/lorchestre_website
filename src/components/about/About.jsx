import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back title='Let us introduce our website' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Us' />

            <p>Welcome to our orchestra concert website!

We are passionate about bringing the joy of music to audiences worldwide. Our platform is dedicated to providing you with a seamless experience to explore and discover orchestral concerts across various cities.

With a commitment to diversity in repertoire and performance styles, we showcase a range of musical talents and symphonic experiences. Whether you're a seasoned enthusiast or a newcomer to the world of orchestral music, there's something for everyone here.

Navigate through our user-friendly interface to find concerts in your preferred city and easily compare ticket prices to suit your budget. We strive to make your concert experience convenient and enjoyable.

Join us as we embark on a harmonious journey through the captivating world of orchestral performances. Let the melodies enchant you and the symphonies resonate in your soul.

Thank you for being a part of our musical community. Enjoy the beauty of orchestral music with us!







</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./about_us.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
