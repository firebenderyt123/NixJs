import axios from "axios";
import { serverURI, routesPrefix } from "@core/config/api.config";
import { User } from "@core/models";

const API_URL = serverURI + routesPrefix;

export const authApi = {
  login: async (email: string, password: string): Promise<any> => {
    const { data } = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    console.log(data);
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
