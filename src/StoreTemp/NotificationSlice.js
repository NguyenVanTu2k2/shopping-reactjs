import { createSlice } from '@reduxjs/toolkit'

export const NotificationSlice = createSlice({
  name: 'Cart',
  initialState: {
   Notification: "",
   addToCart :  " Add To Cart",
   Login :  " Sign In Successfully",
   SignOut: " Sign Out",
   SignInError: " user or password incorrect",
   removeCartItem: " removed successfully",
  },
  reducers: {
    setNotification: (state) => {
       state.Notification = "";
    },
    setNotificationAddToCard: (state) => {
      state.Notification = state.addToCart;
   },

   setNotificationLogin: (state) => {
    state.Notification = state.Login;
 },

 setNotificationSignOut: (state) => {
  state.Notification = state.SignOut;
},

setNotificationSignInError: (state) => {
  state.Notification = state.SignInError;
},

setNotificationRemoveCartItem: (state) => {
  state.Notification = state.removeCartItem;
},
 
  },
})

// Action creators are generated for each case reducer function
export const { setNotification, setNotificationAddToCard,setNotificationLogin,setNotificationSignOut,setNotificationSignInError,setNotificationRemoveCartItem } = NotificationSlice.actions

export default NotificationSlice.reducer