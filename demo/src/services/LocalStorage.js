export default {
  Set(key, data) {
    if (!key || !data) return; 
    localStorage.setItem(key, JSON.stringify(data));
  },
  Get(key) {
    if (!key) return; 
    const resault = JSON.parse(localStorage.getItem(key));
    return resault;
  },
  Clear(key) {
    if (!key) return;
    localStorage.removeItem(key);
  }
}
