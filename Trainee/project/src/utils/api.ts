import axios from "axios";
import { serverURI, routesPrefix } from "../config/api.config";
import { User } from "../store/types";

const API_URL = serverURI + routesPrefix;

export const authApi = {
  login: async (email: string, password: string): Promise<User> => {
    const { data } = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    return data;
  },

  logout: async (): Promise<void> => {
    await axios.post(`${API_URL}/users/logout`);
  },

  getCurrentUser: async (): Promise<User | null> => {
    const { data } = await axios.get(`${API_URL}/users/current`);
    return data;
  },
};
