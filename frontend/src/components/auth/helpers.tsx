import cookie from "js-cookie";

// Methods for storing and receiving cookies.
// Create a cookie.
export const setCookie = (key: string, value: string) => {
  // Use the top level object which is the Window.
  if (window !== undefined) {
    cookie.set(key, value, { expires: 7 });
  }
};
// Remove a cookie.
export const removeCookie = (key: string) => {
  if (window !== undefined) {
    cookie.remove(key, { expires: 7 });
  }
};
// Get cookie from token. Token is also used for requesting to server.
export const getCookie = (key: string) => {
  if (window !== undefined) {
    return cookie.get(key);
  }
};
// Save in Local storage.
export const setLocalStorage = (key: string, value: string) => {
  if (window !== undefined) {
    // Parse the value later.
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// Remove in Local storage.
export const removeLocalStorage = (key: string) => {
  if (window !== undefined) {
    // Parse the value later.
    localStorage.removeItem(key);
  }
};
// Authenticate user by saving data as a cookie and save in locate storage once logged in.
export const authenticate = (response: any, next: () => void) => {
  // Once we get the response, we can utilise the above methods.
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};
// Access user info from the local storage.
export const isAuth = () => {
  if (window !== undefined) {
    // Confirms that the token exists.
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        // I'm confident that this will return the user details and not a null.
        return JSON.parse(localStorage.getItem("user")!);
      } else {
        return false;
      }
    }
  }
};
