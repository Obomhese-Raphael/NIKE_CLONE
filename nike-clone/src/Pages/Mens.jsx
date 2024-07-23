import "./CSS/Mens.css"
import left_image from "../assets/men-s-shoes-clothing-accessories (1).png"
import right_image from "../assets/men-s-shoes-clothing-accessories (2).png"
import second_left_image from "../assets/men-s-shoes-clothing-accessories (3).jpg"
import second_right_image from "../assets/men-s-shoes-clothing-accessories (4).jpg"
import essential_first_image from "../assets/men-s-shoes-clothing-accessories (5).jpg"
import essential_second_image from "../assets/men-s-shoes-clothing-accessories (6).jpg"
import essential_third_image from "../assets/men-s-shoes-clothing-accessories (7).jpg"



const Mens = () => {
    
  return (
    <div className="men-container">
        <p className="men">Explore Sport</p>
       <div className='programs men-explore' >
            <div className="program">
                <img src={left_image} className="left-img" alt="Mmbappe Image" />
                <div className="caption">   
                    <p className="p">Soccer</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="program men-explore">
                <img src={right_image} className="right-img" alt="" />
                <div className="caption">
                    <p className="p">Basketball</p>
                    <button>Shop</button>
                </div>
            </div>
        </div>


        <div className="trending-container">
          <p className="men">Trending</p>
          <div className='programs men-trending' >
            <div className="program">
                <img src={second_left_image} className="second-left-img" alt="" />
                <div className="caption">   
                    <p className="p">Just In: Air Max Dn</p>
                    <p className="p2">Victor Wembanyama: Otherworldly Moves</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="program">
                <img src={second_right_image} className="second-right-img" alt="" />
                <div className="caption caption_2">
                    <p className="p">Retro Running</p>
                    <p className="p2">Air Pegasus 2005</p>
                    <button>Shop</button>
                </div>
            </div>
        </div>
        </div>

        <div className="essential-container">
          <p className="men essential">Shop the Essentials</p>
          <div className='men-programs' >
            <div className="program">
                <img src={essential_first_image} alt="" />
                <p className="under_name">Clothing</p>
            </div>
            <div className="program">
                <img src={essential_second_image} alt="" />
                <p className="under_name">Shoes</p>
            </div>
            <div className="program">
                <img src={essential_third_image} alt="" />
                <p className="under_name">Accessories</p>
            </div>
        </div>
        </div>      
    </div>
  )
}

export default Mens   

