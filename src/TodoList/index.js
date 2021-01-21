/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/localStorage';
import TodoInput from '../TodoInput/index';
import Pane from '../Pane/index';
import Button from '../Button/index';
import './index.css';

export default function TodoList() {
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
  const handleSelectClick = (id) => {
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
  const handleDeleteClick = () => {
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
        key={item.id}
        id={index}
        type={type}
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
}
