import { useState, useEffect } from 'react';

const useLocalStorage = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      setTodoList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    const storeList = () => {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    window.addEventListener('beforeunload', storeList);

    return () => {
      window.removeEventListener('beforeunload', storeList);
    };
  }, [todoList]);

  return [todoList, setTodoList];
};

export default useLocalStorage;
