import "./CSS/Women.css"
import left_image from "../assets/women-s-shoes-clothing-accessories.jpeg"
import right_image from "../assets/women-s-shoes-clothing-accessories (1).jpeg"
import second_left_image from "../assets/women-s-shoes-clothing-accessories (2).jpeg"
import second_right_image from "../assets/women-s-shoes-clothing-accessories (3).jpeg"
import essential_first_image from "../assets/women-s-shoes-clothing-accessories (4).jpeg"
import essential_second_image from "../assets/women-s-shoes-clothing-accessories (5).jpeg"
import essential_third_image from "../assets/women-s-shoes-clothing-accessories (6).jpeg"
import HomeCarousel from "../Components/HomeCarousel/HomeCarousel"

const Women = () => {
    
  return (
    <div className="women-container">
        <p className="women">Explore Sport</p>
       <div className='programs women-explore'>
            <div className="program">
                <img src={left_image} className="left-img" alt="" />
                <div className="caption">  
                    <p className="p">Running</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="program">
                <img src={right_image} className="right-img" alt="" />
                <div className="caption">
                    <p className="p">Soccer</p>
                    <button>Shop</button>
                </div>
            </div>
        </div>

        <div className="trending-container">
          <p className="women">Trending</p>  
          <div className='programs women-explore'>
            <div className="program">
                <img src={second_left_image} className="second-left-img" alt="" />
                <div className="caption">   
                    <p className="p">Nike Alate Bra</p>
                    <p className="p2">The Perfect Workout Partner</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="program">
                <img src={second_right_image} className="second-right-img" alt="" />
                <div className="caption caption_2">
                    <p className="p">Nike Basketball Latest</p>
                    <p className="p2">Sabrina 2 &apos; Court Vision &apos;</p>
                    <button>Shop</button>
                </div>
            </div>
        </div>
        </div>

        <div className="essential-container">
          <p className="women-header">Shop the Essentials</p>
          <div className='women-programs' >
            <div className="program">
                <img src={essential_first_image} alt="" />
                <p className="under_name">Shoes</p>
            </div>
            <div className="program">
                <img src={essential_second_image} alt="" />
                <p className="under_name">Clothings</p>
            </div>
            <div className="program">
                <img src={essential_third_image} alt="" />
                <p className="under_name">Bra & Leggings</p>
            </div>
        </div>
            <h2 className="cs">Classic Spotlight</h2>
            <HomeCarousel />        
        </div>
    </div>
  )
}

export default Women   

