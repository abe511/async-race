import { useState, useEffect } from 'react';

const getLocalValue = (key: string, initialState: unknown) => {
  if (key) {
    const value: string | null = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  if (initialState instanceof Function) {
    return initialState();
  }
  return initialState;
};

const useLocalStorage = (key: string, initialState: unknown) => {
  const [state, setState] = useState(() => {
    return getLocalValue(key, initialState);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
