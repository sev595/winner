import "./storyBlok.scss"
import storyImage1 from "../../images/story-image-1.png"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimationItem from "./AnimationItem"
import { useBreakpoint } from "../../hook/useBreakpoint"

gsap.registerPlugin(ScrollTrigger)


const StoryBlok = () => {

  const { screenWidth } = useBreakpoint();

  useEffect(() => {
    if (screenWidth >= 1400) {
      ScrollTrigger.create({
        trigger: ".story-blok-container",
        start: 'top top',
        end: "bottom bottom",
        pin: ".story-blok-container-background",
        scrub: true
      })
    }
  }, [screenWidth])


  return (
    <section className="story-blok-container" >
      {/* <div className="story-blok-container-background">
        <img src={background} alt="asxd" />
      </div> */}
      <div className="story-blok-info-content">
        <div className="story-blok-info" >
          <h2>OUR STORY</h2>
          <p>Tired of self-serving content?<br/> So are we. That's why we, as conscious entrepreneurs, launched Affect Change— <span>to use influence for real, lasting impact.</span> We don't believe in 'overnight success.' At Affect Change, we celebrate the journey and how collaboration leads to success.</p>
        </div>
      </div>

      <div className="story-blok-galary">
        <AnimationItem />
      </div>
    </section>
  )
}

export default StoryBlok