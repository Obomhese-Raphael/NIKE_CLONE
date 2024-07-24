import { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, new_collections, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItems'> 
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
       {new_collections.map((item, i) => {
        if(item.id > 0) {
            return <div key={i}>
                        <div className="cartItems-format cartItems-format-main">
                            <img src={item.image} className='cartIcon-product-icon' alt="" />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[item.id]}</button>
                            <p>${item.new_price * cartItems[item.id]}</p>
                            <img className='cartItems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(item.id)}} alt="" />
                        </div>
                    </div>
        } 
        return <p key={i}>Nothing Here</p>
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartItems-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartItems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
