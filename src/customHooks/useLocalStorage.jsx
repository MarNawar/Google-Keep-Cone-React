import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Initialize the state using the initialValue or value stored in localStorage (if available)
  const [value, setValue] = useState(() => {
    // Retrieve the value associated with the provided key from localStorage
    const localStorageVal = JSON.parse(localStorage.getItem(key));

    // Return the localStorage value if it exists; otherwise, use the initialValue
    if (localStorageVal) {
      return localStorageVal;
    }
    return initialValue;
  });

  // Function to update localStorage and state with a new value
  const setValueInStorage = (newValue) => {
    // Update the state with the new value
    setValue(newValue);

    // Store the new value in localStorage using the provided key
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Return the current value and the function to update localStorage and state
  return [value, setValueInStorage];
}
