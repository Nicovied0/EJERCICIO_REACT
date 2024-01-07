import React, { useState } from "react";

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
          <input
            type="checkbox"
            name="isFood"
            checked={editedItem.isFood}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="quantity"
            value={editedItem.quantity}
            onChange={handleEditChange}
          />
          <button onClick={handleSaveEdit}>Guardar</button>
        </div>
      ) : (
        <div>
          <span>{item.name}</span>
          <span>{item.category === "food" ? "Comida" : "Bebida"}</span>
          <span>{item.quantity}</span>

          <button onClick={handleEditToggle}>Editar</button>
          <button onClick={() => onDelete(item)}>Borrar</button>
        </div>
      )}
    </div>
  );
};

export default Item;
