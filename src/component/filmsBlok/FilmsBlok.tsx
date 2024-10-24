import './filmsBlok.scss'
import gif from "../../images/filb-blok.gif"
import logo from "../../images/company_tag.png"

const FilmsBlok = () => {
  return (
    <section className="films-blok-container">
      <div className="films-blok-content block-kontent">
        <div className="films-blok-picture">
          <img src={gif} alt='asd' />
        </div>
        <div className="films-blok-info">
          <h1>MAMMOTH</h1>
          <h2>Film FESTIVAL AWARD WINNER!</h2>
          <p>Creating ripples of change in the world requires a united force, a community bound by a shared spirit. We’re more than just a television series; we’re a global movement built on co-creation and shared ownership.</p>
          <p>We empower our vibrant community and dedicated ambassadors to be active players in shaping the narrative. Together, we amplify the inspiring stories of individuals and organizations making a real difference, transforming the “affect” into a lasting, echoing “effect” that resonates for generations to come</p>
        </div>
        <div className="films-blok-icon">
          <img src={logo} alt='logo' />
        </div>
      </div>
    </section>
  )
}
export default FilmsBlok