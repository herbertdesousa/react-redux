import { IProduct, IActionTypes } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: IActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSucess(product: IProduct) {
  return {
    type: IActionTypes.addProductToCartSucess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: IActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
