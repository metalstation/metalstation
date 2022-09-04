import React from 'react'
import Knowaboutus from '../components/AboutComponents/Knowaboutus'
import Presence from '../components/AboutComponents/Presence'
// import Whychooseus from '../components/AboutComponents/Whychooseus'
import Whychooseus from '../components/HomeComponents/WhyChooseUs'
import Service from '../components/AboutComponents/Service'
import abCss from '../styles/About.module.css'
import Link from 'next/link'
import { useEffect } from 'react'


const About = () => {
  useEffect(() => {
    document.title = 'Metal Station - About Us';
  }, [])
  return (
    <>
      <div className="container">
        <div className="aboutPath">
          <p><Link href="/"><a>Home</a></Link>-<b>AboutUs</b></p>
        </div>
        <div className={abCss.aboutHeding}>
          <h2>About Us</h2>
        </div>
      </div>
      <Knowaboutus />
      <Presence />
      <Whychooseus />
      <Service />
    </>
  )
}

export default About