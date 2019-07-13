import React from 'react';
import './Todo-Item.css';

const TodoItem: React.FC = () => {
  return (
    <li className="list-group-item">
      <div className="undone">
        <span className="glyphicon glyphicon-ok icon" aria-hidden="true" />
        learn react
        <button type="button" className="close">
          &times;
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
