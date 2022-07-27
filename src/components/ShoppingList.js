import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All");
  const [list] = useState(items);

  const listToDisplay = list.filter((list) => {
    if (filterBy === "All") {
      return true;
    } else {
      return list.category === filterBy;
    }
  });

  const foodList = listToDisplay.map((lists) => (
    <Item key={lists.id} name={lists.name} category={lists.category} />
  ));

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleFilterChange}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {foodList}
      </ul>
    </div>
  );
}

export default ShoppingList;