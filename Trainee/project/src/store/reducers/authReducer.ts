import produce from "immer";
import { AuthState, AuthAction } from "../types";

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case "loginSuccess":
      return produce(state, (draft) => {
        draft.isAuthenticated = true;
        draft.user = action.user;
        draft.error = null;
      });
    case "loginFailture":
      return produce(state, (draft) => {
        draft.isAuthenticated = false;
        draft.user = null;
        draft.error = action.error;
      });
    case "logout":
      return produce(state, (draft) => {
        draft.isAuthenticated = false;
        draft.user = null;
        draft.error = null;
      });
    default:
      return state;
  }
};

export default authReducer;
