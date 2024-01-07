import React, { useState } from "react";

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
    <div>
      <div>
        <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="drink">Drink</option>
        </select>
      </div>
      <div>
        <button onClick={() => handleSortChange("asc")}>
          Lowest to highest
        </button>
        <button onClick={() => handleSortChange("desc")}>
          Highest to lowest
        </button>
      </div>
    </div>
  );
};

export default Filters;
