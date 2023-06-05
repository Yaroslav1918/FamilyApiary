import { RootState } from "../store";

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getIsError = (state: RootState) => state.auth.error;
const authSelectors = {
  getIsLoggedIn,
  getIsError
};
export default authSelectors;
