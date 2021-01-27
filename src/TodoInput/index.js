/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button/index';
import './index.css';

const TodoInput = ({ value, onInputChange, onAddClick }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="input-todo">
      <input type="text" value={value} onChange={handleChange} />
      <Button type="button-add" value="+" onClick={onAddClick} />
    </div>
  );
};

export default TodoInput;
