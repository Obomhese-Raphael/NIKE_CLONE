import "./Navbar.css"
import nike_logo from "../../assets/logo(2).png"
import love_img from "../../assets/love-img.png"
import love_filled_icon from "../../assets/love-filled-icon.jpg"
import cart_img from "../../assets/cart-img.png"
import search_img from "../../assets/search-img.png"
import dropdown_icon from "../../assets/dropdown-logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [isFilled, setIsFilled] = useState(false); 
  const [mobileMenu, setMobileMenu] = useState(false);
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }  

  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-left-item">
            <img src={nike_logo} className="logo" />
        </div>
        <div className={mobileMenu ? "hide-mobile-menu" : "navbar-center-items"}>
            <ul className="ul">
                <li><a href=""><Link to="/">Shop</Link></a></li>
                <li><a href="">New & Featured</a></li>
                <li><a href=""><Link style={{textDecoration: "none"}} to="/mens">Mens</Link> </a></li>
                <li><a href=""><Link style={{textDecoration: "none"}} to='/womens'>Womens</Link> </a></li>
                <li><a href=""><Link style={{textDecoration: "none"}} to='/kids'>Kids</Link>  </a></li> 
                <li><img src={search_img} className="dropdown-search-img"/></li>
            </ul>
        </div>
        <div className="navbar-right-items">
            <input className="input" type="text" placeholder="Search" autoComplete="off" id="" />
            <img src={search_img} className="search-img" />
            <img
              src={isFilled ? love_filled_icon : love_img} // 
              className="love-img"
              alt="Love"
              onClick={handleClick}
            />
            <Link><img src={cart_img} onClick={() => setCount(count + 1)} className="cart-img" /></Link>
            <div className="nav-cart-count">{count}</div>
        </div>
        <img src={dropdown_icon} className='menu_icon dropdown_menu' onClick={toggleMenu}/>
      </div>
    </div>
  )
}

export default Navbar