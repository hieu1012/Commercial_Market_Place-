// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_ITEM_SELECTION = 'TOGGLE_ITEM_SELECTION';

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const toggleItemSelection = (itemId) => ({
  type: TOGGLE_ITEM_SELECTION,
  payload: itemId,
});