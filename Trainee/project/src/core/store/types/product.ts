import { Action } from "redux";
import { Product, Error } from "@core/models";

export interface LoadingState {
  products: boolean;
}

export interface ProductState {
  loading: LoadingState;
  products: Product[];
  error: Error | null;
}

export interface LoadProductsRequest extends Action {
  type: "loadProductsRequest";
}

export interface LoadProductsSuccess extends Action {
  type: "loadProductsSuccess";
  products: Product[];
}

export interface LoadProductsError extends Action {
  type: "loadProductsError";
  error: Error;
}

export type ProductAction =
  | LoadProductsRequest
  | LoadProductsSuccess
  | LoadProductsError;
