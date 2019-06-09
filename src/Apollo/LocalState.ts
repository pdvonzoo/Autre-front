export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};
