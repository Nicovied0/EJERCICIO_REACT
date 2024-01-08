import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import Filters from "../Filters/Filters";
import styles from "./styles.module.css";
import productsData from "../../assets/data/productsData.json";
import SearchBar from "../SearchBar/SearchBar";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("storedItems"));
    if (!storedItems) {
      localStorage.setItem("storedItems", JSON.stringify(productsData));
      setItems(productsData);
    } else {
      setItems(storedItems);
    }
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
  }).filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sort === "asc") {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  });


  return (
    <div>
      <Filters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {sortedItems.length === 0 ? (
        <div className={styles.container}>
          <p className={styles.noFound}   >No items found.</p></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.info}>
            <span className={styles.name}>Product</span>
            <span className={styles.name}>Category</span>
            <span className={styles.name}>Stock</span>
          </div>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
              onUpdate={handleUpdateItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
