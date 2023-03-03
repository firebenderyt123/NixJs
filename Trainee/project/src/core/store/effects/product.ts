import { ThunkAction } from "redux-thunk";
import { productApi } from "@core/utils/api";
import { State as ProductState, Action as ProductAction } from "../types";
import {
  LoadProductsRequest,
  LoadProductsSuccess,
  LoadProductsError,
} from "../types/product";

type Effect<R> = ThunkAction<R, ProductState, undefined, ProductAction>;

export const loadProducts = (): Effect<void> => async (dispatch) => {
  try {
    dispatch<LoadProductsRequest>({ type: "loadProductsRequest" });

    const data = await productApi.getProducts();

    dispatch<LoadProductsSuccess>({
      type: "loadProductsSuccess",
      products: data,
    });
  } catch (err: any) {
    const error = { message: err.toString() };
    dispatch<LoadProductsError>({ type: "loadProductsError", error });
  }
};
