import React from 'react';
import './Todo-Item.css';
const TodoItem: React.FC<{ value: string; itemClass: string; onClose: () => void }> = ({ value, itemClass, onClose }) => {
  return (
    <li className="list-group-item">
      <div className={itemClass}>
        <span className="glyphicon glyphicon-ok icon" aria-hidden="true" />
        {value}
        <button type="button" className="close" onClick={onClose}>
          &times;
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
