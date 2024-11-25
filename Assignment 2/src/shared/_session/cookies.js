import Cookies from "js-cookie";

export const cookiesService = {

  getItem: (key) => {
    return Cookies.get(key);
  },

  setItem: (key, value, options) => {
    Cookies.set(key, value, options);
  },

  removeItem: (key) => {
    Cookies.remove(key);
  },

  clearAll: () => {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach((cookie) => {
      Cookies.remove(cookie);
    });
  },
  
};
