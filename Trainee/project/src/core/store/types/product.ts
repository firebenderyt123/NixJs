import { Action } from "redux";
import { Product } from "@core/models";

export interface LoadingState {
  products: boolean;
}

export interface ProductState {
  loading: LoadingState;
  products: Product[];
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
}

export type ProductAction =
  | LoadProductsRequest
  | LoadProductsSuccess
  | LoadProductsError;
