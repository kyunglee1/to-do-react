/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import useLocalStorage from '../hooks/localStorage';
import TodoInput from '../TodoInput/index';
import Pane from '../Pane/index';
import Button from '../Button/index';
import './index.css';

export default function TodoList() {
  const [todoInput, setTodoInput] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [todoList, setTodoList] = useLocalStorage();
  const handleInputOnChange = (value) => {
    setTodoInput(value);
  };
  const handleAddOnClick = () => {
    const input = todoInput.trim();
    if (input !== '') {
      setTodoList((prev) => [...prev, todoInput]);
      setTodoInput('');
    }
  };
  const handleSelectOnClick = (id) => {
    if (selectedItems.includes(id)) {
      // Deselect the already-selected item
      const index = selectedItems.indexOf(id);
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems((prev) => [...prev, id]);
    }
  };
  const handleDeleteOnClick = () => {
    // Remove selected items from TodoList
    const newList = [...todoList].filter(
      (_, id) => selectedItems.indexOf(id) === -1
    );
    setTodoList(newList);
    setSelectedItems([]);
  };

  const panes = todoList.map((item, index) => {
    const type = selectedItems.includes(index) ? 'button-selected' : '';
    return (
      <Pane
        // eslint-disable-next-line react/no-array-index-key
        key={item + index}
        id={index}
        type={type}
        value={item}
        onClick={handleSelectOnClick}
      />
    );
  });

  return (
    <div className="container">
      <TodoInput
        value={todoInput}
        onChange={handleInputOnChange}
        onClick={handleAddOnClick}
      />
      <div className="panes">{panes}</div>
      {selectedItems.length > 0 && (
        <Button
          type="button-delete"
          value="Delete"
          onClick={handleDeleteOnClick}
        />
      )}
    </div>
  );
}
