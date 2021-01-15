/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button';
import './index.css';

export default function Pane({ id, type, value, onClick }) {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div className="pane">
      <Button type={type} onClick={handleOnClick} />
      <span className="pane-value">{value}</span>
    </div>
  );
}
