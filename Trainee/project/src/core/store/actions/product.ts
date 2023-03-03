import { Product, Error } from "@core/models";
import {
  LoadProductsRequest,
  LoadProductsSuccess,
  LoadProductsError,
} from "../types/product";

export const loadProductsRequest = (): LoadProductsRequest => ({
  type: "loadProductsRequest",
});

export const loadProductsSuccess = (
  products: Product[]
): LoadProductsSuccess => ({
  type: "loadProductsSuccess",
  products,
});

export const loadProductsError = (error: Error): LoadProductsError => ({
  type: "loadProductsError",
  error,
});
