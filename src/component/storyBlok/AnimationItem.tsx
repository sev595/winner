import storyImage1 from "../../images/story-image-1.png"
import storyGif from "../../images/Our-Story.gif"
import storyGifBack from "../../images/our-story_mask-back.svg"

import storyImage3 from "../../images/story-image-3.png"

import test1 from "../../images/test11.png"
import test2 from "../../images/test22.png"
import test3 from "../../images/test33.png"



import './animationItem.scss'

const GifItem = () => {
  return (
    <div>
      <div className="story-gif-container" >
        <div className="story-gif-pic-container">
        <img className="story-gif-pic" src={storyGif} alt="asxd" />
        </div>
        <img className="story-gif-back" src={storyGifBack} alt="asxd" />
        <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash</p>
      </div>

    </div>
  )
}

const AnimationItem = () => {
  return (
    <div className="animation-item-container">
      <div className="animation-item-content">
        <img src={test1} alt="asxd" />
        <p>1Take <span> Johnny 'Dr. Whitout' Joassaint. After our pilot transformed his life, </span> his business and certifications soared, making him Miami’s top luxury car detailer, trusted by celebrities and A-listers.</p>
      </div>
      {/* <GifItem /> */}


      <div className="animation-item-content">
        <img src={test2} alt="asxd" />
        <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' <span> earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash </span></p>

      </div>
      <div className="animation-item-content">
        <img src={test3} alt="asxd" />
      </div>

    </div>
  )
}

export default AnimationItem