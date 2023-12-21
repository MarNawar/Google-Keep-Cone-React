import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localStorageVal = JSON.parse(localStorage.getItem(key));
    if (localStorageVal) {
      return localStorageVal;
    }
    return initialValue;
  });

  const setValueInStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValueInStorage];
}