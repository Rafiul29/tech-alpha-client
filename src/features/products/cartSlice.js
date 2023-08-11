import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
        (item) => item._id === action.payload._id
      );

      // if exist
      if (existedItemIndex >= 0) {
        // increase quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;
        toast.info('Quantity Increase', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);

        toast.success('Product added into cart', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
       // add to local storage
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // remove item
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = updatedCartItems;
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.warn('Product remove from cart!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    },

    clearCart(state, action) {
      state.cartItems = [];
      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error('cart clear', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      //if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info('Quantity decrease', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = updatedCartItems;
        toast.warn('Product remove from cart!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      //update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //total amount

    getSubtotal(state,action){
      const subtotal=state.cartItems.reduce((acc,item)=>{
          const {price,cartQuantity}=item;
          const itemTotal=price*cartQuantity;
          acc+=itemTotal;
          return acc
      },0)
      state.cartTotalAmount=subtotal;
    }
 


  },
});

export const { addToCart, removeFromCart, clearCart ,decreaseCart,getSubtotal} = cartSlice.actions;

export default cartSlice.reducer;
