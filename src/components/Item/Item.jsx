import React, { useState } from "react";
import styles from "./styles.module.css";

const Item = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedItem(item);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSaveEdit = () => {
    onUpdate(editedItem);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleEditChange}
          />
          <select
            name="category"
            value={editedItem.category}
            onChange={handleEditChange}
          >
            <option value="food">Food</option>
            <option value="drink">Drink</option>
          </select>

          <input
            type="number"
            name="quantity"
            value={editedItem.quantity}
            onChange={handleEditChange}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.info}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.name}>
              {item.category === "food" ? "Food" : "Drink"}
            </span>
            <span className={styles.name}>{item.quantity}</span>
          </div>

          <div className={styles.buttons}>
            <button onClick={handleEditToggle} className={styles.edit}>Edit</button>
            <button onClick={() => onDelete(item)} className={styles.delete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
