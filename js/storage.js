// js/storage.js

export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
