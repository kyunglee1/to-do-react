/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import TodoInput from '../TodoInput/index';
import Pane from '../Pane/index';
import Button from '../Button/index';
import './index.css';

const TodoList = () => {
  const [todoInput, setTodoInput] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [todoList, setTodoList] = useLocalStorage();

  const handleInputChange = (value) => {
    setTodoInput(value);
  };

  const handleAddClick = () => {
    const input = todoInput.trim();
    if (input !== '') {
      setTodoList((prev) => [...prev, { value: todoInput, id: uuidv4() }]);
      setTodoInput('');
    }
  };

  const handleSelectClick = (paneId) => {
    if (selectedItems.includes(paneId)) {
      // Deselect the already-selected item
      const index = selectedItems.indexOf(paneId);
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems((prev) => [...prev, paneId]);
    }
  };

  const handleDeleteClick = () => {
    // Remove selected items from TodoList
    const newList = [...todoList].filter(
      (_, paneId) => selectedItems.indexOf(paneId) === -1
    );
    setTodoList(newList);
    setSelectedItems([]);
  };

  const panes = todoList.map((item, index) => {
    const buttonType = selectedItems.includes(index) ? 'button-selected' : '';
    return (
      <Pane
        key={item.id}
        id={index}
        buttonType={buttonType}
        value={item.value}
        onSelectClick={handleSelectClick}
      />
    );
  });

  return (
    <div className="container">
      <TodoInput
        value={todoInput}
        onInputChange={handleInputChange}
        onAddClick={handleAddClick}
      />
      <div className="panes">{panes}</div>
      {selectedItems.length > 0 && (
        <Button
          type="button-delete"
          value="Delete"
          onClick={handleDeleteClick}
        />
      )}
    </div>
  );
};

export default TodoList;
