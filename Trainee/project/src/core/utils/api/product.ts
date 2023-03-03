import axios from "axios";
import { serverURI, routesPrefix } from "@core/config/api.config";

const API_URL = serverURI + routesPrefix;

export const getProducts = async (): Promise<any> => {
  const response = await fetch(`${API_URL}/products/`);
  return await response.json();
};
