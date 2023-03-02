import { ProductState, ProductAction } from "./product";

export type State = {
  product: ProductState;
};

export type Action = ProductAction;
