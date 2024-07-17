import React from "react";

export const TodoIntem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span
        className={`text-capitalize ${
          todo.done && "text-decoration-line-through"
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
