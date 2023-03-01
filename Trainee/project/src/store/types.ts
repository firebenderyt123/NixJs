import { Action } from "redux";

export interface Error {
  message: string;
  code?: number;
  stack?: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface LoadingState {
  users: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: Error | null;
}

export interface LoginSuccess extends Action {
  type: "loginSuccess";
  user: User | null;
}

export interface LoginFailture extends Action {
  type: "loginFailture";
  error: Error | null;
}

export interface Logout extends Action {
  type: "logout";
}

export type AuthAction = LoginSuccess | LoginFailture | Logout;
