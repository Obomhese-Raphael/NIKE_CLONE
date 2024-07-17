import "./CSS/Kids.css"
import left_image from "../assets/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
import right_image from "../assets/nike-kids-shoes-clothing-and-accessories-nike-com (1).jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import kidspopular_1 from "../assets/kidspopular_1.png"
import kidspopular_2 from "../assets/kidspopular_2.png"
import kidspopular_3 from "../assets/kidspopular_3.png"
import kidspopular_4 from "../assets/kidspopular_4.png"
import kidspopular_5 from "../assets/kidspopular_5.png"
import kidspopular_6 from "../assets/kidspopular_6.png"
import kidspopular_7 from "../assets/kidspopular_7.png"
import kidspopular_8 from "../assets/kidspopular_8.png"
import kidspopular_9 from "../assets/kidspopular_9.png"
import kidspopular_10 from "../assets/kidspopular_10.png"
import kidssizes_1 from "../assets/kid_1.jpg"
import kidssizes_2 from "../assets/kid_2.jpg"
import kidssizes_3 from "../assets/kid_3.jpg"
import kidssizes_4 from "../assets/kid_4.jpg"
import essential_first_image from "../assets/kid_5.jpg"
import essential_second_image from "../assets/kid_6.jpg"
import essential_third_image from "../assets/kid_7.jpg"
import shoe_1 from "../assets/air-jordan-1.jpg"
import shoe_2 from "../assets/dunk.jpg"
import shoe_3 from "../assets/air-force-1.jpg"
import shoe_4 from "../assets/blazer.jpg"
import shoe_5 from "../assets/vomero.jpg"
import shoe_6 from "../assets/air-max.jpg"


const Kids = () => {
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
        <div className="carousel carousel_1">
            <p className="kids popular">Popular Right Now</p>
            <Carousel 
                className="popular-images"
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                keyBoardControl={true}
                transitionDuration={500}
                itemClass="carousel-item-padding-40-px"
                >
                <div>
                    <img src={kidspopular_1} alt="" />
                </div>
                <div>
                    <img src={kidspopular_2} alt="" />
                </div>
                <div>
                    <img src={kidspopular_3} alt="" />
                </div>  
                <div>
                    <img src={kidspopular_4} alt="" />
                </div>
                <div>
                    <img src={kidspopular_5} alt="" />
                </div>
                <div>
                    <img src={kidspopular_6} alt="" />
                </div>
                <div>
                    <img src={kidspopular_7} alt="" />
                </div>
                <div>
                    <img src={kidspopular_8} alt="" />
                </div>
                <div>
                    <img src={kidspopular_9} alt="" />
                </div>
                <div>
                    <img src={kidspopular_10} alt="" />
                </div>
            </Carousel>
        </div>
        <div className="sizes">
            <p className="kids pgh">Sizes For All</p>
            <Carousel 
                className="sizes-images popular-images" 
                responsive={responsive}
                infinite={true}
                swipeable={true}
                draggable={true}
                keyBoardControl={true}
                transitionDuration={500}
                itemClass="carousel-item-padding-40-px"
            >
                <div className="carousel-item">
                    <img src={kidssizes_1} alt="" /> 
                    <p className="block first-block">Teens</p> <br />
                    <p className="block2">Explore apparel (XS -XL) and shoes (3.5 - 7Y)</p>
                </div>
                <div className="carousel-item">
                    <img src={kidssizes_2} alt="" />
                    <p className="block">Big Kids</p> <br />
                    <p className="block2">Explore apparel (XS -XL) and shoes (3.5 - 7Y)</p> 
                </div>
                <div className="carousel-item">
                    <img src={kidssizes_3} alt="" />
                    <p className="block">Little Kids</p> <br />
                    <p className="block2">Explore apparel (4 - 7) and shoes (10C - 3Y)</p> <br />
                    
                </div>
                <div className="carousel-item">
                    <img src={kidssizes_4} alt="" />
                    <p className="block">Babies and Toddlers</p> <br />
                    <p className="block2">Explore apparel (0M - 4T) and shoes (0C - 10C)</p> 
                </div>
            </Carousel>
        </div>

        <div className="essential-container explore-container">
          <p className="kids essential">More to Explore</p>
          <div className='programs' >
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

        <div className="mini-classics classics-container">
            <p className="mini-kids">Mini Classics</p>
            <Carousel 
                className="kids-classic-images classics-images" 
                responsive={responsive}
                swipeable={true}
                draggable={true}
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

export default Kids   
