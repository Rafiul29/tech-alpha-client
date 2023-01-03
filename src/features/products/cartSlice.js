import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check if the items is already in the cart
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // if exist
      if (existedItemIndex >= 0) {
        // increase quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
        // add to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    // remove item
    removeFromItem(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // decrease cart
    decreaseCart(state, action) {
      const itemindex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemindex].cartQuantity > 1) {
        state.cartItems[itemindex].cartQuantity -= 1;
      } else if (state.cartItems[findIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      }
      state.cartItems = updatedCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

        // clear cart
        clearCart(state,action){
            state.cartItems=[]
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },


    // get total
    getTotals(action,state){
        const {subtotal,quantity}=state.cartItems.reduce((acc,cartItem)=>{
            const {price,cartQuantity}=cartItem;
            const itemTotal =price *cartQuantity;

            acc.subtotal +=itemTotal;
            acc.quantity +=cartQuantity;

            return acc;
        },{
            subtotal:0,
            quantity:0
        })

        state.cartTotalAmount=subtotal;
        state.cartTotalQuantity=quantity
    }

  },
});


export const {addToCart,removeFromItem,decreaseCart,clearCart,getItem}=cartSlice.actions

export default cartSlice.reducer;