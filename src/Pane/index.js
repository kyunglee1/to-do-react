/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button';
import './index.css';

export default function Pane({ id, type, value, onSelectClick }) {
  const handleClick = () => {
    onSelectClick(id);
  };
  return (
    <div className="pane">
      <Button type={type} onClick={handleClick} />
      <span>{value}</span>
    </div>
  );
}
