import { RootState } from "../store";

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getIsToken = (state: RootState) => state.auth.token;
export const getIsError = (state: RootState) => state.auth.error;
const authSelectors = {
  getIsLoggedIn,
  getIsError,
  getIsToken,
};
export default authSelectors;
