/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button/index';
import './index.css';

export default function TodoInput({ value, onInputChange, onAddClick }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };
  const handleClick = () => {
    onAddClick();
  };
  return (
    <div className="input-todo">
      <input type="text" value={value} onChange={handleChange} />
      <Button type="button-add" value="+" onClick={handleClick} />
    </div>
  );
}
