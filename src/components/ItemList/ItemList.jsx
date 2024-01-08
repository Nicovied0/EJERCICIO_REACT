import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import Filters from "../Filters/Filters";
import productsData from "../../assets/data/productsData.json";
import AddProduct from "../AddProduct/AddProduct";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    setItems(productsData);
    console.log(productsData)
  }, []);

  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
    setItems(updatedItems);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "all") {
      return true;
    } else if (filter === "food") {
      return item.category === "food";
    } else {
      return item.category === "drink";
    }
  });
  

  const sortedItems = filteredItems.sort((a, b) => {
    if (sort === "asc") {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  });

const handleAddProduct = (newProduct) => {
    setItems([...items, newProduct]);
  };

  return (
    <div>
      <Filters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <div>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={handleDeleteItem}
            onUpdate={handleUpdateItem}
          />
        ))}
      </div>
      
    </div>
  );
};
  
export default ItemList;
