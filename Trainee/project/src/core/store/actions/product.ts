import { ThunkAction } from "redux-thunk";
import { Product } from "@core/models";
import { State as ProductState, Action as ProductAction } from "../types";
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

export const loadProductsError = (): LoadProductsError => ({
  type: "loadProductsError",
});

type Effect<R> = ThunkAction<R, ProductState, undefined, ProductAction>;

export const loadProducts = (): Effect<void> => async (dispatch) => {
  try {
    dispatch<LoadProductsRequest>({ type: "loadProductsRequest" });

    const response = await fetch("http://localhost:5000/api/products/");
    const data = await response.json();

    dispatch<LoadProductsSuccess>({
      type: "loadProductsSuccess",
      products: data,
    });
  } catch (error) {
    console.log(error);
    dispatch<LoadProductsError>({ type: "loadProductsError" });
  }
};
