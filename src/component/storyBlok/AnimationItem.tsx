import storyImage1 from "../../images/story-image-1.png"
import storyGif from "../../images/Our-Story.gif"
import storyGifBack from "../../images/our-story_mask-back.svg"

import storyImage3 from "../../images/story-image-3.png"
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
      <div>
        <img src={storyImage1} alt="asxd" />
        <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash</p>
      </div>
      <GifItem />

      <div>
        <img src={storyImage3} alt="asxd" />
        <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash</p>
      </div>

    </div>
  )
}

export default AnimationItem