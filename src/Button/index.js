/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './index.css';

export default function Button({ type, value, onClick }) {
  return (
    <button className={type} onClick={onClick}>
      {value || ''}
    </button>
  );
}
