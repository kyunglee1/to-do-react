/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import TodoInput from '../TodoInput/index';
import Pane from '../Pane/index';
import Button from '../Button/index';
import './index.css';

export default function App() {
  const [todoInput, setTodoInput] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      setTodoList(JSON.parse(storedList));
    }
  }, []);
  useEffect(() => {
    function storeList() {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    window.addEventListener('beforeunload', storeList);
    return () => {
      window.removeEventListener('beforeunload', storeList);
    };
  }, [todoList]);

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
      const index = selectedItems.indexOf(id);
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems((prev) => [...prev, id]);
    }
  };
  const handleDeleteOnClick = () => {
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
          value="Delete selected item(s)"
          onClick={handleDeleteOnClick}
        />
      )}
    </div>
  );
}
