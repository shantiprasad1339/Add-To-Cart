import { configureStore } from '@reduxjs/toolkit'
import Cart from './Slice'

export const store = configureStore({
  reducer: {
    cart: Cart
  },
})
export default store;
