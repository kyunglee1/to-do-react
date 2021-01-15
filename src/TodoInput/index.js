/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button/index';
import './index.css';

export default function TodoInput({ value, onChange, onClick }) {
  const handleInputOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="input-todo">
      <input type="text" value={value} onChange={handleInputOnChange} />
      <Button type="button-add" value="+" onClick={onClick} />
    </div>
  );
}
