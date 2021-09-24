export const TOKEN_KEYS = "$$TOKEN_KEYS";

export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const setLocalStorage = (key, value) => {
  if (typeof value == "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorage = (key) => localStorage.getItem(key);
export const parseLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || {};
