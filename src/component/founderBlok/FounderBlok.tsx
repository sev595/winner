import './founderBlok.scss'
import img from "../../images/reviews_img.png"
import logo from "../../images/quotes.png"

const FounderBlok = () => {
  return (
    <section className="founder-blok-container">
      <div className="films-blok-content">
        <div className="films-blok-picture">
          <img src={img} alt='asd' />
        </div>
        <div className="films-blok-info">
          <h1>Jason Neubauer</h1>
          <h2>Founder</h2>
          <p>Affect Change is a movement where ordinary sparks create extraordinary fire in each and everyone of us.</p>
        </div>
        <div className="films-blok-icon">
          <img src={logo} alt='logo' />
        </div>
      </div>
    </section>
  )
}
export default FounderBlok