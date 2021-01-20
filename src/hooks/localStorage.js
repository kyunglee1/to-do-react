import { useState, useEffect } from 'react';

export default function useLocalStorage() {
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

  return [todoList, setTodoList];
}
