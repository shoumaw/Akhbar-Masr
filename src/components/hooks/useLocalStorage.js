import { useState, useEffect} from "react";


export const useLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
      localStorage.getItem(localStorageKey) || ''
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, setValue];
  };