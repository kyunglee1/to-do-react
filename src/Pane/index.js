/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button';
import './index.css';

const Pane = ({ id, buttonType, value, onSelectClick }) => {
  const handleClick = () => {
    onSelectClick(id);
  };

  return (
    <div className="pane">
      <Button type={buttonType} onClick={handleClick} />
      <span>{value}</span>
    </div>
  );
};

export default Pane;
