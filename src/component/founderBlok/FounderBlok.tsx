import './founderBlok.scss'
import FounderImg from "../../images/reviews_img.png"
import logo from "../../images/quotes.png"
import founderAddIcon from "../../images/founder-add-icon.svg"
import { useState } from 'react'
import FounderBlokModal from './founderBlokModal'


const FounderBlok = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  console.log(isOpenModal);
  
  return (
    <section className="founder-blok-container">
      <div className="founder-blok-content">
        <div className="founder-blok-picture">
          <div className='founder-add-icon' onClick={()=>{setIsOpenModal(true)}}>
            <img src={founderAddIcon} alt=''/>
          </div>
          <img src={FounderImg} alt='asd' />
        </div>
        <div className="founder-blok-info">
          <h1>Jason Neubauer</h1>
          <h2>Founder</h2>
          <p>Affect Change is a movement where ordinary sparks create extraordinary fire in each and everyone of us.</p>
        </div>
        <div className="founder-blok-icon" >
          <img src={logo} alt='logo' />
        </div>
      </div>
      {isOpenModal &&  <FounderBlokModal isOpen={isOpenModal} onClose={setIsOpenModal}/>}
    </section>
  )
}
export default FounderBlok  