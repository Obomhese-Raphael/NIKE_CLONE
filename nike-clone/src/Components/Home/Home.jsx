import "./Home.css"
import run from "../../assets/nike-just-do-it.jpg"
import Pegasus_41 from "../Pegasus_41/Pegasus_41"
import Membership from "../Membership/Membership"

const Home = () => {
  return (
    <div className="home">
      <div className="home-item">
        <img src={run} className="run-img" />
        
      </div>      
        <Pegasus_41 />
        <Membership />
    </div>
    

  )
}

export default Home   
