import React from 'react';
import './ToDoList.css';

export const ToDoList = ({ todos, onDeleteTodo, onToogleComplited }) => (
  <ul>
    {todos.map(({ id, text, complited }) => {
      return (
        <li key={id} className="ToDoList__item">
          <input type="checkbox" checked={complited} onChange={() => onToogleComplited(id)} />
          <p className="ToDoList__text">{text}</p>
          <button
            type="button"
            className="ToDoList__button"
            onClick={() => onDeleteTodo(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
