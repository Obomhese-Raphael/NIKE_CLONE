import "./Classics.css"
import shoe_1 from "../../assets/air-jordan-1.jpg"
import shoe_2 from "../../assets/dunk.jpg"
import shoe_3 from "../../assets/air-force-1.jpg"
import shoe_4 from "../../assets/blazer.jpg"
import shoe_5 from "../../assets/vomero.jpg"
import shoe_6 from "../../assets/air-max.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import all_product from "../assets/all_product"

const Classics = (props) => {
    console.log(props)

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
    <div className='classics classics-images'>
      <div className="classics-section">
        <h2 className="classics-header">SHOP BY CLASSICS</h2>   
      </div>  
      <Carousel 
        className="popular-images" 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
        transitionDuration={500}
        >
                <div key={all_product[1].id} >
                    <img src={shoe_1} alt="" />
                </div>
                <div key={all_product[2].id}>
                    <img src={shoe_2} alt="" />
                </div>
                <div key={all_product[3].id}>
                    <img src={shoe_3} alt="" />
                </div>
                <div key={all_product[4].id}>
                    <img src={shoe_4} alt="" />
                </div>
                <div key={all_product[5].id}>
                    <img src={shoe_5} alt="" />
                </div>
                <div key={all_product[6].id}>
                    <img src={shoe_6} alt="" />
                </div>
     </Carousel>
    </div>
  )
}

export default Classics
