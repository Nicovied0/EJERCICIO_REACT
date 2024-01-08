import React, { useState } from "react";
import styles from "./styles.module.css";

const Filters = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
    onFilterChange(filterType);
  };

  const handleSortChange = (sortType) => {
    onSortChange(sortType);
  };

  return (
    <div className={styles.container}>
      <div>
        <select
          className={styles["select-filter"]}
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="drink">Drink</option>
        </select>
      </div>
      <div className={styles.buttonsFilters}>
        <button
          className={styles["btn-sort"]}
          onClick={() => handleSortChange("asc")}
        >
          Lowest to highest
        </button>
        <button
          className={styles["btn-sort"]}
          onClick={() => handleSortChange("desc")}
        >
          Highest to lowest
        </button>
      </div>
    </div>
  );
};

export default Filters;
