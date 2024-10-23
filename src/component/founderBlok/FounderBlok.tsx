import './founderBlok.scss'
import img from "../../images/reviews_img.png"
import logo from "../../images/quotes.png"

const FounderBlok = () => {
  return (
    <section className="founder-blok-container">
      <div className="founder-blok-content">
        <div className="founder-blok-picture">
          <img src={img} alt='asd' />
        </div>
        <div className="founder-blok-info">
          <h1>Jason Neubauer</h1>
          <h2>Founder</h2>
          <p>Affect Change is a movement where ordinary sparks create extraordinary fire in each and everyone of us.</p>
        </div>
        <div className="founder-blok-icon">
          <img src={logo} alt='logo' />
        </div>
      </div>
    </section>
  )
}
export default FounderBlok  