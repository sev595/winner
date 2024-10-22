import storyImage1 from "../../images/story-image-1.png"
import storyImage2 from "../../images/story-image-2.png"
import storyImage3 from "../../images/story-image-3.png"

import './animationItem.scss'
const AnimationItem = () => {
  return (
    <div className="animation-item-container">
      <img src={storyImage1} alt="asxd" />
      <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash</p>
      <img src={storyImage2} alt="asxd" />
      <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash</p>
      <img src={storyImage3} alt="asxd" />
      <p>Sasha Calle’s journey shines bright. Empowered by Affect Change, she became Lola Rosales on 'The Young and the Restless,' earned a Daytime Emmy nomination, and is now set to soar as Supergirl in 'The Flash</p>

    </div>
  )
}

export default AnimationItem