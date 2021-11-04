import "./item.css"

function Item(props) {
  return (
    <div className="card">
      <div className="itemName">Product name: {props.name}</div>
      <div className="itemPrice">Price: {props.price}</div>
      <div className="itemCategory">Category: {props.category}</div>
    </div>
  )
}

export default Item;