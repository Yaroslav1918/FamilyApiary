import { RootState } from "../store";

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

const authSelectors = {
  getIsLoggedIn,
};
export default authSelectors;
