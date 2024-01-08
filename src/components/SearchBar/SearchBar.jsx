import React from "react";
import styles from "./styles.module.css"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchBar;
