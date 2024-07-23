/* eslint-disable react/prop-types */
import "./Trending.css"

const Trending = (props) => {
  return (
    <div className='trending'>
      <div className="trending-imgs">

        <div className="trending-img">
          <img src={props.image} alt="Soccer" />
          <div className="trending-img-text">
            <p>{props.name}</p>
            <p>{props.sub_name}</p>
            <button>{props.button_name}</button>
          </div>
        </div>

        <div className="trending-img">
          <img src={props.image} alt="Basketball" />
          <div className="trending-img-text">
            <p>{props.name}</p>
            <button>{props.button_name}</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}   

export default Trending
