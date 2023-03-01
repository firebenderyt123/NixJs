import axios from "axios";
import { authApi } from "../../utils/api";
import { User, Error, LoginSuccess, LoginFailture, Logout } from "../types";

export const loginSuccessAction = (user: User): LoginSuccess => ({
  type: "loginSuccess",
  user,
});

export const loginFailtureAction = (error: Error): LoginFailture => ({
  type: "loginFailture",
  error,
});

export const logoutAction = (): Logout => ({
  type: "logout",
});

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const resp = await authApi.login(email, password);
      const user = resp.data;
      localStorage.setItem("accessToken", user.token);
      dispatch(loginSuccessAction(user));
    } catch (error) {
      dispatch(loginFailureAction(error));
    }
  };

export const logout = () => async (dispatch: any) => {
  try {
    await authApi.logout();
    localStorage.removeItem("accessToken");
    dispatch(logoutAction());
  } catch (error) {
    console.error(error);
  }
};

export const checkLoginStatus = () => async (dispatch: any) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const resp = await authApi.getCurrentUser();
      const user = resp.data;
      dispatch(loginSuccessAction(user));
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch(logoutAction());
  }
};
