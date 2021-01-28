/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './index.css';

const TodoInput = ({ inputText, onInputChange, onAddClick }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddClick();
    }
  };

  return (
    <div className="input-todo">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="button-add" onClick={onAddClick}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
