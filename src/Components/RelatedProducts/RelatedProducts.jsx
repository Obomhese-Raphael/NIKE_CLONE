
import "./RelatedProducts.css"
import Item from "../Items/Item"
import new_collections from "../assets/new_collections"

const RelatedProducts = (props) => {
    console.log(props)
  return (
    <div className='related-products'>
      <h2 className="h2">Related Products</h2>
      <hr className="hr" />
      <div className="relatedproducts-item">
            {new_collections.map((item, i) => {
                if (item.category) {
                    console.log(item)
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price} />
                } else {
                    return null
                }
            })}
      </div>
    </div>
  )
}

export default RelatedProducts


