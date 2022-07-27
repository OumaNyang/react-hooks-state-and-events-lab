import React, { useState }from "react";

function Item({ name, category }) {
  //const [inCart,setCart]= useState("")
  const [light, lightSwitch] = useState(false)
  const cartName = light ? "Remove From Cart" : "Add to Cart"
  const className = light ? "in-cart" : ""
 // const className = inCart ? "in-cart" : ""
  function handleAdd(){
    lightSwitch(!light)
  }
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{cartName}</button>
    </li>
  );
}

export default Item;