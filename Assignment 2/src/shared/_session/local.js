function set(key, value) {
  localStorage.setItem(key, value);
}

function getItem(key) {
  return localStorage.getItem(key);
}

function clear(key) {
  localStorage.removeItem(key);
}

function clearAll() {
  localStorage.clear();
}

export const localService = { set, getItem, clear, clearAll };
