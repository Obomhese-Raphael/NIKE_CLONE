import "./CSS/Mens.css"
import left_image from "../assets/men-s-shoes-clothing-accessories (1).png"
import right_image from "../assets/men-s-shoes-clothing-accessories (2).png"
import second_left_image from "../assets/men-s-shoes-clothing-accessories (3).jpg"
import second_right_image from "../assets/men-s-shoes-clothing-accessories (4).jpg"
import essential_first_image from "../assets/men-s-shoes-clothing-accessories (5).jpg"
import essential_second_image from "../assets/men-s-shoes-clothing-accessories (6).jpg"
import essential_third_image from "../assets/men-s-shoes-clothing-accessories (7).jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import shoe_1 from "../assets/air-jordan-1.jpg"
import shoe_2 from "../assets/dunk.jpg"
import shoe_3 from "../assets/air-force-1.jpg"
import shoe_4 from "../assets/blazer.jpg"
import shoe_5 from "../assets/vomero.jpg"
import shoe_6 from "../assets/air-max.jpg"



const Mens = () => {
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
          <div className='programs' >
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

        <div className="classics-container">
          <p className="men classics">Classics Spotlight</p>
          <Carousel 
            className="popular-images classic-images"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            itemClass="carousel-item-padding-40-px"
            >
                <div className="carousel_img1">
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
  )
}

export default Mens   

