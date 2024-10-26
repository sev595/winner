import { useEffect, useRef, useState } from "react"
import menuCloseButton from "../../images/menu-close-button.svg"
import burgerButtonIcon from "../../images/burger-button-icon.svg"


import './Menu.scss'

const BurgerMenu = ({ setIsOpenMenu }: any) => {
  return (
    <div className="menu-burger-button-conteainer" onClick={() => { setIsOpenMenu(true) }}>
      <img src={burgerButtonIcon} alt="menuCloseButton" />
    </div>
  )
}
const CloseMenu = ({ setIsOpenMenu }: any) => {
  return (
    <div className="menu-close-button-conteainer" onClick={() => { setIsOpenMenu(false) }}>
      <img src={menuCloseButton} alt="menuCloseButton" />
    </div>
  )
}


const MenuBlok = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpenMenu(false); // Close menu if clicked outside
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu])


  return (
    <div className="menu-blok">
      {
        isOpenMenu ?

          <div className="menu-container">
            <CloseMenu setIsOpenMenu={setIsOpenMenu} />
            {true &&
              <div className="menu-content" ref={menuRef}>
                <div className="menu-info-content">
                  <h1 onClick={()=>{setIsOpenMenu(false)}}>Home</h1>
                  <h1 onClick={()=>{setIsOpenMenu(false)}} >About</h1>
                  <h1 onClick={()=>{setIsOpenMenu(false)}} >Community</h1>
                  <h1 onClick={()=>{setIsOpenMenu(false)}}>FAQ</h1>
                </div>
                <div className="menu-join-us-content">
                  <button>
                    Join Us
                  </button>
                </div>
              </div>
            }
          </div>
          :
          <BurgerMenu setIsOpenMenu={setIsOpenMenu} />

      }

    </div>

  )

}

export default MenuBlok