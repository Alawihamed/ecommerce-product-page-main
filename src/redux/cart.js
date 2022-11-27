import { createSlice } from "@reduxjs/toolkit";

export const cartItemserSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, data) => {
      if(data.payload.quntity === 0 ) return;
      const checkItem = state.cartItems.find(
        (eachItem) => eachItem.id === data.payload.id
      );
      if (checkItem) {
        state.cartItems.forEach((eachItem) => {
          if (eachItem.id === data.payload.id) {
            eachItem.quntity = data.payload.quntity;
            state.total = 0;
            state.cartItems.forEach((eachItem) => {
              let itemCost = eachItem.quntity * eachItem.price;
              state.total = state.total + itemCost;
            });
          }
        });
      } else {
        state.cartItems = [...state.cartItems, data.payload];
        state.total = 0;
        state.cartItems.forEach((eachItem) => {
          let itemCost = eachItem.quntity * eachItem.price;
          state.total = state.total + itemCost;
        });
      }
    },
    removeFromCart: (state, data) => {
      state.cartItems = state.cartItems.filter(
        (eachitem) => eachitem.id !== data.payload.id
      );
      state.total = 0;
      state.cartItems.forEach((eachItem) => {
        let itemCost = eachItem.quntity * eachItem.price;
        state.total = state.total + itemCost;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
} = cartItemserSlice.actions;

export default cartItemserSlice.reducer;
