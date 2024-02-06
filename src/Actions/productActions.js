// productActions.js
export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});