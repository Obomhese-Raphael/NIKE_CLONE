import "./CSS/Women.css"
import left_image from "../assets/women-s-shoes-clothing-accessories.jpeg"
import right_image from "../assets/women-s-shoes-clothing-accessories (1).jpeg"
import second_left_image from "../assets/women-s-shoes-clothing-accessories (2).jpeg"
import second_right_image from "../assets/women-s-shoes-clothing-accessories (3).jpeg"
import essential_first_image from "../assets/women-s-shoes-clothing-accessories (4).jpeg"
import essential_second_image from "../assets/women-s-shoes-clothing-accessories (5).jpeg"
import essential_third_image from "../assets/women-s-shoes-clothing-accessories (6).jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import shoe_1 from "../assets/air-jordan-1.jpg"
import shoe_2 from "../assets/dunk.jpg"
import shoe_3 from "../assets/air-force-1.jpg"
import shoe_4 from "../assets/blazer.jpg"
import shoe_5 from "../assets/vomero.jpg"
import shoe_6 from "../assets/air-max.jpg"

const Women = () => {

  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
  };

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
          <p className="women">Shop the Essentials</p>
          <div className='programs' >
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
        <div className="classics-container">
          <p className="women">Classics Spotlight</p>
          <Carousel 
                className="popular-images" 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                keyBoardControl={true}
                transitionDuration={500}
            >
                <div>
                    <img src={shoe_1} alt="" />
                </div>
                <div>
                    <img src={shoe_2} alt="" />
                </div>
                <div>
                    <img src={shoe_3} alt="" />
                </div>
                <div>
                    <img src={shoe_4} alt="" />
                </div>
                <div>
                    <img src={shoe_5} alt="" />
                </div>
                <div>   
                    <img src={shoe_6} alt="" />
                </div>
            </Carousel>
        </div>
        </div>
    </div>
  )
}

export default Women   

