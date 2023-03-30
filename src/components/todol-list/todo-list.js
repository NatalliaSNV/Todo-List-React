import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggleDone, onToggleImportant }) => {

  const elements = todos.map((item) => {
    const { key, ...itemProps } = item;

    return (
      <li key={key} className="list-group-item">
        <TodoListItem {...itemProps } 
        onDelete={() => onDelete(key)}
        onToggleDone={() => onToggleDone(key)}
        onToggleImportant={() => onToggleImportant(key)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;