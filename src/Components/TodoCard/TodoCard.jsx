import React, { useState } from "react";
import "./TodoCard.css";
import { EditTodo } from "../EditTodo/EditTodo";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../slices/todoItemsSlice";

export const TodoCard = ({ userId, todo, completed, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    dispatch(
      updateTodo({ id: userId, todo: { ...todo, completed: isChecked } })
    );
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <EditTodo todo={{ id: userId, todo }} onClose={handleCloseEdit} />
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleChange} // Обработчик изменения состояния
          />
          <p>{todo}</p>
          <div className="buttonsDeleteEdit">
            <button className="green-btn" onClick={onDelete}>
              Delete
            </button>
            <button className="red-btn" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};
