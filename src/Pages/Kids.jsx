import "./CSS/Kids.css"
import left_image from "../assets/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
import right_image from "../assets/nike-kids-shoes-clothing-and-accessories-nike-com (1).jpg"
import essential_first_image from "../assets/kid_5.jpg"
import essential_second_image from "../assets/kid_6.jpg"
import essential_third_image from "../assets/kid_7.jpg"


const Kids = () => {
    
  return (
    <div className="kids-container">
        <p className="kids">Trending</p>
       <div className='programs kids-explore'>
            <div className="program">
                <img src={left_image} className="left-image" alt="" />
                <div className="caption">   
                    <p className="p">New Arrivals</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="program">
                <img src={right_image} className="right-image" alt="" />
                <div className="caption">
                    <p className="p">Jordans Latest</p>
                    <button>Shop</button>
                </div>
            </div>
        </div>

        <div className="essential-container">
          <p className="kids essential">More to Explore</p>
          <div className='kids-programs' >
            <div className="program">
                <img src={essential_first_image} alt="" />
                <p className="under_name">Best Sellers</p>
                <p className="under_under"><a href="#" className="shop-link">Shop</a></p>
            </div>
            <div className="program">
                <img src={essential_second_image} alt="" />
                <p className="under_name">Nike Fleece</p>
                <p className="under_under"><a href="#" className="shop-link">Shop</a></p>
            </div>
            <div className="program">
                <img src={essential_third_image} alt="" />
                <p className="under_name">Nike Basketball</p>
                <p className="under_under"><a href="#" className="shop-link">Shop</a></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Kids   
