export function getItemStorage(key) {
  return localStorage.getItem(key);
}
export function setItemStorage(key, value) {
  return localStorage.setItem(key, value);
}
export function removeItemStorage(key) {
  return localStorage.removeItem(key);
}

export function clearAllStorage() {
  return localStorage.clear();
}
