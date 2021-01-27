/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

const Pane = ({ id, isSelected, value, onSelectClick }) => {
  const handleClick = () => {
    onSelectClick(id);
  };

  return (
    <div className="pane">
      <button
        className={isSelected ? 'button-selected' : ''}
        onClick={handleClick}
      />
      <span>{value}</span>
    </div>
  );
};

export default Pane;
