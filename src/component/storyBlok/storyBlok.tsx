import "./storyBlok.scss"
import asd from "../../images/asd.png"
import background from "../../images/our-story-bg.png"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const StoryBlok = () => {

  useEffect(() => {
    // gsap.to(".story-blok-container", {
    ScrollTrigger.create({
      trigger: ".story-blok-container",
      start: 'top top',
      end: "bottom bottom",
      pin: ".story-blok-container-background",
      markers: true,
      scrub: true
    })

  }, [])

  return (
    <section className="story-blok-container" >
      <div className="story-blok-container-background">
      <img src={background} alt="asxd" />
        
      </div>
      <div className="story-blok-info" >
        <h2>OUR STORY</h2>
        <p>Tired of self-serving content? So are we. That's why we, as conscious entrepreneurs, launched Affect Change—to use influence for real, lasting impact. We don't believe in 'overnight success.' At Affect Change, we celebrate the journey and how collaboration leads to success.</p>
      </div>
      <div className="story-blok-galary">
        <img src={asd} alt="asxd" />
        <img src={asd} alt="asxd" />
        <img src={asd} alt="asxd" />

      </div>
    </section>
  )
}

export default StoryBlok