import produce from "immer";
import { State, Action } from "../types";

const initialState: State["product"] = {
  loading: {
    products: false,
  },
  products: [],
};

const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "loadProductsRequest":
      return produce(state, (draft) => {
        draft.loading.products = true;
      });
    case "loadProductsSuccess":
      return produce(state, (draft) => {
        draft.loading.products = false;
        draft.products = action.products;
      });
    case "loadProductsError":
      return produce(state, (draft) => {
        draft.loading.products = false;
      });
    default:
      return state;
  }
};

export default productReducer;
