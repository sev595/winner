import logo from "../../images/Utilities.gif"
import './foundingMembers.scss'

const FoundingMembers = () => {
  return (
    <div className="founding-memebers-blok-container">
      <div className="founding-memebers-content">
        <div className="founding-blok-info">
          <h1>222 FOUNDING MEMBERS</h1>
          <p>Our private community includes conscious leaders, celebrities, influencers, and wellness experts who have undergone personal transformation and are committed to creating change</p>
          <p>In collaboration with Sergey “Do What You Love” Gordienko the “Butterfly Affect” series is a limited 222 collection gifted to each new member in the community</p>
        </div>
        <div className="founding-blok-icon">
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div> 
  )
}

export default FoundingMembers