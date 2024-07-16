/* eslint-disable react/prop-types */
import "./CSS/ShopCategory.css"
// import dropdown_icon from "../assets/dropdown_icon.png"

const ShopCategory = (props) => {

  console.log(props)
  return (
    <div className='shop-category'>
      <div className="banner-category">
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-indexSort">
        <h1>WIN ON AIR</h1>
        <p>Meet the next generation of Nike Air. Engineered to the exact <br />
         specifications of champion athletes</p>
          <div className="btns">                
              <button>Experience Air</button>
              <button>Shop Air</button>
          </div>

        <div>
          {props.page}
        </div>

    </div>
    <div className="footer-row">
      {props.footer_row}
    </div>
    </div>
  )
}

export default ShopCategory
