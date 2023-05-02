const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserEmail = (state) => state.auth.user.email;
const getUserName = (state) => state.auth.user.firstName;
const getUserLastName = (state) => state.auth.user.LastName;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getUserLastName,
};
export default authSelectors;
