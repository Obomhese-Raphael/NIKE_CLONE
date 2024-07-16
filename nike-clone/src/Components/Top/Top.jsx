import "./Top.css"
import converse_logo from "../../assets/Converse-logo.png"
import jordan_logo from "../../assets/jordan-logo(4).png"
import { Link } from "react-router-dom"

const Top = () => {
  return (
    <div className='top'>
        <div className="top-items">
            <div className="top-left-items">
                <img src={jordan_logo} className="jordan-logo" />
                <img src={converse_logo} className="converse-logo" />
            </div>
            <div className="top-right-items">
                <ul>
                    <li><Link to="/" replace reloadDocument>Home</Link></li>
                    <li>Find a Store</li>
                    <li>Help</li>
                    <li>Join Us </li>
                    <li className="signup"><Link to="/signup" replace reloadDocument>Signup</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
   
export default Top
